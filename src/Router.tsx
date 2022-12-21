import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageList from './pages/MessageList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageList/>} />
      </Routes>
    </BrowserRouter>
  );
}