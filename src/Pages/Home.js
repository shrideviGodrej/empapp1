import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Home = () => {
  return (
    <div className="main">
      {/* <div className="splittop right">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <h4>Welcome Omkar More</h4>
          <div className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </a>
            <ul className="dropdown-menu dropbox">
              <li>
                <a className="dropdown-item" href="/account">
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/personalproject">
                  Personal Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/signout">
                  SignOut
                </a>
              </li>
            </ul>
          </div>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div> */}

      <div className="split left">
        <img src={"./logo1.png"} height="50"></img>
        &nbsp;&nbsp;&nbsp;
        <div className="row">
          &nbsp;&nbsp;&nbsp;
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <div class="d-grid gap-2 col-8 mx-auto">
              <h4>Welcome</h4>&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                  style={{ textAlign: "center" }}
                >
                  <GridViewOutlinedIcon />
                  {"   "}
                  Dashboard
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/employee"
                  style={{ textAlign: "center" }}
                >
                  <PersonAddOutlinedIcon />
                  {"   "}
                  Employees
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/department"
                  style={{ textAlign: "center" }}
                >
                  <BadgeOutlinedIcon />
                  {"   "}
                  Department
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                  style={{ textAlign: "center" }}
                >
                  <DescriptionOutlinedIcon />
                  {"   "}
                  Project
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                  style={{ textAlign: "center" }}
                >
                  <SettingsOutlinedIcon />
                  {"   "}
                  Settings
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                  style={{ textAlign: "center" }}
                >
                  <ExitToAppOutlinedIcon />
                  {"   "}
                  SignOut
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;
              {/* <button type="button" class="btn btn-light "><GridViewOutlinedIcon/>{"   "}
                Dashboard
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><PersonAddOutlinedIcon/>{"   "}
                Employees
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><BadgeOutlinedIcon/>{"   "}
                Department
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><DescriptionOutlinedIcon/>{"   "}
                Department
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light"><SettingsOutlinedIcon/>{"   "}
                Settings
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light"><ExitToAppOutlinedIcon/>{"   "}
                SignOut
              </button> &nbsp;&nbsp;&nbsp; */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
