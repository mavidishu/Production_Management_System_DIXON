import React from "react";
import "./customers.css";
import { useContext, useEffect, useRef,useState } from "react";
import UserContext from "../../context/user/UserContext";

function Customers() {
  const context = useContext(UserContext);
  const {user,getUser} = context;
  useEffect(()=>{
    getUser();
  },[])
  return (
    <section id="customers">
      <div className="container">

      <h3 className="my-3">Registered Customers</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email</th>
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
            user.map((user)=>{
              return(
                <tr>
                  <th scope="row">{user._id}</th>
                  <td>{user.userName}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.userEmail}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default Customers;
