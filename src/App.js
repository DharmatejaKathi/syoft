import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
