import React, { useEffect, useState } from "react";
import "./Users.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { DataLink } from "../Navbar/DataLink";
import Header from "../Header/Header";

import { db } from "../../../firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

import { Table, Button, Spin } from 'antd';
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

const columns = [
  {
    title: 'Id User',
    width: 120,
    dataIndex: 'id',
    fixed: 'left',
  },
  {
    title: 'Full Name',
    width: 200,
    dataIndex: ["id", "user"],
    render: (id, user) => {
      return <>{user.lastNameUser + " " + user.firstNameUser}</>
    }
  },
  {
    title: 'Email',
    width: 200,
    dataIndex: 'email',
  },
  {
    title: 'Action',
    width: 150,
    key: "id",
    dataIndex: ["id", "user"],
    render: (id, user) => {
      console.log(user)
      return <div style={{ display: "flex", gap: 10 }}>

        {
          user.role != 0 ?
            <><Button className="update-btn-antd" type="default" style={{ color: "#e3b630", borderColor: "#e3b630" }}><FaEdit /></Button>
              <Button className="delete-btn-antd" type="default" danger><MdDeleteForever /></Button></> :
            <><Button className="update-btn-antd" type="default" disabled style={{ color: "#e3b630", borderColor: "#e3b630" }}><FaEdit /></Button>
              <Button className="delete-btn-antd" type="default" disabled danger><MdDeleteForever /></Button></>

        }

      </div>
    }
  },

]


function Users(props) {
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
      console.log(usersData);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header keyMenu={"6"}>
        <div className="report-container">
          <div className="report-header">
            <h1 className="recent-Articles">Users</h1>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Users
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="adduser"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="adduser">
                      Add Orders
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            users.length != 0 ?
              <Table columns={columns} dataSource={users} scroll={{ y: 400 }} pagination={{ defaultPageSize: 5, defaultCurrent: 1 }} />
              : <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Spin />
              </div>
          }

        </div>
      </Header>
      {/* <div className="container-fluid navbar-container">
        <div className="navcontainer">
          <nav className="nav-admin">
            <div className="nav-upper-options">
              {DataLink.map((element, index) => (
                <Link
                  className={
                    element.id == id
                      ? "option1 nav-option option-item"
                      : "option2 nav-option option-item"
                  }
                  onClick={() => setId(element.id)}
                  as={Link}
                  to={element.to}
                >
                  <i class={element.class}></i>
                  <h5> {element.name}</h5>
                </Link>
              ))}
            </div>
          </nav>
        </div>
   
      </div> */}
    </>
  );
}

export default Users;
