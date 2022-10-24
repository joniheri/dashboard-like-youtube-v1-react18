import React from "react";

export default function Layout1() {
  return (
    <div>
      {/* Header */}
      <div className="jh-header">
        <div className="jh-logo-container">
          <i className="fa fa-bars" style={{ marginRight: "10px" }}></i>
          <div className="jh-logo">
            <div className="jh-logo-img" style={{ marginRight: "10px" }}>
              <img src="./logo512.png" alt="" />
            </div>
            <h1 id="jh-logo-text">AMS</h1>
          </div>
        </div>
        <div className="jh-search-container">
          <form action="">
            <input type="text" placeholder="Search..." />
          </form>
          <button className="jh-search">
            <i className="fa fa-search"></i>
          </button>
          <button className="jh-mic">
            <i class="fa fa-microphone"></i>
          </button>
        </div>
        <div className="jh-profile-container">
          <i class="fa fa-video"></i>
          <i class="fa fa-grip"></i>
          <i class="fa fa-bell"></i>
          <div className="jh-profile-box">
            <img src={require("../img/Avatar1.png")} alt="" />
          </div>
        </div>
      </div>
      {/* End Header */}

      {/* Body Container */}
      <div className="jh-body-container">
        {/* Sidebar */}
        <div className="jh-sidebar">
          <div className="jh-sidebar-items">
            <a href="" className="jh-sidebar-item">
              <i className="fa fa-house"></i> Home
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-regular fa-compass"></i> Explore
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-tower-broadcast"></i> Short
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-wifi"></i> Subscription
            </a>
            <hr />
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-link"></i> Library
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-clock-rotate-left"></i> History
            </a>
            <a href="" className="jh-sidebar-item">
              <i class="fa fa-video"></i> Your Videos
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-regular fa-clock"></i> Watch Later
            </a>
            <a href="" className="jh-sidebar-item">
              <i class="fa-solid fa-indent"></i> All Videos
            </a>
            <a href="" className="jh-sidebar-item">
              <i class="fa-solid fa-chevron-down"></i> Show More
            </a>
            <hr />
            <h4 className="jh-more">More from AMS</h4>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-gamepad"></i> Gaming
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-camera"></i> Live
            </a>
            <a href="" className="jh-sidebar-item">
              <i className="fa-solid fa-medal"></i> Sports
            </a>
            <hr />
            <a href="" className="jh-sidebar-item">
              <i className="fa fa-gear"></i> Settings
            </a>
            <a href="" className="jh-sidebar-item">
              <i class="fa-regular fa-circle-question"></i> Help
            </a>
          </div>
        </div>
        {/* End Sidebar */}

        {/* Content */}
        <div className="jh-content">
          {/* Chips Wrapper */}
          <div className="jh-chips-wrapper">
            <div className="jh-chip">
              <span>All</span>
            </div>
            <div className="jh-chip">
              <span>HTML</span>
            </div>
            <div className="jh-chip">
              <span>CSS</span>
            </div>
            <div className="jh-chip">
              <span>JavaScript</span>
            </div>
            <div className="jh-chip">
              <span>Java</span>
            </div>
            <div className="jh-chip">
              <span>PHP</span>
            </div>
            <div className="jh-chip">
              <span>UI/UX</span>
            </div>
            <div className="jh-chip">
              <span>Responsive Design</span>
            </div>
            <div className="jh-chip">
              <span>Node JS</span>
            </div>
            <div className="jh-chip">
              <span>React JS</span>
            </div>
            <div className="jh-chip">
              <span>Vue JS</span>
            </div>
            <div className="jh-chip">
              <span>Angular</span>
            </div>
            <div className="jh-chip">
              <span>Express JS</span>
            </div>
            <div className="jh-chip">
              <span>Laravel</span>
            </div>
            <div className="jh-chip">
              <span>Codeigniter</span>
            </div>
          </div>
          {/* End Chips Wrapper */}

          {/* Video Container */}
          <div className="jh-video-container">
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
            <div className="jh-video-content-cover">
              <div className="jh-video-content">
                <a href="" className="jh-video-box">
                  <img src={require("../img/mandiri1.jpg")} alt="" />
                </a>
                <div className="jh-video-details">
                  <div className="jh-channel-logo">
                    <img src={require("../img/Avatar1.png")} alt="" />
                  </div>
                  <div className="jh-detail">
                    <h3 className="jh-title">
                      Complete responsive website design
                    </h3>
                    <div className="jh-channel-name">AMS Design</div>
                    <div className="jh-views-upload">
                      <div className="jh-views">28k views</div>
                      <div className="jh-upload">1 years ago</div>
                    </div>
                  </div>
                </div>
                <div className="jh-hidden-content">
                  <div className="jh-btn">
                    <i class="fa-regular fa-clock"></i>Watch later
                  </div>
                  <div className="jh-btn">
                    <i class="fa fa-indent"></i>Add to queue
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Video Container */}
        </div>
        {/* End Content */}
      </div>
      {/* End Body Container */}
    </div>
  );
}
