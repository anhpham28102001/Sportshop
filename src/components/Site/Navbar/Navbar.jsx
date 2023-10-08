import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase";

import "./Navbar.scss";

function Navbar({ user, handleSetUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleListMenuClick = (e) => {
    // Stop the click event propagation to the parent div (modal1)
    e.stopPropagation();
    // Add your logic for handling clicks inside the list_menu here
    // For example, you can close the modal or perform other actions.
  };
  const handleLogOut = async () => {
    await signOut(auth)
      .then(() => {
        handleSetUser("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <header>
        <div className="header_top">
          <div className="hotline">
            <li>HOTLINE: 0905165707</li>
            <li>Tìm cửa hàng</li>
            <li>Liên hệ hợp tác</li>
          </div>
          <div className="dangky">
            <li>Kiểm tra đơn hàng</li>
            {user ? (
              <>
                <div>{user.email}</div>
                <button onClick={handleLogOut}>Logout</button>
                <Link to={"/login"}>dangnhap</Link>
              </>
            ) : (
              <>
                <li>
                  <Link
                    as={Link}
                    to="/login"
                    class="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Đăng nhập
                  </Link>
                </li>

                <li>
                  <Link
                    as={Link}
                    to="/register"
                    class="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Đăng ký
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
        <nav>
          <div class="menu" onClick={toggleModal}>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="logo">
            <Link
              as={Link}
              to="/"
              class="nav-link"
              aria-current="page"
              href="#"
            >
              <img
                src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/logo.png?1673312669282"
                alt=""
              />
            </Link>
          </div>
          <div class="search_laptop">
            <input type="text" placeholder="Tìm Kiếm Sản Phẩm..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div class="cart_laptop">
            <button>
              <i class="fa-solid fa-cart-shopping"></i>GIỎ HÀNG
            </button>
          </div>
        </nav>
        <div
          className={`modal1 ${isModalOpen ? "open" : ""}`}
          onClick={toggleModal}
        >
          <div className="list_menu" onClick={handleListMenuClick}></div>
        </div>
        <div class="search">
          <input type="text" placeholder="Tìm Kiếm Sản Phẩm..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
      <div class="header-bottom">
        <div className="container">
          <ul class="nav nav-pills bottom-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Trang chủ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Đồ thể thao nam
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Áo thể thao nam
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Quần thể thao nam
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
