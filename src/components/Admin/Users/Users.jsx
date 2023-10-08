import React, { useEffect } from "react";
import { useState } from "react";
import "./Users.scss";

import { db } from "../../../firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

function Users(props) {
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);

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
  }, []);
  return (
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
      <table class="table report-body table-striped">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">User First Name</th>
            <th scope="col">User Last Name</th>
            <th scope="col">User Email</th>
            {/* <th scope="col">User Phone Number</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th> {index + 1}</th>
              <td>{user.firstNameUser}</td>
              <td>{user.lastNameUser}</td>
              <td>{user.email}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  // onClick={() => deleteProduct(product.id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning"
                  // onClick={() => editProduct(product.id)}
                >
                  <i className="fa-solid fa-pen-fancy"></i>
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">US2</th>
            <td>Hoang</td>
            <td>Hung</td>
            <td>anhpham@gmail.com</td>
            <td>+84 12234523344</td>
            <td>
              <button type="button" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen-fancy"></i>
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
