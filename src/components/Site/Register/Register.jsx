import React, { useEffect } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../../firebase";
import Navbar from "../Navbar/Navbar";

import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

function Register({ user, handleSetUser }) {
  const navigate = useNavigate();

  const usersCollectionRef = collection(db, "users");
  const [firstNameUser, setFirstNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };
    fetchData();
  }, [update]);

  // const addUser = async () => {
  //   try {
  //     await addDoc(usersCollectionRef, {
  //       firstNameUser: firstNameUser,
  //       lastNameUser: lastNameUser,
  //       email: email,
  //     });
  //     setFirstNameUser("");
  //     setLastNameUser("");
  //     setEmail("");
  //     setUpdate(!update);
  //   } catch (error) {
  //     console.error("Error adding user: " + error);
  //   }
  // };

  const handleRegister = async () => {
    console.log(auth);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        handleSetUser(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        console.error(error);

        // ..
      });
    try {
      await addDoc(usersCollectionRef, {
        firstNameUser: firstNameUser,
        lastNameUser: lastNameUser,
        email: email,
        role: 1,
      });
      setFirstNameUser("");
      setLastNameUser("");
      setEmail("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error adding user: " + error);
    }
    // console.log(email);
    // console.log(password);
  };

  const signInWithGoogle = async () => {
    console.log("object");
    const usera = await signInWithPopup(auth, googleProvider);
    console.log(usera.user);
    // Sử dụng useNavigate để chuyển hướng đến trang "/home"
    // setLoginAdmin(false);
    try {
      await addDoc(usersCollectionRef, {
        firstNameUser: usera.user.displayName,
        email: usera.user.email,
        role: 1,
      });
    } catch (error) {
      console.error("Error adding user: " + error);
    }

    navigate("/");
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <Navbar user={user} handleSetUser={handleSetUser}></Navbar>
      <div className="container">
        <div className="page-login">
          <div className="login-header">
            <h3 className="text-center">Đăng ký tài khoản</h3>
          </div>
          <div className="login">
            <div className="social-login text-center">
              <a href="./" className="facebook-login">
                <img
                  width="129px"
                  height="37px"
                  alt="facebook-login-button"
                  src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                />
              </a>
              <a className="google-login" onClick={signInWithGoogle}>
                <img
                  width="129px"
                  height="37px"
                  alt="google-login-button"
                  src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                />
              </a>
            </div>
            <div className="form-login ">
              <div className="form-group-register">
                <label htmlFor="customer-email" className="p-dam">
                  Họ
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customer-surname"
                  onChange={(e) => setFirstNameUser(e.target.value)}
                />
              </div>
              <div className="form-group-register">
                <label htmlFor="customer-email" className="p-dam">
                  Tên
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customer-name"
                  onChange={(e) => setLastNameUser(e.target.value)}
                />
              </div>
              <div className="form-group-register">
                <label htmlFor="customer-email" className="p-dam">
                  Email
                  <span class="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customer-email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group-register">
                <label htmlFor="customer-password" className="p-dam">
                  Mật khẩu
                  <span class="required">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="customer-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="text-center register-button register-option">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={handleRegister}
            >
              ĐĂNG KÝ
            </button>
            <div>
              <Link
                as={Link}
                to="/login"
                class="login-link"
                aria-current="page"
                href="#"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
