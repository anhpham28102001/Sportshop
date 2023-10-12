/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./Products.scss";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "../Header/Header";

import { DataLink } from "../Navbar/DataLink";
// import Pagination from \"react-js-pagination\";
// import TableRow from \"react-js-pagination\";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "./Products.scss";

function Products(props) {
  const productsCollectionRef = collection(db, "products");
  const categoriesCollectionRef = collection(db, "categories");
  const subCategoriesCollectionRef = collection(db, "subCategories");
  const [id, setId] = useState(null);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryID] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoriesId, setSubCategoriesId] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newSubCategoriesId, setNewSubCategoriesId] = useState([]);

  const [update, setUpdate] = useState(false);

  const [nameProduct, setNameProduct] = useState("");
  const [oldPrice, setOldPrice] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState(null);
  const [imgUpload, setImgUpload] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");

  const [currentProductId, setCurrentProductId] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(productsCollectionRef);
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsData);
    };
    fetchData();
  }, [update]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(categoriesCollectionRef);
      const categoriesData = [];
      querySnapshot.forEach((doc) => {
        categoriesData.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(subCategoriesCollectionRef);
      const subCategoriesData = [];
      querySnapshot.forEach((doc) => {
        subCategoriesData.push({ id: doc.id, ...doc.data() });
      });
      setSubCategories(subCategoriesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (newPrice & oldPrice) {
      const discountValue = ((oldPrice - newPrice) / oldPrice) * 100;
      setDiscount(discountValue.toFixed(2));
    }
  });

  const addProduct = async (e) => {
    e.preventDefault();
    if (!imgUpload) {
      alert("Vui long chon anh ?");
    }
    try {
      const imageRef = ref(storage, `images/${uuidv4()}_${imgUpload.name}`);
      await uploadBytes(imageRef, imgUpload);
      const downloadURL = await getDownloadURL(imageRef);

      await addDoc(productsCollectionRef, {
        nameProduct: nameProduct,
        categoryId: categoryId,
        subCategoriesId: subCategoriesId,
        oldPrice: oldPrice,
        newPrice: newPrice,
        quantity: quantity,
        imgURl: downloadURL,
        description: description,
      });
      setNameProduct("");
      setCategoryID("");
      setSubCategoriesId("");
      setOldPrice("");
      setNewPrice("");
      setPreviewImg(null);
      setQuantity("");
      setDescription("");
      setImgUpload(null);
      setUpdate(!update);
    } catch (error) {
      console.error("Error adding product: " + error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const productDocRef = doc(db, "products", id);
      await deleteDoc(productDocRef);
      setUpdate(!update);
    } catch (error) {
      console.error("Error deleting product: " + error);
    }
  };

  const editProduct = (product) => {
    setIsEditing(true);
    setEditedProduct(product);
    setCurrentProductId(product.id);
    setNameProduct(product.nameProduct);
    setCategoryID(product.categoryId);
    setSubCategoriesId(product.subCategoriesId);
    setOldPrice(product.oldPrice);
    setNewPrice(product.newPrice);
    setQuantity(product.quantity);
    setDescription(product.description);
  };

  const updateProduct = async () => {
    try {
      const productDocRef = doc(db, "products", currentProductId);
      await updateDoc(productDocRef, {
        nameProduct,
        categoryId,
        subCategoriesId,
        oldPrice,
        newPrice,
        quantity,
        description,
      });
      setEditedProduct({});
      setCurrentProductId(null);
      setIsEditing(false);
      setUpdate(!update); // Refresh the product list
    } catch (error) {
      console.error("Error updating product: " + error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImg = e.target.files[0];

    if (selectedImg) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(selectedImg);
      setImgUpload(selectedImg);
    } else {
      setPreviewImg(null);
      setImgUpload(null);
    }
  };

  useEffect(() => {
    if (categoryId) {
      const a = subCategories.filter((subcat) => {
        if (subcat.categoryId == categoryId) {
          return subcat;
        }
      });
      // console.log(a);
      setNewSubCategoriesId(a);
    }
    // console.log(newSubCategoriesId);
  }, [categoryId]);

  return (
    <>
      <Header></Header>

      <div className="container-fluid navbar-container">
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
            <form onSubmit={addProduct}>
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
                          <input
                            type="text"
                            id="product-name"
                            value={nameProduct}
                            className="add-input"
                            placeholder="Enter product name"
                            onChange={(e) => setNameProduct(e.target.value)}
                          />
                          <label htmlFor="product-category"></label> Category{" "}
                          <br></br>
                          <select
                            name="lang"
                            id="lang-select"
                            className="option-category"
                            onChange={(e) => setCategoryID(e.target.value)}
                          >
                            <option disabled selected>
                              Choose category
                            </option>
                            {categories.map((category, index) => (
                              <option value={category.nameCategory}>
                                {category.nameCategory}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="product-subcategory"></label>{" "}
                          Sub-Category <br></br>
                          <>
                            {newSubCategoriesId != [] ? (
                              <select
                                name="lang"
                                id="lang-select"
                                className="option-subcategory"
                                onChange={(e) =>
                                  setSubCategoriesId(e.target.value)
                                }
                              >
                                <option disabled selected>
                                  Choose sub-category
                                </option>
                                {newSubCategoriesId.map(
                                  (subcategory, index) => (
                                    <option value={subcategory.nameSubCategory}>
                                      {subcategory.nameSubCategory}
                                    </option>
                                  )
                                )}
                              </select>
                            ) : (
                              <select
                                disabled
                                name="lang"
                                id="lang-select"
                                className="option-subcategory"
                                onChange={(e) =>
                                  setSubCategoriesId(e.target.value)
                                }
                              >
                                <option disabled selected>
                                  Choose sub-category
                                </option>
                              </select>
                            )}
                          </>
                          <label htmlFor="product-oprice">Old Price</label>
                          <input
                            type="number"
                            id="product-oprice"
                            value={oldPrice}
                            className="add-input"
                            placeholder="Enter product old price"
                            onChange={(e) => setOldPrice(e.target.value)}
                          />
                          <label htmlFor="product-nprice">New Price</label>
                          <input
                            type="number"
                            id="product-nprice"
                            value={newPrice}
                            className="add-input"
                            placeholder="Enter product new price"
                            onChange={(e) => setNewPrice(e.target.value)}
                          />
                          <label htmlFor="product-quantity">
                            Number of products
                          </label>
                          <input
                            type="number"
                            id="product-quantity"
                            value={quantity}
                            className="add-input"
                            placeholder="Enter product quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <label htmlFor="product-des">Description</label>
                          <input
                            type="text"
                            id="product-des"
                            value={description}
                            className="add-input"
                            placeholder="Enter product description"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="modal-right">
                        <div class="modal-body input-container">
                          <label htmlFor="product-picture">
                            Product Picture
                          </label>
                          <div className="preview-container">
                            <img
                              src={
                                previewImg
                                  ? previewImg
                                  : "https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-flat-default-avatar-png-image_2848906.jpg"
                              }
                              style={{ height: "50vh", width: "100%" }}
                            />
                          </div>
                          <input
                            type="file"
                            // accept=".jpg, .png"
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
                        type="submit"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <table class="table report-body table-striped">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Picture</th>
                {/* <th scope="col">Category</th> */}
                <th scope="col">Sub-Category</th>
                <th scope="col">Name</th>
                <th scope="col">Old price</th>
                <th scope="col">New price</th>
                <th scope="col">Number of products</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th> {index + 1}</th>
                  <td className="product-img">
                    <img src={product.imgURl} alt="" width="50px" />
                  </td>
                  {/* <td>{product.categoryId}</td> */}
                  <td>{product.subCategoriesId}</td>
                  <td className="product-name">{product.nameProduct}</td>
                  <td>{product.oldPrice}</td>
                  <td>{product.newPrice}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-warning"
                      onClick={() => editProduct(product)}
                    >
                      <i className="fa-solid fa-pen-fancy"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
