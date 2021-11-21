import React, { useState } from "react";
import ReviewFormPresenter from "./ReviewFormPresenter";
import { withRouter } from "react-router-dom";
import { reviewApi } from "api";
import { actionCreators } from "store";
import { connect } from "react-redux";

const EduReviewContainer = ({ history, newReviewAction }) => {
    const [boardData] = useState([
        "다음엔 더 다양하게 들어보고 싶어요!",
        "진로 선택에 실습이 도움돼요.",
        "4차산업 혁명과 가까워진 기분.",
        "체험이 좋았고 신기했다.",
        "다른 것도 만들고 싶다.",
        "창작품을 만들어서 좋았다.",
        "감사했습니다!",
        "후배들에게 추천하고 싶다.",
    ]);
    const [title, updateTitle] = useState("");
    const [main, updateMain] = useState("");
    const [category, updateCategory] = useState("청소년 캠프");
    const [secret, updateSecret] = useState(false);

    const onChangeTitle = (e) => {
        const {
            target: { value },
        } = e;
        updateTitle(value);
    };
    const onChangeMain = (value) => {
        console.log(main);
        updateMain(value);
    };
    const onChangeCategory = (e) => {
        const {
            target: { value },
        } = e;
        updateCategory(value);
    };
    const onChangeSecret = (e) => {
        if (secret === false) updateSecret(true);
        else updateSecret(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(main);
        const body = {
            title,
            main,
            category,
            secret,
        };
        try {
            await reviewApi.reviewPost(body);
            newReviewAction();
        } catch (e) {
            console.log(e);
        } finally {
            history.push("/review");
        }
    };
    return (
        <ReviewFormPresenter
            boardData={boardData}
            onChangeTitle={onChangeTitle}
            onChangeMain={onChangeMain}
            onChangeCategory={onChangeCategory}
            onChangeSecret={onChangeSecret}
            submitHandler={submitHandler}
            title={title}
            main={main}
            category={category}
            secret={secret}
        />
    );
};

function mapDispatchToProps(dispatch) {
    return {
        newReviewAction: () => dispatch(actionCreators.newReviewAction()),
    };
}

export default withRouter(
    connect(null, mapDispatchToProps)(EduReviewContainer)
);
