import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { urlget, urldelete } from "../Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "../Navbar";

const Employee = () => {
  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(urlget, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (EmployeeCode) => {
    const res2 = await fetch(
      `http://localhost:5000/employee/delete/${EmployeeCode}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await res2.json();

    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      console.log("user deleted");

      getdata();
    }
  };

  // const currDate = new Date().toLocaleDateString();

  const dt = null;
  const [cdate, setDate] = useState(dt);
  const handelDate = () => {
    let dt = new Date().toLocaleDateString();
    setDate(dt);
  };
  // const [file, setFile] = useState();
  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }
  /////////////////////////////////////////////////////////////////////////////////////
  let allresult;
  let filteredresult;
  let filteredresult1;
  let filteredresult2;
  let filteredresult3;

  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearchall = (event) => {
    let searchtextall = event.target.value;

    console.log(searchtextall);

    console.log(getuserdata);

    allresult = getuserdata.filter((item) =>
      item.EmployeeCode.toLowerCase()
        .toLowerCase()
        .includes(searchtextall.toLowerCase())
    );

    setUserdata(allresult);

    console.log(allresult);
  };
  /////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch = (event) => {
    let searchtext = event.target.value;

    console.log(searchtext);

    console.log(getuserdata);

    filteredresult = getuserdata.filter((item) =>
      item.EmployeeCode.toLowerCase().includes(searchtext.toLowerCase())
    );

    setUserdata(filteredresult);

    console.log(filteredresult);
  };
  /////////////////////////////////////////////////////////////////////////////////////
  const handleSearch1 = (event) => {
    let searchtext1 = event.target.value;

    console.log(searchtext1);

    console.log(getuserdata);

    filteredresult1 = getuserdata.filter((item) =>
      item.EmployeeEmail.toLowerCase().includes(searchtext1.toLowerCase())
    );

    setUserdata(filteredresult1);

    console.log(filteredresult1);
  };
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch2 = (event) => {
    let searchtext2 = event.target.value;

    console.log(searchtext2);

    console.log(getuserdata);

    filteredresult2 = getuserdata.filter((item) =>
      item.EmployeeFirstName.toLowerCase().includes(searchtext2.toLowerCase())
    );

    setUserdata(filteredresult2);

    console.log(filteredresult2);
  };
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch3 = (event) => {
    let searchtext3 = event.target.value;

    console.log(searchtext3);

    console.log(getuserdata);

    filteredresult3 = getuserdata.filter((item) =>
      item.EmployeeLastName.toLowerCase().includes(searchtext3.toLowerCase())
    );

    setUserdata(filteredresult3);

    console.log(filteredresult3);
  };

  //////////////////////////////////////////////////////////////////
  const [file, setFile] = useState();

  const filechangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", file);

    fetch("http://localhost:5000/getimg", {
      method: "GET",
      body: data,
    })
      .then((result) => {
        console.log("Image");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      {/* ---------------------------------------TABLE---------------------------------------------- */}

      <div className="main">
        <div className="splitr right">
          <div class="card text-center">
            <div class="card-header">
              {" "}
              <h3>Employee Management System</h3>
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <div className="mt">
                <div className="container-fluid box">
                  {/* <div className="ems">
                    <h3>Employee Management System</h3>
                  </div> */}
                  <div className="add_btn">
                    <div className="addbuttons">
                      <NavLink
                        to="/empregister"
                        className="btn btn-primary btn-sm "
                      >
                        Add Employee +
                      </NavLink>{" "}
                      <CSVLink
                        data={getuserdata}
                        className="btn btn-success btn-sm "
                      >
                        Export to Excel
                      </CSVLink>
                      {/* <button onClick={() => this.exportPDF()}>
                  Generate Report
                </button> */}
                      {/* <NavLink
                  to="/deptregister"
                  className="btn btn-light border-dark rounded-pill"
                >
                  Add Department
                </NavLink> */}
                    </div>
                  </div>
                  {/* <div class="form-outline mb-4">
              <input
                id="searchtext"
                type="text"
                placeholder="Search"
                onChange={handleSearchall}
              />
            </div> */}
                  {/* <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                id="search"
                placeholder="Search"
                onChange={handleSearch}
              />
            </div> */}

                  <div className="table-responsive">
                    <table class="table table-bordered border auto-index">
                      <thead>
                        <tr className="table-light">
                          <th scope="col">Action</th>
                          <th scope="col">Sr No</th>
                          <th scope="col">Profile</th>
                          <th scope="col">
                            <div class="form-outline mb-4 ">
                              <input
                                id="searchtext"
                                type="text"
                                placeholder="Search EmployeeCode"
                                onChange={handleSearch}
                              />
                            </div>
                            EmployeeCode
                          </th>
                          <th scope="col">
                            <div class="form-outline mb-4">
                              <input
                                id="searchtext"
                                type="text"
                                placeholder="Search Email"
                                onChange={handleSearch1}
                              />
                            </div>
                            Email
                          </th>
                          <th scope="col">
                            <div class="form-outline mb-4">
                              <input
                                id="searchtext"
                                type="text"
                                placeholder="Search FirstName"
                                onChange={handleSearch2}
                              />
                            </div>
                            FirstName
                          </th>
                          <th scope="col">
                            <div class="form-outline mb-4">
                              <input
                                id="searchtext"
                                type="text"
                                placeholder="Search LastName"
                                onChange={handleSearch3}
                              />
                            </div>
                            LastName
                          </th>
                          <th scope="col">Age</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Birthdate</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Salary</th>
                          <th scope="col">Grade</th>
                          <th scope="col">Skills</th>
                          <th scope="col">Department</th>
                          <th scope="col">L1</th>
                          <th scope="col">DateOfJoining</th>
                          <th scope="col">LastDate</th>

                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>
                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <NavLink
                                    to={`/empedit/${element.EmployeeCode}`}
                                  >
                                    <button className="btn btn-link">
                                      <b>edit</b>
                                    </button>
                                  </NavLink>
                                </td>
                                <th scope="row">
                                  <b>{id++}</b>
                                </th>
                                <td>
                                  <img src={file} />
                                </td>

                                <td>
                                  <b>{element.EmployeeCode}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeEmail}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeFirstName}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeLastName}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeAge}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeGender}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeBirthdate}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeePhone}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeSalary}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeGrade}</b>
                                </td>
                                <td>
                                  <b>{element.Skills}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeDepartment}</b>
                                </td>
                                <td>
                                  <b>{element.EmployeeL1}</b>
                                </td>
                                <td>
                                  <b>{element.DateOfJoining}</b>
                                </td>
                                <td>
                                  <b>{element.LastDate}</b>
                                </td>

                                <td className="d-flex justify-content-between ">
                                  {/* <NavLink to={`/details/${element.EmployeeCode}`}>
                              <button className="btn btn-success">read</button>
                            </NavLink> */}
                                  {/* <NavLink to={`/edit/${element.EmployeeCode}`}>
                              <button className="btn btn-primary">
                                update
                              </button>
                            </NavLink> */}
                                  {/* <NavLink to={`/deleteuser/${element._id}`}>
                          <button className="btn btn-danger">Delete</button>
                        </NavLink> */}
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      deleteuser(element.EmployeeCode)
                                    }
                                  >
                                    delete
                                  </button>
                                  {/* <button onClick={handelDate}>
                              Get Current date
                            </button> */}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            <div class="card-footer text-muted">
              copyright @ 2022 Omkar More
            </div>
          </div>
          {/* ///////////////////////////////////////// */}
        </div>
      </div>
    </header>
  );
};

export default Employee;
