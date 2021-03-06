import React, { useState, useRef, useEffect } from "react";
import { History, LocationState } from "history";
import {RouteComponentProps} from 'react-router-dom'
import styled, { css } from "styled-components";

export const InputContainer = styled.input<{ errorUserName?: boolean }>`
  padding: 8px;
  border: ${(props) =>
    props.errorUserName ? "2px solid red" : "2px solid #333"};
  margin-left: 5px;
`;
const InputContainer1 = styled(InputContainer)<{ errorPassword?: boolean }>`
  border: ${(props) =>
    props.errorPassword ? "2px solid red" : "2px solid #333"};
`;
export const ErrorContainer = styled.p`
  font-size: 14px;
  color: red;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

export const ButtonContainer = styled.button`
  padding: 10px 25px;
  background-color: green;
  outline: 0;
  border: 0;
  border-radius: 5px;
  color: #fff;
`;

const InputDiv = styled.div`
  display: flex;
  margin-bottom: 13px;
`;
export interface Props {
  history?: History<LocationState>;
  onChange : (newValue : {username:string , password:string})=> void
}

export const Login: React.FC<Props> = (props: Props,{history}:RouteComponentProps) => {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [errorUsername, seterrorUsername] = useState<boolean>(false);
  const [errorPassword, seterrorPassword] = useState<boolean>(false);

  useEffect(() => {
    FocusRef.current?.focus();
    if(localStorage.getItem('username')){
      setusername(localStorage.getItem('username')||'')
    }
    if(localStorage.getItem('password')){
      setusername(localStorage.getItem('password')||'')
    }
  }, []);

  // use ref element for form
  const formElementRef = useRef() as React.RefObject<HTMLFormElement>;

  const FocusRef = useRef() as React.RefObject<HTMLInputElement>;

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target);
    setusername(event.target.value);
    props.onChange?.({username:event.target.value,password})
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target);
    setpassword(event.target.value);
    props.onChange?.({password:event.target.value,username})
  };
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    username.length == 0 ? seterrorUsername(true) : seterrorUsername(false);
    password.length == 0 ? seterrorPassword(true) : seterrorPassword(false);
    if (username.length >= 3 && password.length >= 3) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      props.history?.push("/todo");
      // form.reset()
      formElementRef?.current?.reset();
    }
  };
  console.log(username);
  return (
    <MainContainer>
      <h1>Login</h1>
      <form autoComplete="on" onSubmit={handleSubmit} ref={formElementRef}>
        <InputDiv>
          <label htmlFor="username">username</label>
          <InputContainer
            type="text"
            value={username}
            id="username"
            ref={FocusRef}
            errorUserName={errorUsername}
            data-testid={'username'}
            minLength={3}
            onChange={handleUsername}
          />
        </InputDiv>
        {errorUsername && <ErrorContainer>username is required</ErrorContainer>}
        <InputDiv>
          <label htmlFor="password">password</label>
          <InputContainer1
            type="text"
            value={password}
            id="password"
            minLength={3}
            errorPassword={errorPassword}
            data-testid='password'
            onChange={handlePassword}
          />
        </InputDiv>
        {errorPassword && <ErrorContainer>password is required</ErrorContainer>}
        <ButtonContainer type="submit">submit</ButtonContainer>
      </form>
    </MainContainer>
  );
};
