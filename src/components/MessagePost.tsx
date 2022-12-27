import React, { useState } from 'react';
import axios from "axios";
import { List } from '../types/common';
import Header from './common/Header';

export default function MessageForm() {
  const [messages, setMessages] = useState<List[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [writer, setWriter]=useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword]=useState("");
  const [hint, setHint]=useState("");

  const handleSubmit = (event:any) => {
    let formData = new FormData();
    formData.append("writer", writer);
    formData.append("message", message);
    formData.append("password", password);
    formData.append("hint", hint);
    
    event.preventDefault();
    // setMessages("{"writer":writer, "message":message, "password":password, "hint":hint}")
    console.log("ddfdfdf")
    console.log(formData)

    fetch("/letters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: formData,
        body:JSON.stringify({
          "writer": writer,
          "message": message,
          "password": password,
          "hint": hint     
        })
      }).then((res) => {
        console.log(res)
        fetch("/letters")
          .then((res) => res.json())
          .then((data) => {
            setMessage("")
            setMessages(data);
          });
      });
  };


    
  return (
    <>
    <Header/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="글쓴이" onChange={({ target: { value } }) => setWriter(value)}/>
        <input type="text" placeholder='메시지 내용' onChange={({ target: { value } }) => setMessage(value)}/>
        <input type="text" placeholder='비밀번호' onChange={({ target: { value } }) => setPassword(value)}/>
        <input type="text" placeholder='힌트'  onChange={({ target: { value } }) => setHint(value)}/>

        <button disabled={!message}>추가</button>
      </form>

    </>
  )
}
