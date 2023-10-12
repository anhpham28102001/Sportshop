import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "../Header/Header";
import { DataLink } from "../Navbar/DataLink";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function Subcategories(props) {
  const subCategoriesCollectionRef = collection(db, "subCategories");
  const categoriesCollectionRef = collection(db, "categories");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryID] = useState(null);

  const [nameSubCategory, setNameSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [update, setUpdate] = useState(false);
  const [editedSubCategory, setEditedSubCategory] = useState("");
  const [currentSubCategoryId, setCurrentSubCategoryId] = useState(null);
  const [id, setId] = useState(null);

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

  const addSubCategory = async () => {
    try {
      await addDoc(subCategoriesCollectionRef, {
        nameSubCategory: nameSubCategory,
        categoryId: categoryId,
      });
      setNameSubCategory("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error adding sub-category: " + error);
    }
  };

  const deleteSubCategory = async (id) => {
    try {
      const subCategoryDocRef = doc(db, "subCategories", id);
      await deleteDoc(subCategoryDocRef);
      setUpdate(!update);
    } catch (error) {
      console.error("Error deleting sub-category: " + error);
    }
  };

  const editSubCategory = (id) => {
    const updatedCategory = subCategories.find(
      (category) => category.id === id
    );
    if (updatedCategory) {
      setEditedSubCategory(updatedCategory.nameSubCategory);
      setCurrentSubCategoryId(id);
    } else {
      console.error(`Category with id ${id} not found.`);
    }
  };

  const updateCategory = async () => {
    try {
      if (currentSubCategoryId === null) {
        console.error("No category selected for update.");
        return;
      }

      const categoryDocRef = doc(db, "categories", currentSubCategoryId);
      await updateDoc(categoryDocRef, {
        nameSubCategory: editedSubCategory,
      });

      setCurrentSubCategoryId(null);
      setEditedSubCategory("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error updating category: " + error);
    }
  };

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
            <h1 className="recent-Articles">Sub-Categories</h1>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Sub-Categories
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="addsubcategories"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addsubcategories">
                      Add Sub Categories
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body input-container">
                    <label htmlFor="Categoryname">Sub-Category Name</label>{" "}
                    <input
                      type="text"
                      value={nameSubCategory}
                      id="categoryname"
                      className="add-input"
                      placeholder="Enter category name"
                      onChange={(e) => setNameSubCategory(e.target.value)}
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
                      onClick={addSubCategory}
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
                <th scope="col">ID</th>
                <th scope="col">Sub-Category Name</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {subCategories.map((subCategory, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    {currentSubCategoryId === subCategory.id ? (
                      <input
                        type="text"
                        value={editedSubCategory}
                        onChange={(e) => setEditedSubCategory(e.target.value)}
                      />
                    ) : (
                      subCategory.nameSubCategory
                    )}
                  </td>
                  <td>{subCategory.categoryId}</td>

                  <td className="status-icon">
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteSubCategory(subCategory.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>

                    {/* <i class="fa-solid fa-pen-fancy"></i> */}
                    {currentSubCategoryId === subCategory.id ? (
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        onClick={() => updateCategory()}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        onClick={() => editSubCategory(subCategory.id)}
                      >
                        <i className="fa-solid fa-pen-fancy"></i>
                      </button>
                    )}
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

export default Subcategories;
