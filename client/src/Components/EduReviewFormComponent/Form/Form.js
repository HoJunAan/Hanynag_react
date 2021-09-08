import styled from "styled-components";

const Form = styled.form`
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
const InputMain = styled.input`
  height: 300px;
  width: 90%;
`;

const Label = styled.label`
  width: 10%;
  text-align: end;
  padding-right: 2%;
  display: inline-block;
`;

const Button = styled.input`
  width: 100px;
  height: 50px;
`;

const CheckBox = styled.input`
  width: 20%;

  height: 40px;
  display: flex;
  justify-content: flex-end;
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

const FormComponent = () => {
  return (
    <Form method="POST">
      <Title>게시글 작성</Title>
      <InputContainer>
        <Label for="title">제목</Label>
        <Input
          id="title"
          name="title"
          type="text"
          required
          placeholder="[교육명] 제목"
        />
      </InputContainer>
      <InputContainer>
        <Label for="category">카테고리</Label>
        <Select name="category" required>
          <option value="청소년 캠프">청소년 캠프</option>
          <option value="찾아가는 체험교실">찾아가는 체험교실</option>
          <option value="청소년 동아리">청소년 동아리</option>
          <option value="전문인 특강 / 창의 체험 캠프">
            전문인 특강 / 창의 체험 캠프
          </option>
        </Select>
        <Label for="secret">비밀글</Label>
        <CheckBox id="secret" name="secret" type="checkbox" required />
      </InputContainer>
      <InputContainer>
        <Label for="main">내용</Label>
        <InputMain id="main" name="main" type="text" required />
      </InputContainer>

      <Button type="submit" value="제출" />
    </Form>
  );
};

export default FormComponent;
