import React from "react";
import "./employees.css";
import { useContext, useEffect, useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import NewEmployee from "../NewEmployee/NewEmployee.jsx";

function Employees() {
  let [employee,setEmployee] = useState([]);
  let navigate = useNavigate();

  let fetchEmployees = async()=>{
    const response = await fetch("http://localhost:5000/employees",{
      method:'GET',
      headers:{
          "Content-Type":"application/json",
          // auth token for login
      }
    });
    const jsonUser = await response.json();
    setEmployee(jsonUser);
  }

  useEffect(()=>{
    fetchEmployees();
  },[]);

  return (
    <section id="customers">
      <div className="container mb-3">
        <div className="employeeHeaderContainer d-flex justify-content-between align-items-center">
          <h3 className="my-3 customerTitle">Registered Employees</h3>
          <button className="btn btn-dark" onClick={()=>{navigate("/employees/new")}}>New Employee</button>
        </div>
        <div className="tableContainer">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tableHead">Id</th>
                <th scope="col" className="tableHead">Employee Name</th>
                <th scope="col" className="tableHead">Mobile No</th>
                <th scope="col" className="tableHead">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">6678443a5ba2ada308b303e1</th>
                <td>Ram Sharma</td>
                <td>8727392010</td>
                <td>ramsharma9090@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">6678443a5ba2ada308b303e2</th>
                <td>Hardeep Singhania</td>
                <td>2310928490</td>
                <td>hardeepTred@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">6678443a5ba2ada308b303e3</th>
                <td>Rohan Chechi</td>
                <td>8989456788</td>
                <td>rohanch99@gmail.com</td>
              </tr>
              {
                employee.map((user)=>{
                  return(
                    <tr onClick={()=>{navigate(`/employees/${user._id}`)}}>
                      <th scope="row">{user._id}</th>
                      <td>{user.employeeName}</td>
                      <td>{user.mobileNumber}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Employees;
