/* eslint-disable no-unreachable */
import React, { useState } from "react";
import "./Dashboard.scss";
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function Dashboard(props) {

  return (

    <>
      <div className="main">
        {/* <div className="searchbar2">
          <input type="text" name="" id="" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-button"
            />
          </div>
        </div> */}

        <div className="box-container">
          <div className="box box1">
            <div className="text">
              <h2 className="topic-heading">60.5k</h2>
              <h2 className="topic">Article Views</h2>
            </div>
            <i class="fa-regular fa-eye box-icon"></i>
          </div>

          <div className="box box2">
            <div className="text">
              <h2 className="topic-heading">150</h2>
              <h2 className="topic">Likes</h2>
            </div>
            <i class="fa-regular fa-thumbs-up box-icon"></i>
          </div>

          <div className="box box3">
            <div className="text">
              <h2 className="topic-heading">320</h2>
              <h2 className="topic">Comments</h2>
            </div>
            <i class="fa-regular fa-message box-icon"></i>
          </div>

          <div className="box box4">
            <div className="text">
              <h2 className="topic-heading">70</h2>
              <h2 className="topic">Published</h2>
            </div>
            <i class="fa-regular fa-circle-check box-icon"></i>
          </div>
        </div>

        <div className="report-container">
          <div className="report-header">
            <h1 className="recent-Articles">Recent Articles</h1>
            {/* <button className="view">View All</button> */}
            <div class="modal" tabindex="-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="report-body">
            <div className="report-topic-heading">
              <h3 className="t-op">Article</h3>
              <h3 className="t-op">Views</h3>
              <h3 className="t-op">Comments</h3>
              <h3 className="t-op">Status</h3>
            </div>

            <div className="items">
              <div className="item1">
                <h3 className="t-op-nextlvl">Article 73</h3>
                <h3 className="t-op-nextlvl">2.9k</h3>
                <h3 className="t-op-nextlvl">210</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 72</h3>
                <h3 className="t-op-nextlvl">1.5k</h3>
                <h3 className="t-op-nextlvl">360</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 71</h3>
                <h3 className="t-op-nextlvl">1.1k</h3>
                <h3 className="t-op-nextlvl">150</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 70</h3>
                <h3 className="t-op-nextlvl">1.2k</h3>
                <h3 className="t-op-nextlvl">420</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 69</h3>
                <h3 className="t-op-nextlvl">2.6k</h3>
                <h3 className="t-op-nextlvl">190</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 68</h3>
                <h3 className="t-op-nextlvl">1.9k</h3>
                <h3 className="t-op-nextlvl">390</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 67</h3>
                <h3 className="t-op-nextlvl">1.2k</h3>
                <h3 className="t-op-nextlvl">580</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 66</h3>
                <h3 className="t-op-nextlvl">3.6k</h3>
                <h3 className="t-op-nextlvl">160</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div className="item1">
                <h3 className="t-op-nextlvl">Article 65</h3>
                <h3 className="t-op-nextlvl">1.3k</h3>
                <h3 className="t-op-nextlvl">220</h3>
                <h3 className="t-op-nextlvl label-tag">Published</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
