import React, { useState } from 'react'

// export default function MessageForm() {
//     const [message, setMessage] = useState({writer:"", message:""});
  
//     const handleSubmit = (event) => {
//         setMessage
//         event.preventDefault();
//         fetch("letters", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: message,
//         }).then((res) => {
//         });
//       };
    
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="글쓴이"/>
//         <input type="text" placeholder='메시지 내용'/>
//         <button disabled={!message}>추가</button>
//       </form>
//     </>
//   )
// }
