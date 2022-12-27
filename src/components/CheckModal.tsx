import { useState } from 'react';
import styled from 'styled-components'
import { SecretList } from 'types/common';


export default function CheckModal({hint, password}:SecretList): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true)
    const [text, setText]=useState<string>("")

    const handleSubmit=()=>{
        if(text===password){
            setVisible(false)
        }
    }


  return (
    <>
    {visible&&(
        <StCheckModalWrapper>
            <p>hint | {hint}</p>
            <input type="text" onChange={({ target: { value } }) => setText(value)}/>
            <button type='button' onClick={handleSubmit}>확인</button>
        </StCheckModalWrapper>
    )}
    </>
  )
}

const StCheckModalWrapper=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    text-align: center;

    position: absolute;
    z-index: 2;

    width: 7rem;
    height: 7rem;

    border-radius: 0.5rem;
    background-color: aliceblue;

    & > p{
        margin: 0.3rem;
    }

    & > p:nth-child(1){
        width: 7rem;
        
        border-bottom: 0.1rem solid skyblue;
    }

    & >input{
        width: 5rem;

        margin: 0.5rem;
    }
`