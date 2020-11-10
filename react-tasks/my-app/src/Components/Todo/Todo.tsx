import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import {
  ErrorContainer,
  InputContainer,
  ButtonContainer,
  MainContainer,
} from "../Login/Login";

interface Props{
  onChange:(newvalue:{todo:string})=>void
}

const Spacing = styled.span`
  margin-left: 8px;
`;
const List = styled.ul`
  list-style-type: none;
`;
const ListItems = styled.li`
  border: 1px solid #eee;
  padding: 8px 15px;
  display: inline-flex;
`;
export const Todo: React.FC<Props> = (props:Props) => {
  let [username, setusername] = useState<unknown>("");
  const [todo, settodo] = useState<string>("");
  const [errortodo, seterrortodo] = useState<boolean>(false);
  const [resultArr, setResultArray] = useState<Array<string>>([]);
  const [months] = useState<Array<string>>([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]);
  //console.log(todo)

  const FocusRef = useRef() as React.RefObject<HTMLInputElement>;

  console.log("resultarr", resultArr);
  const handleTodoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    settodo(event.target.value);
    props.onChange?.({todo:event.target.value})
  };

  const removeList = (ele: string): void => {
    const newList = resultArr.filter((todo) => todo != ele);
    setResultArray(newList);
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    todo.length === 0 ? seterrortodo(true) : seterrortodo(false);
    if (todo.length >= 10) {
      setResultArray([...resultArr, todo]);
    }
    settodo("");
  };

  useEffect(() => {
    setusername(localStorage.getItem("username"));
    FocusRef.current?.focus();
    return () => {
      console.log("unsubscribed");
    };
  }, []);

  return (
    <MainContainer>
      <h3>Hello {username}</h3>
      <form onSubmit={handleSubmit}>
        <InputContainer
          type="text"
          value={todo}
          minLength={10}
          ref={FocusRef}
          data-testid={'todo-value'}
          onChange={(event) => handleTodoChange(event)}
        />
        <Spacing>
          <ButtonContainer type="submit">submit</ButtonContainer>
        </Spacing>
        {errortodo && <ErrorContainer>Todo field is required</ErrorContainer>}
      </form>
      <List>
        {resultArr?.map((ele, i) => {
          return (
            <div key={i}>
              <ListItems
                onDoubleClick={() => removeList(ele)}
              >{`${++i} ${ele}\u00A0\u00A0\u00A0\u00A0${new Date().getDate()} ${
                months[new Date().getMonth()]
              }`}</ListItems>
            </div>
          );
        })}
      </List>
    </MainContainer>
  );
};
