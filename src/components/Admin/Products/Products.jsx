import React, { useEffect, useState } from "react";
import "./Products.scss";
import { db } from "../../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function Products(props) {
  const productsColletionRef = collection(db, "products");
  const [nameProduct, setNameProduct] = useState("");
  const [update, setUpdate] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(productsColletionRef);
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsData);
    };
    fetchData();
  }, [update]);

  const addProduct = async () => {
    try {
      await addDoc(productsColletionRef, {
        nameProduct: nameProduct,
      });
      setNameProduct("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error adding product: " + error);
    }
  };

  // const deleteProduct = async (id) => {
  //   try {
  //     const productDocRef = doc(db, "products", id);
  //     await deleteDoc(productDocRef);
  //     setUpdate(!update);
  //   } catch (error) {
  //     console.error("Error deleting product: " + error);
  //   }
  // };

  const [selectedImage, setSelectedImage] = useState("./img/default-img.jpg");

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setSelectedImage("./img/default-img.jpg");
    }
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <h1 className="recent-Articles">Products</h1>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Products
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="addproduct"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addproduct">
                  Add Products
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-container">
                <div className="modal-left">
                  <div class="modal-body input-container">
                    <label htmlFor="product-name"></label> Product Name{" "}
                    <br></br>
                    <input
                      type="text"
                      id="product-name"
                      className="add-input"
                      placeholder="Enter product name"
                    />
                    <label htmlFor="product-name"></label> Category <br></br>
                    <select name="lang" id="lang-select">
                      <option value="">--Choose categrory--</option>
                      <option value="csharp">Men clothes</option>
                      <option value="cpp">Women clothes</option>
                    </select>
                    <label htmlFor="product-name">Old Price</label>
                    <input
                      type="number"
                      id="product-name"
                      className="add-input"
                      placeholder="Enter product old price"
                    />
                    <label htmlFor="product-name">New Price</label>
                    <input
                      type="number"
                      id="product-name"
                      className="add-input"
                      placeholder="Enter product new price"
                    />
                    <label htmlFor="product-name">Number of products</label>
                    <input
                      type="number"
                      id="product-name"
                      className="add-input"
                      placeholder="Enter product quantity"
                    />
                  </div>
                </div>

                <div className="modal-right">
                  <div class="modal-body input-container">
                    <label htmlFor="product-picture">Product Picture</label>
                    <div className="preview-container">
                      <img id="preview-image" src={selectedImage} width="200" />
                    </div>
                    <input
                      type="file"
                      accept=".jpg, .png"
                      multiple
                      id="product-picture"
                      className="add-input"
                      placeholder="Add product picture"
                      onChange={handleImageChange}
                    />{" "}
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={addProduct}
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
            <th scope="col">Product ID</th>
            <th scope="col">Category</th>
            <th scope="col">Name</th>
            <th scope="col">Picture</th>
            <th scope="col">Old price</th>
            <th scope="col">New price</th>
            <th scope="col">Number of products</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {products.map((product, index) => (
              <th>{index + 1}</th>
              <td>{product.nameProduct}</td>
          ) */}

            <th scope="row">M1</th>
            <th scope="row">Men clothes</th>
            <td>QUẦN CHẠY BỘ NAM ARSUXEO MS04</td>
            <td>
              <img src="" alt="" />
            </td>
            <td>120.000</td>
            <td>100.000</td>
            <td>120</td>
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
            <th scope="row">M2</th>
            <th scope="row">Men clothes</th>
            <td>QUẦN CHẠY BỘ NAM ARSUXEO MS01</td>
            <td>
              <img src="" alt="" />
            </td>
            <td>200.000</td>
            <td>187.000</td>
            <td>100</td>
            <td>
              <button type="button" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen-fancy"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">M3</th>
            <th scope="row">Men clothes</th>
            <td>QUẦN CHẠY BỘ NAM ARSUXEO MS02</td>
            <td>
              <img src="" alt="" />
            </td>
            <td>220.000</td>
            <td>200.000</td>
            <td>120</td>
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

export default Products;
