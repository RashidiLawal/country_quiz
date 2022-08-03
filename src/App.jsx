import { Routes, Route } from "react-router-dom";
import "./App.css";



import AnswerPage from "./components/AnswerPage";
import FirstPage from "./components/FirstPage";
import FlagPage from "./components/FlagPage";
import LandingPage from "./components/LandingPage";
import ResultPage from "./components/ResultPage";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="answerPage" element={<AnswerPage />} />
          <Route path="resultpage" element={<ResultPage />} />
          <Route path="flagPage" element={<FlagPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
