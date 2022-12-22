import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';

interface List {
    writer: string;
    message: string;
    password: string;
    hint: string;
}

export default function MessageList() {
    const [messages, setMessages] = useState<List[]>([]);

    useEffect(() => {
        const fetchData = async () => {
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

        fetchData();
    }, []);
      
  return (
    <>
        <Header/>
        {messages.map(({writer, message},i) => (
            <section key={i}>
            <p>{writer}</p>
            <p>{message}</p>
            </section>
        ))}
    </>
  )
}
