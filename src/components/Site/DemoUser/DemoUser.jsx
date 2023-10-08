import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPW from "../ForgotPW/ForgotPW";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Demo from "../../Admin/Demo/Demo";

function DemoUser({ setLoginAdmin }) {
  const [user, setUser] = useState(null);
  const handleSetUser = (user) => {
    setUser(user);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleSetUser={handleSetUser}></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />

        <>
          {user ? (
            <></>
          ) : (
            <>
              <Route
                exact
                path="/login"
                element={
                  <Login
                    setLoginAdmin={setLoginAdmin}
                    user={user}
                    handleSetUser={handleSetUser}
                  ></Login>
                }
              />
              <Route
                exact
                path="/register"
                element={<Register user={user} handleSetUser={handleSetUser} />}
              />
            </>
          )}
        </>

        <Route exact path="/forgotpw" element={<ForgotPW></ForgotPW>} />
        <>
          {user ? (
            <>
              {user.role == 0 ? (
                <Route exact path="/admin" element={<Demo></Demo>} />
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default DemoUser;
