import React, { useEffect, useState } from 'react';
import sampleImage from "../../assets/admin.png";
import "./employeeInfo.css";
import { useParams } from 'react-router-dom';
function EmployeeInfo() {
    const[employee,setEmployee] = useState({});
    let params = useParams();
    let employeeId = params.id;

    const fetchEmployee = async()=>{
        let response = await fetch(`http://localhost:5000/employees/${employeeId}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token for login
            }
        });
        let employeeJson = await response.json();
        setEmployee(employeeJson);
    }

    useEffect(()=>{
        fetchEmployee();
    },[])
  return (
    <div className='container' style={{marginTop:"6rem",width:"80%"}}>
        <h3 className="my-3 customerTitle">Employee Profile</h3>
        <div className='employeeInfoContainer mb-3'>
            <div className="d-flex align-items-start">
                <div className="leftContainer" style={{width:"30%"}}>
                    <div className="card profileCard" style={{width:"100%"}}>
                        <h6 class="card-subtitle mb-2">Profile </h6>
                        <div className="card-body text-center" style={{width:"100%"}}>
                            <div className="profilePic">
                                <img src={sampleImage} alt="profilePicture" />
                            </div>
                            <div className="profileInfo mt-3">
                                <h5>{employee.employeeName}</h5>
                                <span>{employee.position}</span>
                            </div>
                        </div>
                    </div> 
                    <div className="card contactCard" style={{width:"100%"}}>
                        <h6 class="card-subtitle mb-3">Contact Details</h6>
                        <div className="emailContainer mb-3 mx-3">
                            <label htmlFor="" className='mb-1'>Employee Email</label>
                            <a href="mailto:">{employee.email}</a>
                        </div>
                        <div className="mobileNumber mb-1 mx-3">
                            <label htmlFor="" className='mb-1'>Mobile Number</label>
                            <a href="">{employee.mobileNumber}</a>
                        </div>
                    </div>
                </div>
                <div className="rightContainer mx-3" style={{width:"70%"}}>
                    <div className="card detailsCard" style={{width:"100%"}}>
                        <h6 class="card-subtitle mb-2">Details</h6>
                        <div className="gender">
                            <label htmlFor="">Gender</label>
                            <p>Male</p>
                        </div>
                        <div className="dob">
                            <label htmlFor="">Date Of Birth</label>
                            <p>{employee.dob}</p>
                        </div>
                        <div className="address">
                            <label htmlFor="">Address</label>
                            <p>Hn 145, Sona Motors Dadri</p>
                        </div>
                        <div className="joiningDate">
                            <label htmlFor="">Joining Date</label>
                            <p>{employee.joining}</p>
                        </div>
                        <div className="aadharCard">
                            <label htmlFor="">Aadhar Card</label>
                            <p>{employee.aadhar}</p>
                        </div>
                        <div className="panCard">
                            <label htmlFor="">Pan Card</label>
                            <p>{employee.panNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="documentContainer">
                <div className="aadharCard">
                    Aadhar Card
                </div>
                <div className="panCard">
                    Pan Card
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default EmployeeInfo;