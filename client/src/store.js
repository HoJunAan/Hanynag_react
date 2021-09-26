import { createStore } from "redux";

const NewReview = "NewReview";

const newReviewAction = () => {
  return {
    type: NewReview,
  };
};

const reducer = (count = 0, action) => {
  switch (action.type) {
    case NewReview:
      console.log("added");
      return count + 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  newReviewAction,
};

export default store;
