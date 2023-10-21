import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPW from "../ForgotPW/ForgotPW";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Demo from "../../Admin/Demo/Demo";
import Categories from "../../Admin/Categories/Categories";
import Products from "../../Admin/Products/Products";
import Subcategories from "../../Admin/Subcategories/Subcategories";
import Orders from "../../Admin/Orders/Orders";
import Users from "../../Admin/Users/Users";


function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function DemoUser({ setLoginAdmin }) {
  const [user, setUser] = useState(null);
  const handleSetUser = (user) => {
    setUser(user);
  };
  useEffect(() => {
    // console.log(user);
    // if (user != null) {
    //   var expirationDate = new Date();
    //   expirationDate.setDate(expirationDate.getDate() + 1);

    //   var jsonString = JSON.stringify(user);
    //   document.cookie = "myUser=" + jsonString
    // }

    // function getCookie(name) {
    //   var cookieName = name + "=";
    //   var decodedCookie = decodeURIComponent(document.cookie);
    //   var cookieArray = decodedCookie.split(';');
    //   for (var i = 0; i < cookieArray.length; i++) {
    //     var cookie = cookieArray[i].trim();
    //     if (cookie.indexOf(cookieName) === 0) {
    //       var jsonString = cookie.substring(cookieName.length, cookie.length);
    //       var object = JSON.parse(jsonString);
    //       return object;
    //     }
    //   }
    //   return null; // Trả về null nếu không tìm thấy cookie
    // }
    // const myUser = getCookie("myUser")
    // if (myUser != null) {
    //   setUser(myUser)
    // }
    // console.log(getCookie("myUser"))

  }, [user]);

  return (
    // <BrowserRouter>
    //   <Navbar user={user} handleSetUser={handleSetUser}></Navbar>
    //   <Routes>
    //     <Route exact path="/" element={<Home></Home>} />

    //     <>
    //       {user ? (
    //         <></>
    //       ) : (
    //         <>
    //           <Route
    //             exact
    //             path="/login"
    //             element={
    //               <Login
    //                 setLoginAdmin={setLoginAdmin}
    //                 user={user}
    //                 handleSetUser={handleSetUser}
    //               ></Login>
    //             }
    //           />
    //           <Route
    //             exact
    //             path="/register"
    //             element={<Register user={user} handleSetUser={handleSetUser} />}
    //           />
    //         </>
    //       )}
    //     </>

    //     <Route exact path="/forgotpw" element={<ForgotPW></ForgotPW>} />
    //     {/* <>{user ? <>{user.role === 0 ? <></> : <></>}</> : <></>}</> */}
    //     <Route path="/admin" element={<Demo></Demo>} />
    //   </Routes>
    //   <Footer></Footer>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} handleSetUser={handleSetUser} />}
        ></Route>

        {user ? (
          <>
            {user.role == 0 ? (
              <>
                <Route path="/admin" element={<Demo />}></Route>
                <Route path="/admin/categories" element={<Categories />} />
                <Route
                  path="/admin/subcategories"
                  element={<Subcategories />}
                />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/users" element={<Users />} />
              </>
            ) : (
              <></>
            )}
          </>
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
            <Route exact path="/forgotpw" element={<ForgotPW></ForgotPW>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default DemoUser;
