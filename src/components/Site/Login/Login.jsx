import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import Navbar from "../Navbar/Navbar";

import "./Login.scss";

function Login({ setLoginAdmin, user, handleSetUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);

  const signInWithGoogle = async () => {
    console.log("object");
    const usera = await signInWithPopup(auth, googleProvider);
    console.log(usera.user);
    // Sử dụng useNavigate để chuyển hướng đến trang "/home"
    // setLoginAdmin(false);
    const querySnapshot = await getDocs(usersCollectionRef);
    const usersData = [];
    querySnapshot.forEach((doc) => {
      usersData.push({ id: doc.id, ...doc.data() });
    });

    usersData.forEach((itemUser, index) => {
      console.log(itemUser.email + " - " + usera.user.email);
      if (itemUser.email == usera.user.email) {
        handleSetUser(itemUser);
      }
    });


    navigate("/");
  };

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        const querySnapshot = await getDocs(usersCollectionRef);
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });
        var ussera = {};
        usersData.forEach((itemUser, index) => {
          // console.log(itemUser.email + " - " + user.email);
          if (itemUser.email == user.email) {
            handleSetUser(itemUser);
            ussera = itemUser;
          }
        });
        // if(ussera)

        // navigate("/");

        console.log(ussera);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar user={user} handleSetUser={handleSetUser}></Navbar>
      <div className="container">
        <div className="page-login">
          <div className="login-header">
            <h3 className="text-center">Đăng nhập tài khoản</h3>
          </div>
          <div className="login">
            <div className="social-login text-center">
              <button className="facebook-login">
                <img
                  alt="facebook-login-button"
                  src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                />
              </button>
              <button className="google-login" onClick={signInWithGoogle}>
                <img
                  alt="google-login-button"
                  src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                />
              </button>
            </div>
            <div className="form-login ">
              <div className="form-group">
                <label htmlFor="customer-email" className="p-dam">
                  Email
                  <span class="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customer-email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customer-password" className="p-dam">
                  Mật khẩu
                  <span class="required">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="customer-password"
                  placeholder="Mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="text-center login-button">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={handleSignIn}
            >
              ĐĂNG NHẬP
            </button>
          </div>
          <p className="text-center forgot-pass p-dam">Quên mật khẩu?</p>
          <div className="register-text text-center">
            Bạn chưa có tài khoản. Đăng ký
            <div>
              <Link
                as={Link}
                to="/register"
                class="register-link"
                aria-current="page"
                href="#"
              >
                tại đây.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
