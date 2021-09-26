import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.section`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 30%;
`;

const JoinContainer = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  width: 500px;
  height: 600px;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 200px;
  font-size: 20px;
`;

const Submit = styled.input`
  border: 1px solid black;
  width: 200px;
  height: 100px;
  background: #11ab69;
  color: white;
`;
const Label = styled.label``;

const JoinPresenter = () => {
  const [data, updateData] = useState(null);
  useEffect(async () => {
    const response = await axios.post("/join");
    updateData(response);
    console.log(response);
  }, []);
  return (
    <Section>
      <JoinContainer method="POST">
        <Label htmlFor="name">아이디(필수입력)</Label>
        <Input
          id="name"
          placeholder="User ID"
          name="name"
          type="text"
          required
        />
        <Label htmlFor="password1">비밀번호(필수입력)</Label>
        <Input
          id="password1"
          placeholder="Password"
          name="password1"
          type="password"
          required
        />
        <Label htmlFor="password2">비밀번호 확인(필수입력)</Label>
        <Input
          id="password2"
          placeholder="Password (Re-type)"
          name="password2"
          type="password"
          required
        />
        <Label htmlFor="username">이름(필수입력)</Label>
        <Input
          id="username"
          placeholder="User name"
          name="username"
          type="text"
          required
        />
        <Label htmlFor="email">이메일 주소(필수입력)</Label>
        <Input
          id="email"
          placeholder="Email Address"
          name="email"
          type="email"
          required
        />
        <Label htmlFor="phone">휴대폰 번호(필수입력)</Label>
        <Input
          id="phone"
          placeholder="010-0000-0000"
          name="phone"
          type="text"
          required
        />
        <Submit value="확인" type="submit" />
      </JoinContainer>
    </Section>
  );
};
export default JoinPresenter;
