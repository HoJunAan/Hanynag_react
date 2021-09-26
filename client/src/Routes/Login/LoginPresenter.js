import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 30%;
`;

const LoginContainer = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: white;
  width: 500px;
  height: 600px;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 200px;
  height: 100px;
`;

const Submit = styled.input`
  border: 1px solid black;
  width: 200px;
  height: 100px;
  background: #11ab69;
  color: white;
`;

const OnlinePresenter = () => (
  <Section>
    <LoginContainer method="POST">
      <Input placeholder="User ID" name="username" type="text" required />
      <Input placeholder="Password" name="password" type="password" required />
      <Submit value="로그인" type="submit" />
    </LoginContainer>
  </Section>
);

export default OnlinePresenter;
