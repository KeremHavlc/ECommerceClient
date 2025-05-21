import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-fox-toast";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
