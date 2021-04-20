import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../css/Dashboard.css";
import DashComp from "./ComponentRequests/DashComp";
import DashProjects from "./Projects/DashProjects";
import Dashphotos from "./Astrophotography/Dashphotos";
import DashInvites from "./Invites/DashInvites";
import DashProfile from "./Profile/DashProfile";
import DashBlogs from "./Blogs/DashBlogs";
import ComponentsList from "./ComponentsList";
import { useDispatch } from "react-redux";
import DashNews from "./News/DashNews";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../grobalVars"

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  document.title = `Dashboard | ${REACT_APP_BASE_TITLE}`;
  useEffect(() => {
    document.getElementsByClassName('App')[0].classList.remove('bgrt')
    document.getElementsByClassName('App')[0].style.backgroundColor = '#ffffff'
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
    }

    fetch(`${REACT_APP_SERVER}/api/my/details`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.warn(data.error);
          history.push("/user/login");
          return;
        }
        dispatch({ type: "SET", payload: data.user });
      });

    return () => {
      document.getElementsByClassName('App')[0].classList.add('bgrt')
    }

  }, []);

  return (
    <div className="container col-10 dashboard mt-5" style={{ minHeight: "80vh" }}>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="true"
          >
            Profile
          </a>
          <a
            className="nav-item nav-link"
            id="nav-blogs-tab"
            data-toggle="tab"
            href="#nav-blogs"
            role="tab"
            aria-controls="nav-blogs"
            aria-selected="false"
          >
            Blogs
          </a>
          <a
            className="nav-item nav-link"
            id="nav-projects-tab"
            data-toggle="tab"
            href="#nav-projects"
            role="tab"
            aria-controls="nav-projects"
            aria-selected="false"
          >
            Projects
          </a>
          <a
            className="nav-item nav-link"
            id="nav-invites-tab"
            data-toggle="tab"
            href="#nav-invites"
            role="tab"
            aria-controls="nav-invites"
            aria-selected="false"
          >
            Invites
          </a>
          <a
            className="nav-item nav-link"
            id="nav-photos-tab"
            data-toggle="tab"
            href="#nav-photos"
            role="tab"
            aria-controls="nav-photos"
            aria-selected="false"
          >
            Astrophotography
          </a>
          <a
            className="nav-item nav-link"
            id="nav-components-tab"
            data-toggle="tab"
            href="#nav-components"
            role="tab"
            aria-controls="nav-components"
            aria-selected="false"
          >
            Components
          </a>
          <a
            className="nav-item nav-link"
            id="nav-inventory-tab"
            data-toggle="tab"
            href="#nav-inventory"
            role="tab"
            aria-controls="nav-inventory"
            aria-selected="false"
          >
            Component Inventory
          </a>
          <a
            className="nav-item nav-link"
            id="nav-news-tab"
            data-toggle="tab"
            href="#nav-news"
            role="tab"
            aria-controls="nav-news"
            aria-selected="false"
          >
            Updates
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <DashProfile />
        </div>
        <div
          className="tab-pane fade"
          id="nav-projects"
          role="tabpanel"
          aria-labelledby="nav-projects-tab"
        >
          <DashProjects />
        </div>
        <div
          className="tab-pane fade"
          id="nav-invites"
          role="tabpanel"
          aria-labelledby="nav-invites-tab"
        >
          <DashInvites />
        </div>
        <div
          className="tab-pane fade"
          id="nav-components"
          role="tabpanel"
          aria-labelledby="nav-components-tab"
        >
          <DashComp />
        </div>
        <div
          className="tab-pane fade"
          id="nav-inventory"
          role="tabpanel"
          aria-labelledby="nav-inventory-tab"
        >
          <ComponentsList />
        </div>
        <div
          className="tab-pane fade"
          id="nav-blogs"
          role="tabpanel"
          aria-labelledby="nav-blogs-tab"
        >
          <DashBlogs />
        </div>
        <div
          className="tab-pane fade"
          id="nav-photos"
          role="tabpanel"
          aria-labelledby="nav-photos-tab"
        >
          <Dashphotos />
        </div>
        <div
          className="tab-pane fade"
          id="nav-news"
          role="tabpanel"
          aria-labelledby="nav-news-tab"
        >
          <DashNews />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
