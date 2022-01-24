import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Users from "./containers/Users";

const App = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
    </Routes>
  );
};

export default App;
