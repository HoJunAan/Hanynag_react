개선사항.

1. 교육 후기 페이지에서 subTop, 베스트 교육 후기,slide는 공통되는 component이기 때문에 review , review/:id , review/form
   각각 페이지에서 추가로 component생성하지 않도록 현재 path에 따라 아래 component만 렌더링하도록 바꿈

수정필요사항

1. 게시판 data들을 가져오는 useEffect훅 의존성 배열을 아예 비워두어서 rendering 될 때마다 서버에 data요청을 하는데 이 부분이 비효율적이라 게시판 폼 제출시 변수 값을 변경시켜 이 변수로 useEffect 훅 의존성 배열에 넣으려는 계획. 그런데 redux에 대해 아직 이해가 부족해서 이 부분 공부한 이후에 구현할 예정.

2. 페이지 이동시 스크롤 위치를 최상단으로 위치시키기
   https://kimchanjung.github.io/programming/2020/06/25/react-scroll-top/
