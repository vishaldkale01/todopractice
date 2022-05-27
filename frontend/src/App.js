import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import React from "react";
import Demo from "./pages/Demo/Demo";

function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/todo"} element={<Todo/>}/>
                <Route path={"/demo"} element={<Demo/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter> 
  );
}
export default App;
