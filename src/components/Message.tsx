import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import { List } from '../types/common';
import styled from 'styled-components';
import LockModal from './LockModal';
import CheckModal from './CheckModal';


export default function MessageList() {
    const [messages, setMessages] = useState<List[]>([]);
    const [isWritingClicked, setIsWritingClicked] = useState<boolean>(false);
    const [writer, setWriter]=useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [hint, setHint]=useState<string>("");


    const fetchData = async () => {
      try {
          const res = await axios({
              method: "get",
              url: "/letters",
          });
          if (res.status === 200) {
              setMessages(res.data);
          }
      } catch (error) {
          console.log(error);
      }
  };


    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsWritingClicked((prev)=>!prev)

        e.preventDefault();

        axios.post("/letters", 
            {
              "writer": writer,
              "message": message,
              "password": password,
              "hint": hint     
            }
          )
          .then((res) => {
            axios.get("/letters")
              .then((res) => {
                setMessages(res.data);
              });
          });
      };
    
    const handleWritingClick=()=>{
        setIsWritingClicked((prev)=>!prev)
    }

  return (
    <>
        <Header/>
        <button type='button' onClick={handleWritingClick}>글쓰기</button>

        <StMessageWrapper>
        {messages.map(({writer, message, hint, password},i) => (
            <div key={i}>
                <LockModal />
                <CheckModal hint={hint} password={password}/>
                <p>From. {writer}</p>
                <p>{message}</p>
            </div>
        ))}
        </StMessageWrapper>

        {isWritingClicked&&(     
            <StFormWrapper>
                <form  onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
                <input type="text" placeholder="글쓴이" onChange={({ target: { value } }) => setWriter(value)}/>
                <input type="text" placeholder='메시지 내용' onChange={({ target: { value } }) => setMessage(value)}/>
                <input type="text" placeholder='비밀번호' onChange={({ target: { value } }) => setPassword(value)}/>
                <input type="text" placeholder='힌트'  onChange={({ target: { value } }) => setHint(value)}/>

                <button disabled={!message}>추가</button>
                </form>
            </StFormWrapper> 
        )}

    </>
  )
}

const StMessageWrapper=styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin-top: 3rem;


    & > div{
        display: flex;
        flex-direction:column;
        align-items: center;

        text-align: center;

        width: 7rem;
        height: 7rem;

        margin: 1rem;

        border: 0.1rem solid skyblue;
        border-radius: 0.5rem;
        background-color: aliceblue;

        & > p{
            margin: 0.3rem;
        }

        & > p:nth-child(1){
            width: 7rem;
            
            border-bottom: 0.1rem solid skyblue;
        }
    }
`

const StFormWrapper=styled.section`
    position: absolute;
    z-index: 4;

    width: 20rem;
    height: 15rem;

    margin-top: 10rem;
    padding: 5rem 3rem 3rem 3rem;

    border: 0.1rem solid skyblue;
    border-radius: 0.5rem;
    background-color: aliceblue;

    & > form{
        display: flex;
        flex-direction: column;
        align-items: center;

        & > input{
            width: 15rem;

            margin: 0.5rem;
        }

        & > button{
            width: 15.5rem;

            margin: 0.5rem;
        }
    }
`