import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <>
      <header>
        <div class="logosec">
          <div class="logo">SportShop</div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            class="icn menuicn"
            id="menuicn"
            alt="menu-icon"
          />
        </div>

        <div class="searchbar">
          <input type="text" placeholder="Search" />
          <div class="searchbtn">
            <i class="fa-solid fa-magnifying-glass icn srchicn"></i>
          </div>
        </div>

        <div class="message">
          <div class="circle"></div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
            class="icn"
            alt=""
          />
          <div class="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              class="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
