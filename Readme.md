개선사항.

1. 교육 후기 페이지에서 subTop, 베스트 교육 후기,slide는 공통되는 component이기 때문에 review , review/:id , review/form
   각각 페이지에서 추가로 component생성하지 않도록 현재 path에 따라 아래 component만 렌더링하도록 바꿈

수정필요사항

1. 게시판 data들을 가져오는 useEffect훅 의존성 배열을 redux를 이용한 변수로 만들기
   (redux, toolkit,createSlice 3가지 버전으로 해보기)

2. 페이지 이동시 스크롤 위치를 최상단으로 위치시키기
   https://kimchanjung.github.io/programming/2020/06/25/react-scroll-top/

3. server 쪽 파일 정리
