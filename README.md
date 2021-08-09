수정필요사항

1.src/Components/Poster/Item/Item.js, EduList에서 이미지를 require으로 루트를 변수로 받아 가져오려 했지만 오류 발생해서 우선
require에 해당 url을 문자열로 집어넣어 실행 중

2.eduList 아래 금액 정보를 2줄로 나타내기

3.header 스크롤시 줄어드는 이벤트

4.http://hyedu.kr/skin/page/online_maker01.html해당 페이지 가장
아래에 하나의 리스트 안에서 분리하는 부분

5.sideNav클릭으로 스크롤 이동 이벤트에서 scrollIntoView로
구현했는데 header에 의해 일부 가려지는 부분.

- 우선은 &nbsp;으로 디자인을 일치시킴

진행사항
