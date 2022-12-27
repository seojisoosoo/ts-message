import React, { useState } from 'react';
import axios from "axios";

interface List {
    writer: string;
    message: string;
    password: string;
    hint: string;
}

export default function MessageForm() {
    const [messages, setMessages] = useState<List[]>([]);
    const [message, setMessage] = useState("");

    const handleSubmit = (event:any) => {
        event.preventDefault();
        fetch("letters", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: message,
          }).then((res) => {
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="글쓴이"/>
        <input type="text" placeholder='메시지 내용'/>
        <input type="text" placeholder='비밀번호'/>
        <input type="text" placeholder='힌트'/>

        <button disabled={!message}>추가</button>
      </form>
    </>
  )
}
