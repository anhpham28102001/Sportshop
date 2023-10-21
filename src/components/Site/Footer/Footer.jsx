/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";

function Footer(props) {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section> */}

      <section className="footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3 pt-4">
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                CHÍNH SÁCH
              </h6>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Trang chủ
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Giới thiệu
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Sản phẩm
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Liên hệ
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                CHÍNH SÁCH
              </h6>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Chính sách bảo mật
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Chính sách vận chuyển
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Chính sách bảo hành
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Chính sách đổi trả
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Chính sách thanh toán
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Quy định sử dụng
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                HƯỚNG DẪN
              </h6>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Hướng dẫn mua hàng
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Hướng dẫn thanh toán
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Hướng dẫn giao nhận
                </a>
              </p>
              <p className="footer-text">
                <a href="#!" className="text-reset">
                  Điều khoản dịch vụ
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Fanpage
              </h6>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/sportshoponline2021/?ref=embed_page"
                data-tabs="sportshop"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/sportshoponline2021/?ref=embed_page"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/sportshoponline2021/?ref=embed_page">
                    SPORT SHOP - Đồ Chạy Bộ Và Phụ Kiện Thể Thao
                  </a>
                </blockquote>
              </div>
            </div>

            {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div> */}
          </div>
          <div className="mb-4 map">
            <h6 className="text-uppercase fw-bold mb-4 footer-header">
              BẢN ĐỒ
            </h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4212700740627!2d105.80709527541771!3d21.015823488222555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab613e6731a9%3A0xa62da8e6cee38bfc!2zNjIgUC4gTmd1ecOqbiBI4buTbmcsIEzDoW5nIEjhuqEsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1696254374111!5m2!1svi!2s"
              frameborder="0"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="container footer-information">
        <div className="footer-bottom row">
          <div className="col-md-3">
            <div className="logo-footer">
              <img
                src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/footer-logo.png?1673312669282"
                data-lazyload="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/footer-logo.png?1673312669282"
                alt="logo SPORT SHOP"
              />
            </div>
          </div>
          <div className="col-md-5">
            <ul className="footer-info">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Số nhà
                1A, Ngõ 62 Nguyên Hồng, Phường Láng Hạ, Quận Đống Đa, Hà Nội
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                <a href="tel:0969959168">0969959168</a>
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                <a href="mailto: sportshop.vn.official@gmail.com">
                  {" "}
                  sportshop.vn.official@gmail.com
                </a>
              </li>
              <li>
                <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                <a href="https://sportshop.vn/">https://sportshop.vn/</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="payment">
              <h3></h3>
              <div className="social-fot">
                <h4>Kết nối với chúng tôi</h4>
                <ul className="footer-info social-info">
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="mc-youtube btn-transition dp-flex"
                      title="YOUTUBE"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/social_youtube_icon.svg?1673312669282"
                        alt="youtube"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.lazada.vn/shop/sportshop-vn"
                      target="_blank"
                      className="mc-lazada btn-transition dp-flex"
                      title="LAZADA"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/social_lazada_icon.svg?1673312669282"
                        alt="lazada"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="mc-sendo btn-transition dp-flex"
                      title="SENDO"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/social_sendo_icon.svg?1673312669282"
                        alt="sendo"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="mc-tiki btn-transition dp-flex"
                      title="TIKI"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/social_tiki_icon.svg?1673312669282"
                        alt="tiki"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://shopee.vn/sportshoponline"
                      target="_blank"
                      className="mc-shopee btn-transition dp-flex"
                      title="SHOPEE"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/376/467/themes/790294/assets/social_shopee_icon.svg?1673312669282"
                        alt="shopee"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
