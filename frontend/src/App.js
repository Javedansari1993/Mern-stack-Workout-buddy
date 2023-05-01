import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import WorkoutForm from "./components/WorkoutForm";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-grey-800">
      <BrowserRouter>
        <Navbar />
        {/* <WorkoutForm/> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
