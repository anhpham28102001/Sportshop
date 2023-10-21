import React, { createContext, useState } from "react";
import "./Header.scss";
import { Layout, Menu, Button, theme } from 'antd';
import { Link, useNavigate } from "react-router-dom"

import { MdRestaurantMenu, MdCategory, MdOutlineCategory } from "react-icons/md"
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineUser } from "react-icons/ai"
import { BiSolidDashboard, BiSolidUser } from 'react-icons/bi';
import { GiLoincloth } from "react-icons/gi"
import { BsFillCartPlusFill } from "react-icons/bs"
import { Dropdown, Space, Avatar } from 'antd';
import { FiLogOut } from "react-icons/fi"


function Header({ keyMenu, children }) {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigator = useNavigate()

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", gap: "5px" }}><FiLogOut /> <span> Logout</span></p>
      ),
    },
  ];

  return (


    <>

      <Layout>
        <Sider trigger={null} collapsible style={{ background: "white" }} collapsed={collapsed}>
          <div className="demo-logo-vertical" style={{ marginTop: "15px", marginBottom: "15px", display: "flex", justifyContent: "center" }} >

            {
              collapsed ?
                <Link to="/">
                  <img
                    src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/favicon.png"
                    style={{ width: "50%" }}

                  />
                </Link> :
                <Link to="/">
                  <img
                    src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/logo.png?1673312669282"

                  />
                </Link>

            }


          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[keyMenu]}
            items={[
              {
                key: '1',
                icon: <BiSolidDashboard />,
                label: 'Dashboard',
                onClick: () => {
                  navigator("/admin")
                }
              },
              {
                key: '2',
                icon: <MdCategory />,
                label: 'Categories',
                onClick: () => {
                  navigator("/admin/categories")
                }
              },
              {
                key: '3',
                icon: <MdOutlineCategory />,
                label: 'Sub Categories',
                onClick: () => {
                  navigator("/admin/subcategories")
                }
              },
              {
                key: '4',
                icon: <GiLoincloth />,
                label: 'Produts',
                onClick: () => {
                  navigator("/admin/products")
                }
              },
              {
                key: '5',
                icon: <BsFillCartPlusFill />,
                label: 'Orders',
                onClick: () => {
                  navigator("/admin/orders")
                }
              },
              {
                key: '6',
                icon: <BiSolidUser />,
                label: 'Users',
                onClick: () => {
                  navigator("/admin/users")
                }
              },

            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "20px"
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <Avatar size={50} style={{ lineHeight: "40px" }} icon={<AiOutlineUser />} />
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: 0,
              padding: 0,
              minHeight: 280,

            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout >



      {/* <header class="admin-header">
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
      </header> */}
    </>
  );
}

export default Header;
