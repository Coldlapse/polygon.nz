# polygon.nz

홈 서버 Polygon 의 랜딩 페이지. 정적 파일뿐이다(빌드 없음).

- 내용 원칙: 인프라 구조와 운영만 싣는다. 주소 · 포트 · 계정 이름 · 비공개 서비스 이름은 싣지 않는다
- 한/영: 모든 문구가 `assets/js/data.js` 에 `{ ko, en }` 로 있다. 고칠 때는 거기만 본다

## 파일

| 파일 | 무엇 |
|---|---|
| `index.html` | 뼈대. 문구는 없다 |
| `assets/js/data.js` | 모든 문구와 사실 |
| `assets/js/main.js` | 렌더링 · 구조도(SVG, 코드로 그림) · 상태판(외부 감시탑 공개 API) · 언어 전환 |
| `assets/css/style.css` | 스타일. 상태 색(정상 · 저하 · 중단)은 늘 글자와 같이 쓴다 |

## 상태판

브라우저에서 `https://stats.polygon.nz/api/public/status` 를 읽는다. 감시탑은 `https://polygon.nz` 출처에만 CORS 를 허용하므로
로컬 미리보기에서는 상태판이 `UNKNOWN` 으로 뜬다. 깨지지는 않는다.

## 배포

GitHub Pages(`main` 브랜치 루트). `CNAME` 이 `polygon.nz` 를 가리키고, apex A 레코드 4개
(`185.199.108.153` · `.109.153` · `.110.153` · `.111.153`)는 **DNS only** 다. 프록시(주황)를 켜면 Pages 가 인증서를 못 받는다.
push 하면 Pages 가 다시 내보낸다.

## 미리보기

아무 정적 서버로 이 폴더를 띄운다(`npx serve .` 등).
