import React from "react";
import "./ForgotPW.scss";

function ForgotPW(props) {
  return (
    <div className="container">
      <div className="page-login">
        <div className="login-header">
          <h3 className="text-center">Đặt lại mật khẩu</h3>
        </div>
        <div className="login">
          <p className="text-center mt-4 mb-1">
            Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
          </p>
          <div className="form-login ">
            <div className="form-group">
              <label htmlFor="customer-email" className="p-dam">
                Email
                <span class="required">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="customer-email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="text-center forgot-button">
          <button type="button" class="btn btn-outline-danger">
            LẤY LẠI MẬT KHẨU
          </button>
        </div>
        <div className="register-text text-center">
          Quay lại
          <a href=""> tại đây.</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPW;
