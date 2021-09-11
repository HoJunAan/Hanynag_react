import React, { useState, useEffect } from "react";
import EduReivewPresenter from "./EduReviewPresenter";
import axios from "axios";

const EduReviewContainer = () => {
  const [subTopData] = useState({
    title: "교육 후기",
    smallTitle: "Education Review",
    subTitle1: "한양 미래 연구소에서 진행되었던 교육을 들은",
    subTitle2: "학생들과 학부모님들의 리얼 후기입니다.",
  });

  const [SlideData] = useState([
    {
      place: "서울 모 고등학생",
      content:
        "학교에서 이런 4차산업혁명 수업을 받을 수 있어서 좋았다. 평소에 4차 산업혁명에 대해서 많이 들어 보긴 했지만, 구체적으로 어떤 것인지 알지 못했는데 이번 수업을 통해서 조금이나마 알 수 있었다. 처음에 선생님이 3D 모델링을 설명해주실 때는 과연 내가 할 수 있을까, 걱정했는데 실제로 해보니 너무 재미있었다. 선생님이 옆에서 계속 칭찬해주시고 조언해주셔서 좋았다. 3D 프린터를 활용해서 발명도 할 수 있다고 하시는데 나도 계속 3D 모델링을 계속해서 발명하고 싶다.",
    },
    {
      place: "안산 모 공업 고등학생",
      content:
        "실제 자율주행자동차와 똑같은 기능을 가진 자동차라는게 일단 신기했고요. 자율주행자동차 교육을 들으면서 파이썬에 대해서 고웁하고 알고리즘을 설계하는 과정에 사실 좀 어렵긴 했지만 재미있었어요! 내가 설계한 알고리즘대로 주행하는 자율주행자동차를 보면서 라인을 넘어가고 할 때면 좀 짜증났지만 완주했을 때, 진짜 뿌듯했어요! 파이썬으로 이런 것도 할 수 있다는게 신기하고 기회가 된다면 터보 엔진 단 자율주행자동차로 레이싱 대결도 해보고 싶습니다~",
    },
    {
      place: "서울 모 고등학생",
      content:
        "책으로만 듣고 멀게만 느껴졌던 창업이 직접 몸으로 경험하고 깨우친 CEO님의 강연을 듣고 나니 다양한 진로를 선택할 수 있다는걸 알면서 동시에 그 다양한 직업중 하나인 창업에 대한 개념이 쑥쑥 들어왔어요. 기업의 대표나 회장은 다 할아버지인줄 알았는데 실제로 사업을 하고 있는 대표님이 우리와 별로 나이 차이가 안나는 20,30대라는걸 보고 들으니 왠지 '나도 해볼 수 있겠다'라는 생각이 든 것 같아요. 창업에 대한 관심이 더 많아졌어요. ",
    },
  ]);

  const [boardData, boardDataUpdate] = useState();
  useEffect(async () => {
    const { data } = await axios.get("/review");
    boardDataUpdate(data);
    console.log(data);
  }, []);

  return (
    <EduReivewPresenter
      subTopData={subTopData}
      SlideData={SlideData}
      boardData={boardData}
    />
  );
};

export default EduReviewContainer;
