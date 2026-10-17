SaGA 일터선교 7기 · 새 모집 페이지 소스

배포 버전: 4
기준 소스: 21129c742a6687581614675dbe55769e256bec8d
사이트: https://saga-workplace-7-renewal.e-dreampia.chatgpt.site

1. 사이트 보기
Python 3가 설치된 컴퓨터에서 압축을 푼 폴더로 이동한 후 다음을 실행합니다.

python3 -m http.server 8000 --directory dist

Windows에서 python3 명령이 없으면 python 또는 py를 사용하세요.
웹 브라우저에서 http://localhost:8000 을 여세요.

2. 파일 구성
dist/ : 배포된 HTML, CSS, JavaScript, 이미지 및 그룹별 PDF 자료
template.html : 페이지의 기본 템플릿
build.py : 템플릿과 콘텐츠로 배포 파일을 만드는 Python 스크립트
content/ : 수강 후기 및 12개 미션 그룹의 콘텐츠와 출처
SOURCES.md : 콘텐츠 출처와 제작 기준
VALIDATION.md : 검증 기록
validate.cjs : 개발용 동작 검사 스크립트

3. 내용 수정 후 만들기
프로젝트 폴더에서 python3 build.py 를 실행하면 dist/index.html과 dist/data.js가 갱신됩니다.
스타일과 화면 동작은 dist/styles.css, dist/refinement.css, dist/app.js에서 수정합니다.
이미지와 PDF는 dist/assets/에 들어 있습니다.

영상 재생과 공식 신청 페이지 이동에는 인터넷 연결이 필요합니다.
이 압축 파일을 받아서 실행하는 것만으로 기존 사이트가 변경되지는 않습니다.
