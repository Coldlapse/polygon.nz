(function () {
  "use strict";
  var D = window.POLYGON;
  var root = document.documentElement;
  var lang = root.getAttribute("lang") === "en" ? "en" : "ko";
  var $ = function (id) { return document.getElementById(id); };
  var status = "loading"; // "loading" | null (failed) | watchtower answer
  var beatBase = null;    // { ago: seconds at fetch time, at: Date.now() at fetch time }
  var loading = false, lastLoad = 0;

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function t(v) { return v == null ? "" : typeof v === "string" ? v : (v[lang] != null ? v[lang] : v.ko); }
  function ui(k) { return D.ui[lang][k] || D.ui.ko[k] || ""; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function ext(u) { return u.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : ""; }
  function pad(n) { return String(n).padStart(2, "0"); }

  function renderStatic() {
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-t")); });
    $("lang-ko").className = lang === "ko" ? "on" : "";
    $("lang-en").className = lang === "en" ? "on" : "";
    document.title = "Polygon";
  }

  /* ---------- status board ---------- */
  function stateOf(x) { return ["up", "degraded", "down"].indexOf(x) >= 0 ? x : "unknown"; }
  // Overall is judged on our own signals. Cloudflare stays on the board as context: if it really breaks us,
  // the beatmania.app signal drops first; a regional incident elsewhere should not paint Polygon amber.
  function worstOf(s) {
    if (!s || !s.signals || !s.signals.length) return "unknown";
    var rank = { up: 0, degraded: 1, down: 2 };
    return s.signals.filter(function (sg) { return sg.id !== "cloudflare"; }).reduce(function (w, sg) {
      var r = rank[sg.status]; return r == null ? w : (w === "unknown" || r > rank[w] ? sg.status : w);
    }, "unknown");
  }
  function renderBoard() {
    var live = status && status !== "loading" && status.signals;
    var w = live ? worstOf(status) : "unknown";
    $("overall").setAttribute("data-s", w);
    $("overall").textContent = status === "loading" ? "…" : ui("level." + w);
    $("pulse").setAttribute("data-s", w);

    var list = live ? status.signals : Object.keys(D.signals).map(function (id) { return { id: id }; });
    $("signals").innerHTML = list.map(function (sg) {
      var st = live ? stateOf(sg.status) : "unknown";
      var name = D.signals[sg.id] ? t(D.signals[sg.id]) : sg.title;
      var word = status === "loading" ? "…" : ui("st." + st);
      var extra = live && sg.id !== "beat" && typeof sg.ms === "number" ? sg.ms + " ms" : "";
      return '<li data-s="' + st + '"><span class="n">' + esc(name) + '</span><span class="v">' + esc(word) + '</span><span class="x"' + (sg.id === "beat" ? ' id="beat-x"' : "") + ">" + esc(extra) + "</span></li>";
    }).join("");

    var link = '<a href="' + D.statusUrl + '" target="_blank" rel="noopener">stats.polygon.nz</a>';
    $("src").innerHTML = status === "loading" ? esc(ui("now.loading"))
      : live ? esc(ui("now.src")).replace("stats.polygon.nz", link)
      : esc(ui("now.fail")) + " " + link;
    tickBeat();
  }
  function tickBeat() {
    var txt = "";
    if (beatBase) {
      var ago = beatBase.ago + Math.floor((Date.now() - beatBase.at) / 1000);
      txt = ui("now.beat") + " " + ago + ui("now.ago");
      // the server beats once a minute: once the next one is due, re-read so the count follows it
      // (10 s apart while it is late, then the minute interval below once it is clearly gone)
      if (ago >= 62 && ago < 180 && !loading && !document.hidden && Date.now() - lastLoad >= 10000) loadStatus();
    } else if (status !== "loading") {
      txt = ui("board.waiting");
    }
    $("beat").textContent = txt;
    var x = $("beat-x"); if (x && beatBase) x.textContent = txt;
  }
  function loadStatus(first) {
    if (first) { status = "loading"; renderBoard(); }
    var done = false;
    loading = true; lastLoad = Date.now();
    var finish = function (j) {
      if (done) return; done = true; loading = false; clearTimeout(timer);
      status = j;
      beatBase = j && typeof j.beatAgoSec === "number" ? { ago: j.beatAgoSec, at: Date.now() } : null;
      renderBoard();
    };
    var timer = setTimeout(function () { finish(null); }, 6000);
    fetch(D.statusUrl + "/api/public/status", { mode: "cors", credentials: "omit" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(finish)
      .catch(function () { finish(null); });
  }

  function tickClock() {
    try {
      $("clock").textContent = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()) + " KST";
    } catch (e) { $("clock").textContent = ""; }
  }

  /* ---------- diagram ----------
     Fixed 960×504 board, scaled; below ~640px the figure scrolls sideways inside itself.
     Circled numbers match the list under it. */
  function node(x, y, w, h, title, sub, cls) {
    return '<g class="d-node ' + (cls || "") + '">' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"/>' +
      '<text class="d-t" x="' + (x + 12) + '" y="' + (y + (sub ? 25 : h / 2 + 5)) + '">' + esc(title) + "</text>" +
      (sub ? '<text class="d-s" x="' + (x + 12) + '" y="' + (y + 45) + '">' + esc(sub) + "</text>" : "") +
      "</g>";
  }
  function line(d, cls, label, lx, ly, anchor) {
    return '<path class="d-edge ' + (cls || "") + '" d="' + d + '" marker-end="url(#d-arrow)"/>' +
      (label ? '<text class="d-e" x="' + lx + '" y="' + ly + '"' + (anchor ? ' text-anchor="' + anchor + '"' : "") + ">" + esc(label) + "</text>" : "");
  }
  function tag(n, x, y) {
    return '<circle class="d-tagc" cx="' + x + '" cy="' + y + '" r="10"/><text class="d-tag" x="' + x + '" y="' + (y + 4) + '" text-anchor="middle">' + n + "</text>";
  }
  function renderDiagram() {
    var L = function (k) { return t(D.diagram[k]); };
    $("diagram").innerHTML = '<svg viewBox="0 -34 960 504" role="img" aria-label="' + esc(ui("h.layout")) + '">' +
      '<defs><marker id="d-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-head" d="M0 1 10 5 0 9Z"/></marker></defs>' +
      '<rect class="d-host" x="300" y="16" width="400" height="438" rx="4"/>' +
      '<text class="d-host-t" x="316" y="40">' + esc(L("host").toUpperCase()) + "</text>" +
      '<path class="d-split" d="M300 158H700M300 282H700"/>' +
      node(20, 64, 150, 60, L("visitor"), "", "") +
      node(20, 190, 150, 64, L("admin"), L("adminSub"), "") +
      node(20, 340, 150, 60, L("github"), "", "") +
      node(190, 58, 100, 72, L("cf"), L("cfSub"), "") +
      node(320, 64, 170, 64, L("pub"), L("pubSub"), "d-pub") +
      node(514, 64, 170, 64, L("pubApps"), L("pubAppsSub"), "d-pub") +
      node(320, 190, 170, 64, L("gate"), L("gateSub"), "d-adm") +
      node(514, 190, 170, 64, L("apps"), L("appsSub"), "d-adm") +
      node(320, 306, 170, 64, L("runner"), L("runnerSub"), "") +
      node(514, 306, 170, 64, L("state"), L("stateSub"), "") +
      node(770, 90, 180, 64, L("watch"), L("watchSub"), "") +
      node(770, 322, 180, 64, L("backup"), L("backupSub"), "") +
      node(514, 392, 170, 56, L("stream"), L("streamSub"), "") +
      node(770, 406, 180, 56, L("platform"), L("platformSub"), "") +
      line("M684 420H730V434H766", "d-out", L("eStream"), 707, 412, "middle") +
      line("M170 94H186", "") +
      line("M270 58V48H599V60", "", L("eDirect"), 599, 44, "middle") +
      line("M95 124V146H405V132", "", L("eRouter"), 186, 142) +
      line("M290 94H316", "") +
      line("M490 96H510", "") +
      line("M170 222H316", "") +
      line("M490 222H510", "") +
      line("M490 338H510", "") +
      line("M320 338H240V370H174", "d-out", L("eRunner"), 20, 426) +
      line("M684 232H730V122H766", "d-out", L("eBeat"), 736, 190) +
      line("M860 90V-14H240V54", "", L("eProbe"), 550, -21, "middle") +
      line("M684 362H766", "d-out", L("eBackup"), 730, 354, "middle") +
      tag(1, 178, 54) + tag(2, 243, 208) + tag(3, 255, 356) + tag(4, 880, 72) +
      "</svg>";
  }

  function renderShots() {
    $("shots").innerHTML = D.shots.map(function (s) {
      return '<figure><div class="frame"><img' + (s.fit ? ' class="fit"' : "") + ' src="' + s.src + '" width="' + s.w + '" height="' + s.h + '" loading="lazy" alt="' + esc(t(s.t)) + '"></div>' +
        "<figcaption><b>" + esc(t(s.t)) + "</b><span>" + esc(t(s.v)) + "</span></figcaption></figure>";
    }).join("");
  }

  function renderPaths() {
    $("paths").innerHTML = D.paths.map(function (p, i) {
      return '<li><span class="tag">' + (i + 1) + '</span><span class="k">' + esc(t(p.k)) + '</span><span class="v">' + esc(t(p.v)) + "</span></li>";
    }).join("");
  }

  function renderChoices() {
    $("choice-list").innerHTML = D.choices.map(function (c, i) {
      return '<li><span class="no">' + pad(i + 1) + "</span><h3>" + esc(t(c.t)) + "</h3><p>" + esc(t(c.c)) + "</p></li>";
    }).join("");
  }

  function renderGlance() {
    $("glance").innerHTML = D.glance.map(function (g) {
      var n = lang === "en" && g.nEn ? g.nEn : g.n;
      return "<li><b>" + esc(n) + "</b><span>" + esc(t(g.v)) + "</span></li>";
    }).join("");
  }

  function renderOps() {
    $("facts").innerHTML = D.facts.map(function (f) {
      var v = f.u ? '<a href="' + esc(f.u) + '"' + ext(f.u) + ">" + esc(t(f.v)) + "</a>" : esc(t(f.v));
      return "<div><dt>" + esc(t(f.k)) + "</dt><dd>" + v + "</dd></div>";
    }).join("");
    $("ops-list").innerHTML = D.ops.map(function (o) {
      return "<div><dt>" + esc(t(o.k)) + "</dt><dd>" + esc(t(o.v)) + "</dd></div>";
    }).join("");
  }

  function renderLog() {
    // newest first, like an event log
    // same period shows its date once; the rule falls only between periods
    var rows = D.log.slice().reverse();
    $("log-list").innerHTML = rows.map(function (s, i) {
      var title = s.u ? '<a href="' + esc(s.u) + '"' + ext(s.u) + ">" + esc(t(s.t)) + "</a>" : esc(t(s.t));
      var first = i === 0 || rows[i - 1].y !== s.y;
      var inner = i + 1 < rows.length && rows[i + 1].y === s.y;
      return '<li' + (inner ? ' class="in"' : "") + '><span class="t">' + (first ? esc(s.y) : "") + '</span><span class="e">' + title + '</span><span class="m">' + esc(t(s.v)) + "</span></li>";
    }).join("");
  }

  function renderAll() {
    renderStatic(); renderBoard(); renderGlance(); renderDiagram(); renderShots(); renderPaths(); renderChoices(); renderOps(); renderLog();
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l; root.setAttribute("lang", l); save("lang", l); renderAll();
  }
  $("lang-ko").addEventListener("click", function () { setLang("ko"); });
  $("lang-en").addEventListener("click", function () { setLang("en"); });

  renderAll();
  loadStatus(true);
  tickClock();
  setInterval(function () { tickClock(); tickBeat(); }, 1000);
  // re-read the watchtower once a minute while the tab is visible
  setInterval(function () { if (!document.hidden) loadStatus(); }, 60000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) loadStatus(); });
})();
