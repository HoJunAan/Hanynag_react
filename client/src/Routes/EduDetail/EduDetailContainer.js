import React, { useRef } from "react";

import EduDetailPresenter from "./EduDetailPresenter";

const EduDetailContainer = () => {
  const tabRef = useRef([]);

  return <EduDetailPresenter tabRef={tabRef} />;
};

export default EduDetailContainer;
