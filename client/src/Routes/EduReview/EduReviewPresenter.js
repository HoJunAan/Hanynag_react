import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import SubTop from "Components/SubTop";
import SubTitle from "Components/EduReviewComponent/SubTitle";
import Slide from "Components/EduReviewComponent/Slide";
import Board from "Components/EduReviewComponent/Board";
import Form from "Routes/EduReviewForm";
import ReviewDetail from "Routes/EduReviewDetail";

const Box = styled.div`
    width: 70vw;
    margin: 0 auto;
`;

const EduReivewPresenter = ({ subTopData, SlideData, boardData }) => {
    return (
        <>
            <SubTop subTopData={subTopData} />
            <Box>
                <SubTitle title="베스트 교육 후기" />
                <Slide SlideData={SlideData} />
                <Route
                    path="/review"
                    exact
                    render={() => <Board boardData={boardData} />}
                />
                <Switch>
                    <Route path="/review/form" component={Form} />
                    <Route path="/review/:id" component={ReviewDetail} />
                </Switch>
            </Box>
        </>
    );
};

export default EduReivewPresenter;
