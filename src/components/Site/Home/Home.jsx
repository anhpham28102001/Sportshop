import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";



function Main({user, handleSetUser}) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Lấy chiều rộng của cửa sổ khi component được tạo ra và cập nhật nó khi cửa sổ thay đổi kích thước
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (user) {
      if (user.role == 0) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user]);

  // Hàm tính toán số lượng sản phẩm hiển thị dựa trên chiều rộng của cửa sổ
  const getNumOfDisplayedProducts = () => {
    if (windowWidth < 740) {
      return 2; // Hiển thị 2 sản phẩm khi chiều rộng dưới 740px
    } else if (windowWidth > 740 && windowWidth < 1024) {
      return 3; // Hiển thị 4 sản phẩm khi chiều rộng lớn hơn hoặc bằng 740px
    } else {
      return 4;
    }
  };
  // Hàm này được gọi mỗi khi currentIndex thay đổi
  useEffect(() => {
    const numOfDisplayedProducts = getNumOfDisplayedProducts();
    // Tính toán mảng 4 sản phẩm hiện tại dựa trên currentIndex
    const startIndex = currentIndex;
    const endIndex = (startIndex + numOfDisplayedProducts) % products.length; // Lấy 4 sản phẩm tiếp theo
    const newDisplayedProducts = [];

    for (let i = startIndex; i !== endIndex; i = (i + 1) % products.length) {
      newDisplayedProducts.push(products[i]);
    }

    setDisplayedProducts(newDisplayedProducts);
  }, [currentIndex, products]);

  // Sử dụng setInterval để tự động chuyển đổi sản phẩm mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => {
      clearInterval(interval); // Hủy bỏ interval khi component bị unmount
    };
  }, [products.length]);
  return (
    <>
    <Navbar user={user} handleSetUser={handleSetUser}></Navbar>
      <main>
        <div class="container-fluid">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_1.jpg?1673312669282"
                  class="d-block "
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_2.jpg?1673312669282"
                  class="d-block "
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_3.jpg?1673312669282"
                  class="d-block "
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="banner mt-3">
            <div class="row">
              <div class="col-6 col-md-3 mt-2">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/index_sec_about_image-2.jpg?1673312669282"
                  alt=""
                />
              </div>
              <div class="col-6 col-md-3 mt-2">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/index_sec_about_image-3.jpg?1673312669282"
                  alt=""
                />
              </div>
              <div class="col-6 col-md-3 mt-2">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/index_sec_about_image-4.jpg?1673312669282"
                  alt=""
                />
              </div>
              <div class="col-6 col-md-3 mt-2">
                <img
                  src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/index_sec_about_image-5.jpg?1673312669282"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="hot">
            <h2>SẢN PHẨM HOT</h2>
            <div class="hr"></div>
          </div>
          <section class="row hot_products m-2">
            {displayedProducts.map((element, index) => (
              <div
                class={`products_hot col-6 col-md-4 col-lg-3 ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div class="product-box">
                  <div class="img_hot">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/376/467/products/cam.jpg?v=1617091451790"
                      alt=""
                    />
                  </div>
                  <h6>BỘ SET {element.id} SẢN PHẨM</h6>
                  <div class="price_hot">
                    <div class="price_new">279.000đ</div>
                    <div class="price_old">500.000đ</div>
                  </div>
                  <button>
                    ĐẶT MUA NGAY<i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="btn_view">
              <button>XEM THÊM</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
