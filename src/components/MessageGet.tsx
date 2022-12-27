import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { List } from 'types/common';
import Header from './common/Header';

export default function MessageGet() {
    const [messages, setMessages] = useState<List[]>([]);
    const navigate=useNavigate();

    const getData = async () => {
        try {
            const res = await axios({
                method: "get",
                url: "/letters",
            });
            console.log(res.data);
            if (res.status === 200) {
                setMessages(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    const handleClick=()=>{
        // setIsClicked((prev)=>!prev)
        navigate("/post")
    }


  return (
    <>
        <Header/>
        {/* {isClicked&&<MessageForm/>} */}
        <button type='button' onClick={handleClick}>글쓰기</button>
        {messages.map(({writer, message},i) => (
            <section key={i}>
            <p>{writer}</p>
            <p>{message}</p>
            </section>
        ))}
    </>
  )
}
