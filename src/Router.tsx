import MessageGet from "components/MessageGet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from './pages/Message';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message/>} />
        <Route path="/get" element={<MessageGet/>}/>
      </Routes>
    </BrowserRouter>
  );
}