import React from "react";
import styled from "styled-components";
import EditorComponent from "Components/EduReviewFormComponent/EditorComponent";

const Box = styled.div`
    width: 70vw;
    margin: 0 auto;
`;

styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
`;

const Input = styled.input`
    height: 40px;
    padding-left: 20px;
    width: 90%;
`;
const Select = styled.select`
    height: 40px;
    padding-left: 20px;
    width: 60%;
`;

const Label = styled.label`
    width: 10%;
    padding-right: 2%;
    display: flex;
    align-items: center;
    justify-content: end;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;
const Button = styled.button`
    width: 80px;
    height: 50px;
    font-size: 18px;
    border-radius: 7px;
    background: white;
    border: 0.5px solid black;
    :hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;

const CheckBox = styled.input`
    width: 20px;
    height: 40px;
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0;
    & > input,
    select {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }
`;

const EduReivewPresenter = ({
    onChangeTitle,
    onChangeMain,
    onChangeCategory,
    onChangeSecret,
    submitHandler,
    title,
    main,
    category,
    secret,
}) => {
    return (
        <Box>
            <form onSubmit={submitHandler}>
                <Title>게시글 작성</Title>
                <InputContainer>
                    <Label htmlFor="title">제목</Label>
                    <Input
                        id="title"
                        onChange={onChangeTitle}
                        type="text"
                        required
                        placeholder="[교육명] 제목"
                        value={title}
                    />
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="category">카테고리</Label>
                    <Select
                        id="category"
                        value={category}
                        onChange={onChangeCategory}
                    >
                        <option value="청소년 캠프">청소년 캠프</option>
                        <option value="찾아가는 체험교실">
                            찾아가는 체험교실
                        </option>
                        <option value="청소년 동아리">청소년 동아리</option>
                        <option value="전문인 특강 / 창의 체험 캠프">
                            전문인 특강 / 창의 체험 캠프
                        </option>
                    </Select>
                    <Label htmlFor="secret">비밀글</Label>
                    <CheckBox
                        id="secret"
                        type="checkbox"
                        value={secret}
                        onClick={onChangeSecret}
                    />
                </InputContainer>

                <InputContainer>
                    <Label>내용</Label>
                    <EditorComponent
                        name="main"
                        value={main}
                        onEditorChange={onChangeMain}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">확인</Button>
                </ButtonContainer>
            </form>
        </Box>
    );
};

export default EduReivewPresenter;
