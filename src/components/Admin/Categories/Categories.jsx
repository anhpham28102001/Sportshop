import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { DataLink } from "../Navbar/DataLink";
import { Button, Checkbox, Form, Input, Table, Spin } from "antd";
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"


const columns = [
  {
    title: 'ID',
    width: 150,
    dataIndex: 'id',

  },
  {
    title: 'Name Category',
    dataIndex: 'nameCategory',
  },

  {
    title: 'Action',
    width: 150,
    dataIndex: 'id',
    fixed: 'right',
    render: (a) => {
      return <div style={{ display: "flex", gap: 10 }}>
        <Button className="update-btn-antd" type="default" style={{ color: "#e3b630", borderColor: "#e3b630" }}><FaEdit /></Button>
        <Button className="delete-btn-antd" type="default" danger><MdDeleteForever /></Button>

      </div>
    }
  },

]

function Categories(props) {
  const categoriesCollectionRef = collection(db, "categories");
  const [nameCategory, setNameCategory] = useState("");
  const [categories, setCategories] = useState(null);
  const [update, setUpdate] = useState(false);
  const [editedCategory, setEditedCategory] = useState("");
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(categoriesCollectionRef);
      const categoriesData = [];
      querySnapshot.forEach((doc) => {
        categoriesData.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categoriesData);
      console.log(categoriesData);
    };
    fetchData();
  }, [update]);

  const addCategory = async () => {
    try {
      await addDoc(categoriesCollectionRef, {
        nameCategory: nameCategory,
      });
      setNameCategory("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error adding category: " + error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const categoryDocRef = doc(db, "categories", id);
      await deleteDoc(categoryDocRef);
      setUpdate(!update);
    } catch (error) {
      console.error("Error deleting category: " + error);
    }
  };

  const editCategory = (id) => {
    const updatedCategory = categories.find((category) => category.id === id);
    if (updatedCategory) {
      setEditedCategory(updatedCategory.nameCategory);
      setCurrentCategoryId(id);
    } else {
      console.error(`Category with id ${id} not found.`);
    }
  };
  const updateCategory = async () => {
    try {
      if (currentCategoryId === null) {
        console.error("No category selected for update.");
        return;
      }

      const categoryDocRef = doc(db, "categories", currentCategoryId);
      await updateDoc(categoryDocRef, {
        nameCategory: editedCategory,
      });

      setCurrentCategoryId(null);
      setEditedCategory("");
      setUpdate(!update);
    } catch (error) {
      console.error("Error updating category: " + error);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {/* <Button></Button> */}
      <Header keyMenu={"2"}>
        <div className="report-container">
          <div className="report-header">
            <h1 className="recent-Articles">Categories</h1>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Categories
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="addcategories"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addcategories">
                      Add Categories
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <label htmlFor="Categoryname">Category Name</label>{" "}
                    <br></br>
                    <input
                      type="text"
                      value={nameCategory}
                      id="categoryname"
                      className="add-input"
                      placeholder="Enter category name"
                      onChange={(e) => setNameCategory(e.target.value)}
                    />
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
                      onClick={addCategory}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            categories != null ?
              <Table columns={columns} dataSource={categories} scroll={{ y: 400 }} pagination={{ defaultPageSize: 5, defaultCurrent: 1 }} />
              : <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Spin />
              </div>
          }




          {/* <table class="table report-body table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                   <td>{category.nameCategory}</td> 
                  <td>
                    {currentCategoryId === category.id ? (
                      <input
                        type="text"
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                      />
                    ) : (
                      category.nameCategory
                    )}
                  </td>

                  <td className="status-icon">
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteCategory(category.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>

                     <i class="fa-solid fa-pen-fancy"></i> 
                    {currentCategoryId === category.id ? (
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
                        onClick={() => editCategory(category.id)}
                      >
                        <i className="fa-solid fa-pen-fancy"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>


      </Header>

      {/**  <div className="container-fluid navbar-container">
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

      </div>
      */}
    </>
  );
}

export default Categories;
