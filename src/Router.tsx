import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from './pages/MessageContainer';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message/>} />
      </Routes>
    </BrowserRouter>
  );
}