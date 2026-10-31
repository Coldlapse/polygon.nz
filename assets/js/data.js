/* Page content. Every visible string is { ko, en }.
   Public page: architecture and operations only. No addresses, ports, account names or private services by name. */
window.POLYGON = {
  ui: {
    ko: {
      "nav.layout": "구조", "nav.watch": "관제", "nav.choices": "설계", "nav.ops": "운영", "nav.now": "지금", "nav.log": "기록",
      "hero.kicker": "HOME SERVER · SINCE 2021",
      "board.overall": "Polygon 상태", "board.waiting": "신호 대기 중", "choice.more": "문제와 대가",
      "sys.title": "기계",
      "tb.title": "도면명", "tb.titleV": "Polygon 홈 서버: 구조와 운영", "tb.by": "작성", "tb.rev": "개정", "tb.sheets": "매수", "tb.status": "상태", "tb.scale": "축척", "tb.scaleV": "1:1 · 한 대",
      "layout.solid": "요청의 방향", "layout.dash": "서버가 밖으로 먼저 거는 연결",
      "spec.item": "항목", "spec.spec": "사양",
      "rev.rev": "REV", "rev.date": "날짜", "rev.what": "내용",
      "hero.artist": "Coldlapse의 홈 서버",
      "hero.lede": "직접 조립한 미니 PC 한 대. 공개·개인 서비스를 함께 운영합니다.",
      "level.k": "STATUS",
      "h.layout": "구조", "h.watch": "관제", "h.choices": "설계 결정", "h.ops": "운영", "h.now": "지금", "h.log": "기록",
      "watch.lead": "흩어진 관리 화면을 대시보드 하나로. 사용량 기록 · 경보 · 외부 감시를 직접 구축.", "layout.lead": "공개 입구와 관리 입구 분리. 배포·감시·백업은 모두 서버에서 밖으로 연결.",
      "layout.cap": "실선은 요청의 방향, 점선은 서버가 밖으로 먼저 거는 연결입니다.",
      "choice.problem": "문제", "choice.pick": "고른 것", "choice.cost": "대가",
      "now.loading": "외부 감시탑에 묻는 중…",
      "now.fail": "이 페이지에서 상태를 불러오지 못했습니다. 감시탑에서 직접 보세요.",
      "now.src": "외부 감시탑 (stats.polygon.nz) 기준, 서버와 다른 클라우드에서 잽니다.",
      "now.beat": "마지막 하트비트",
      "now.ago": "초 전",
      "now.open": "stats.polygon.nz에서 보기",
      "st.up": "정상", "st.degraded": "저하", "st.down": "중단", "st.unknown": "모름",
      "level.up": "ONLINE", "level.degraded": "DEGRADED", "level.down": "DOWN", "level.unknown": "UNKNOWN",
      "footer.run": "운영",
      "footer": "정적 페이지"
    },
    en: {
      "nav.layout": "Layout", "nav.watch": "Monitoring", "nav.choices": "Design", "nav.ops": "Operations", "nav.now": "Now", "nav.log": "Log",
      "hero.kicker": "HOME SERVER · SINCE 2021",
      "board.overall": "Polygon status", "board.waiting": "waiting for signal", "choice.more": "Problem and cost",
      "sys.title": "Machine",
      "tb.title": "Title", "tb.titleV": "Polygon home server — layout and operations", "tb.by": "Drawn by", "tb.rev": "Rev", "tb.sheets": "Sheets", "tb.status": "Status", "tb.scale": "Scale", "tb.scaleV": "1:1 · one machine",
      "layout.solid": "request direction", "layout.dash": "outbound connection opened by the server",
      "spec.item": "Item", "spec.spec": "Spec",
      "rev.rev": "REV", "rev.date": "Date", "rev.what": "Description",
      "hero.artist": "Coldlapse's home server",
      "hero.lede": "One self-built mini PC running public and private services.",
      "level.k": "STATUS",
      "h.layout": "Layout", "h.watch": "Monitoring", "h.choices": "Design decisions", "h.ops": "Operations", "h.now": "Now", "h.log": "Log",
      "watch.lead": "One dashboard for scattered admin pages. Metrics, alerts and outside watch, built in-house.", "layout.lead": "Separate public and admin entrances. Deploys, monitoring and backups all connect outward from the server.",
      "layout.cap": "Solid lines follow requests; dashed lines are connections the server opens outward.",
      "choice.problem": "Problem", "choice.pick": "Picked", "choice.cost": "Cost",
      "now.loading": "Asking the external watchtower…",
      "now.fail": "Could not load the status here. See it on the watchtower directly.",
      "now.src": "From the external watchtower (stats.polygon.nz), measured from a different cloud.",
      "now.beat": "Last heartbeat",
      "now.ago": "s ago",
      "now.open": "Open stats.polygon.nz",
      "st.up": "up", "st.degraded": "degraded", "st.down": "down", "st.unknown": "unknown",
      "level.up": "ONLINE", "level.degraded": "DEGRADED", "level.down": "DOWN", "level.unknown": "UNKNOWN",
      "footer.run": "Run by",
      "footer": "Static page"
    }
  },

  facts: [
    { k: { ko: "기계", en: "Machine" }, v: { ko: "미니 PC, Ryzen 5 5500GT", en: "Mini PC, Ryzen 5 5500GT" } },
    { k: { ko: "디스크", en: "Disks" }, v: { ko: "NVMe 512GB · 데이터 2TB", en: "NVMe 512 GB · 2 TB data" } },
    { k: "OS", v: "Ubuntu LTS · Docker" },
    { k: { ko: "운영", en: "Since" }, v: { ko: "2021년부터, 혼자", en: "2021, solo" } },
    { k: { ko: "감시", en: "Watched" }, v: "stats.polygon.nz", u: "https://stats.polygon.nz" }
  ],

  glance: [
    { n: "2021", v: { ko: "운영 시작", en: "running since" } },
    { n: "18", v: { ko: "컨테이너", en: "containers" } },
    { n: "3", v: { ko: "Cloudflare Tunnel", en: "Cloudflare Tunnels" } },
    { n: "3", v: { ko: "self-hosted runner", en: "self-hosted runners" } },
    { n: "1분", nEn: "1 min", v: { ko: "외부 하트비트", en: "external heartbeat" } },
    { n: "매일", nEn: "Daily", v: { ko: "암호화 백업", en: "encrypted backup" } }
  ],

  /* Labels for the diagram. Positions live in main.js. */
  diagram: {
    visitor: { ko: "방문자", en: "Visitors" },
    admin: { ko: "관리자", en: "Administrator" },
    adminSub: { ko: "공유기 VPN", en: "home VPN" },
    github: { ko: "GitHub", en: "GitHub" },
    cf: { ko: "Cloudflare", en: "Cloudflare" },
    cfSub: { ko: "Tunnel ×3", en: "Tunnels ×3" },
    host: { ko: "Polygon", en: "Polygon" },
    pub: { ko: "공개 입구", en: "Public entrance" },
    pubSub: { ko: "vhost별 출발지 제한", en: "per-site origin rules" },
    pubApps: { ko: "공개 서비스", en: "Public services" },
    pubAppsSub: { ko: "beatmania.app 외", en: "beatmania.app and more" },
    gate: { ko: "관리 입구", en: "Admin entrance" },
    gateSub: { ko: "대역 검사 · 2FA", en: "network check · 2FA" },
    apps: { ko: "개인 서비스", en: "Private services" },
    appsSub: { ko: "앱마다 전용 망", en: "one network per app" },
    runner: { ko: "runner ×3", en: "runners ×3" },
    runnerSub: { ko: "빌드 · 배포 · 검증", en: "build · ship · check" },
    state: { ko: "상태 디렉터리", en: "State" },
    stateSub: { ko: "코드와 분리", en: "kept apart from code" },
    watch: { ko: "외부 감시탑", en: "External watchtower" },
    watchSub: { ko: "다른 클라우드", en: "another cloud" },
    backup: { ko: "오프사이트 백업", en: "Off-site backup" },
    backupSub: { ko: "restic · 암호화", en: "restic · encrypted" },
    eBeat: { ko: "하트비트 1분", en: "heartbeat, 1 min" },
    eProbe: { ko: "공개 입구를 밖에서 두드림", en: "probes the public entrance" },
    eRunner: { ko: "runner가 먼저 붙는다", en: "runners dial out" },
    eBackup: { ko: "매일 03:00", en: "daily 03:00" },
    eDirect: { ko: "일부는 컨테이너로 바로", en: "some go straight to a container" },
    eRouter: { ko: "공유기 80·443", en: "router 80·443" },
    stream: { ko: "24시간 송출", en: "24/7 broadcast" },
    streamSub: { ko: "렌더 · 인코딩 · 녹화", en: "render · encode · record" },
    platform: { ko: "방송 플랫폼", en: "Streaming platforms" },
    platformSub: { ko: "RTMP · WHIP", en: "RTMP · WHIP" },
    eStream: { ko: "송출", en: "stream out" }
  },

  /* Monitoring screenshots. Labels that would name services, addresses or accounts are blurred in the files. */
  shots: [
    { src: "assets/img/ops/metrics.webp", w: 1111, h: 1143,
      t: { ko: "서버 관제", en: "Server view" }, v: { ko: "1분 표본 · 원본 7일 · 시간 요약 1년", en: "1-min samples · raw 7 days · hourly 1 year" } },
    { src: "assets/img/ops/alerts.webp", w: 854, h: 903,
      t: { ko: "경보 규칙 12종", en: "12 alert rules" }, v: { ko: "상태가 바뀔 때만 알림 · 이상 지속 시 12시간마다 재알림", en: "Notify on change only · repeat every 12 h while failing" } },
    { src: "assets/img/ops/launcher.webp", w: 1111, h: 260, fit: true,
      t: { ko: "런처", en: "Launcher" }, v: { ko: "관리 화면 통합 · LAN·VPN 전용 · TOTP 2FA", en: "All admin pages · LAN/VPN only · TOTP 2FA" } },
    { src: "assets/img/ops/telegram.webp", w: 513, h: 587,
      t: { ko: "텔레그램 경보", en: "Telegram alerts" }, v: { ko: "발생과 해소를 한 쌍으로", en: "Raised and resolved, as a pair" } }
  ],

  paths: [
    { k: { ko: "공개", en: "Public" },
      v: { ko: "Cloudflare Tunnel ×3. DNS에 집 IP 없음. 공유기 포워딩은 80·443만", en: "Cloudflare Tunnel ×3. No home IP in DNS. Router forwards 80·443 only" } },
    { k: { ko: "관리", en: "Admin" },
      v: { ko: "LAN·VPN 전용. TOTP 2FA. 프록시 경유 요청 거부", en: "LAN and VPN only. TOTP 2FA. Proxied requests rejected" } },
    { k: { ko: "배포", en: "Deploy" },
      v: { ko: "self-hosted runner. 빌드 → 헬스체크 → 포트 노출 검사", en: "Self-hosted runners. Build → health check → port exposure check" } },
    { k: { ko: "감시", en: "Watch" },
      v: { ko: "외부 감시탑이 공개 입구 확인. 서버는 1분마다 하트비트", en: "External watchtower probes the public entrance. Server heartbeat every minute" } }
  ],

  choices: [
    { t: { ko: "관리 입구용 보조 IP", en: "Second IP for admin" },
      c: { ko: "관리 입구만 별도 LAN IP에서 수신", en: "Admin entrance listens on its own LAN IP" } },
    { t: { ko: "재작성 대신 연합", en: "Federation over rewrite" },
      c: { ko: "대시보드는 인증·게이트·비밀값만. 앱은 각자 저장소·컨테이너", en: "Dashboard owns auth, gate and secrets. Apps keep their own repo and container" } },
    { t: { ko: "앱별 전용 네트워크", en: "One network per app" },
      c: { ko: "대시보드와 앱 창구 컨테이너 둘만 연결", en: "Only the dashboard and the app's front container" } },
    { t: { ko: "컨테이너 LAN·VPN 차단", en: "Containers off LAN and VPN" },
      c: { ko: "컨테이너발 새 연결을 방화벽에서 차단", en: "Firewall drops new connections from containers" } },
    { t: { ko: "설정 없으면 기동 거부", en: "Fail closed" },
      c: { ko: "허용 대역이 비면 열린 채로 뜨지 않음", en: "No allowlist, no boot" } },
    { t: { ko: "외부 감시탑", en: "External watchtower" },
      c: { ko: "다른 클라우드에서 감시. 인바운드 포트 없음", en: "Watched from another cloud. No inbound port" } },
    { t: { ko: "인프라 구조 고정", en: "Frozen layout" },
      c: { ko: "구조 변경은 건별 승인 후 재측정·문서화", en: "Changes approved case by case, then re-measured and documented" } }
  ],

  ops: [
    { k: { ko: "배포", en: "Deploy" }, v: { ko: "push → 빌드 → 헬스체크 → 노출 검사", en: "push → build → health check → exposure check" } },
    { k: { ko: "컨테이너", en: "Containers" }, v: { ko: "Compose · cap_drop ALL · 권한 상승 기본 차단 · 자원 상한", en: "Compose · cap_drop ALL · no privilege escalation · resource caps" } },
    { k: { ko: "관측", en: "Metrics" }, v: { ko: "SQLite 지표 · 텔레그램 경보 · 매일 SMART 검사", en: "SQLite metrics · Telegram alerts · daily SMART test" } },
    { k: { ko: "백업", en: "Backup" }, v: { ko: "매일 03:00 · restic 암호화 · 오프사이트", en: "Daily 03:00 · restic, encrypted · off-site" } },
    { k: { ko: "인증서", en: "TLS" }, v: { ko: "와일드카드 · DNS-01 자동 갱신", en: "Wildcard · DNS-01 auto-renewal" } },
    { k: { ko: "호스트", en: "Host" }, v: { ko: "ufw · SSH 키 전용(LAN·VPN) · 라이브 패치", en: "ufw · key-only SSH (LAN/VPN) · live patching" } },
    { k: { ko: "문서", en: "Docs" }, v: { ko: "인프라·결정·보안 기록을 코드와 같은 저장소에", en: "Infra, decision and security docs live with the code" } }
  ],

  /* Public signals from the watchtower, by id. Titles here override the watchtower's own (Korean-only) ones. */
  signals: {
    "bm-site": { ko: "beatmania.app", en: "beatmania.app" },
    "bm-db": { ko: "beatmania.app DB", en: "beatmania.app DB" },
    "beat": { ko: "Polygon 서버", en: "Polygon server" },
    "cloudflare": { ko: "Cloudflare", en: "Cloudflare" }
  },
  statusUrl: "https://stats.polygon.nz",

  log: [
    { y: "2021.03", t: { ko: "운영 시작", en: "First boot" }, v: { ko: "베어본 미니 PC 조립 · Windows Server 2016 · 봇 상시 구동", en: "Self-built barebone mini PC · Windows Server 2016 · always-on bots" } },
    { y: "2022", t: { ko: "Ubuntu 이전", en: "Moved to Ubuntu" }, v: { ko: "웹 서비스를 위해 Windows Server → Ubuntu 22.04", en: "Windows Server → Ubuntu 22.04 to host web services" } },
    { y: "2022", t: { ko: "코드 유실 → Git", en: "Lost code → Git" }, v: { ko: "백업 없이 포맷해 스크립트 유실, 이후 Git 원격 관리", en: "Scripts lost in the reinstall; everything in remote Git since" } },
    { y: "2022", t: "beatmania.app", v: { ko: "첫 공개 서비스", en: "First public service" }, u: "https://beatmania.app" },
    { y: "2022", t: { ko: "일일 백업 (당시)", en: "Daily backup (then)" }, v: { ko: "cron · 웹·DB·스크립트를 매일 FTP로 전송", en: "cron · web, DB and scripts shipped over FTP nightly" } },
    { y: "2024", t: { ko: "Timeshift 스냅샷", en: "Timeshift snapshots" }, v: { ko: "OS·패키지 상태까지 주기 스냅샷", en: "Periodic snapshots of the OS and packages" } },
    { y: "2025", t: { ko: "업그레이드 장애 복구", en: "Upgrade rollback" }, v: { ko: "24.04 판올림 중 웹 스택 고장 → 스냅샷으로 22.04 복구", en: "24.04 upgrade broke the web stack → restored 22.04 from snapshot" } },
    { y: "2025", t: { ko: "자체 NAS", en: "Self-hosted NAS" }, v: { ko: "파일 동기화 · 미디어 스트리밍", en: "File sync · media streaming" } },
    { y: "2026.09", t: { ko: "컨테이너 전환", en: "Containers" }, v: { ko: "mod_wsgi → Docker, 무중단", en: "mod_wsgi → Docker, zero downtime" } },
    { y: "2026.09", t: { ko: "관제 대시보드", en: "Admin dashboard" }, v: { ko: "관리 화면 통합 · 2FA", en: "Unified admin · 2FA" } },
    { y: "2026.09", t: { ko: "오프사이트 백업", en: "Off-site backup" }, v: { ko: "restic 암호화", en: "restic, encrypted" } },
    { y: "2026.09", t: { ko: "집 IP 숨김", en: "Home IP hidden" }, v: { ko: "Cloudflare Tunnel · 원 서버 직접 접속 차단", en: "Cloudflare Tunnel · direct origin access blocked" } },
    { y: "2026.09", t: { ko: "외부 감시탑", en: "External watchtower" }, v: { ko: "다른 클라우드에서 감시", en: "Watched from another cloud" }, u: "https://stats.polygon.nz" },
    { y: "2026.09", t: { ko: "앱별 네트워크", en: "Per-app networks" }, v: { ko: "중계 네트워크 분리", en: "Relay networks split per app" } },
    { y: "2026.10", t: { ko: "하드웨어 업그레이드", en: "Hardware upgrade" }, v: { ko: "CPU Ryzen 5 5500GT · DDR4 32GB · NVMe 512GB", en: "CPU Ryzen 5 5500GT · DDR4 32 GB · NVMe 512 GB" } },
    { y: "2026.10", t: { ko: "24시간 송출", en: "24/7 broadcast" }, v: { ko: "클라우드에서 이전 · 나가는 연결만", en: "Moved in from the cloud · outbound only" } },
    { y: "2026.10", t: { ko: "봇 컨테이너화", en: "Bots containerised" }, v: { ko: "스크립트 → 저장소·컨테이너·관리 화면", en: "Scripts → repo, container, admin page" } },
    { y: "2026.10", t: { ko: "컨테이너 LAN 차단", en: "Containers off LAN" }, v: { ko: "LAN·VPN 차단 · 권한 상승 기본 차단", en: "LAN/VPN blocked · no privilege escalation" } }
  ]
};
