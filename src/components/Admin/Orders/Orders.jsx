import React from "react";
import "./Orders.scss";

function Orders(props) {
  return (
    <div className="report-container">
      <div className="report-header">
        <h1 className="recent-Articles">Orders</h1>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Orders
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="addorder"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addorder">
                  Add Orders
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body input-container">
                <label htmlFor="product-name"></label> Product Name <br></br>
                <input
                  type="text"
                  id="product-name"
                  className="add-input"
                  placeholder="Enter product name"
                />
                <label htmlFor="product-name"></label> User Name <br></br>
                <input
                  type="text"
                  id="product-name"
                  className="add-input"
                  placeholder="Enter user name"
                />
                <p>Price: </p>
                <label htmlFor="product-name"></label> Address <br></br>
                <input
                  type="text"
                  id="product-name"
                  className="add-input"
                  placeholder="Enter user address"
                />
                <label htmlFor="product-name"></label> User Phone Number{" "}
                <br></br>
                <input
                  type="text"
                  id="product-name"
                  className="add-input"
                  placeholder="Enter user phone number"
                />
                <label htmlFor="product-name"></label> Status <br></br>
                <select name="lang" id="lang-select">
                  <option value="csharp">Prepare</option>
                  <option value="cpp">Deliver</option>
                  <option value="cpp">Arrive</option>
                </select>
              </div>
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
            <th scope="col">Order ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Price</th>
            <th scope="col">Address</th>
            <th scope="col">User Phone Number</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12345</th>
            <td>QUẦN CHẠY BỘ NAM ARSUXEO</td>
            <td>anhpham123</td>
            <td>800.000</td>
            <td>20 Hoàng Diệu, Đà Nẵng</td>
            <td>+84 12234523344</td>
            <td>Prepare</td>
            <td>
              {" "}
              <button type="button" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen-fancy"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">12344</th>
            <td>
              <p>QUẦN CHẠY BỘ NAM ARSUXEO MS01</p> <br></br>
              <p>QUẦN CHẠY BỘ NAM ARSUXEO MS02</p>
            </td>
            <td>anhpham123</td>
            <td>200.000</td>
            <td>20 Hoàng Diệu, Đà Nẵng</td>
            <td>+84 12234523344</td>
            <td>Prepare</td>
            <td>
              <button type="button" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen-fancy"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
