import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Day from "../components/pages/Day";
import EmptyPage from "../components/pages/EmptyPage";
import CreateWord from "../components/CreateWord";
import CreateDay from "../components/CreateDay";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="*" element={<EmptyPage />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
