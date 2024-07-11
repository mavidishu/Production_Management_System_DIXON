import react, { useEffect, useState } from "react";
import "./employeeEdit.css";
import { useParams } from "react-router-dom";

function EmployeeEdit(){
    let params = useParams();
    let id = params.id;
    const [employee,setEmployee] = useState({});

    let fetchData = async()=>{
        let response = await fetch(`http://localhost:5000/employees/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                // auth token for login
            }
        })
        let responseJson = await response.json();
        console.log(responseJson);
        setEmployee(responseJson);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div className="container" style={{marginTop:"6rem"}}>
            <h3 className='productTitle mb-3'>Update Employee Info</h3>
            <div className="editFormContainer">
                <form method="POST" action={`http://localhost:5000/employees/${id}?_method=PUT`} className="needs-validation" enctype="multipart/form-data">
                    <div class="row">
                        <div class=" mb-3">
                        <label htmlFor="employee" class="form-label mt-3" >Employee Name</label>
                        <input type="text" class="form-control" id="employee" placeholder="" aria-label="employee" name='employeeName' value={employee.employeeName} required/>
                        </div>
                        <div class="">
                        <label htmlFor="position" class="form-label" >Work Position</label>
                        <input type="text" class="form-control" id="position" placeholder="" name='position' aria-label="Workers Available" value={employee.position} required/>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                        <label htmlFor="email" class="form-label" >Email</label>
                        <input type="email" class="form-control" id="email" placeholder="" name="email" aria-label="email" value={employee.email} required/>
                        </div>
                        <div class="col">
                        <label htmlFor="mobile" class="form-label" >Mobile Number</label>
                        <input type="number" name='mobileNumber' class="form-control" id='mobile' placeholder="" aria-label="mobile number" value={employee.mobileNumber} required/>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                        <label htmlFor="dob" class="form-label" >Date Of Birth</label>
                        <input type="date" name='dob' class="form-control" id='dob' placeholder="" aria-label="dob" disabled required/>
                        </div>
                        <div class="col">
                        <label htmlFor="aadhar" class="form-label">Aadhar Number</label>
                        <input type="number" name='aadhar' id="aadhar" class="form-control" placeholder="" aria-label="aadhar number" value={employee.aadhar} required/>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <label htmlFor="pan" className="form-label">Pan Number</label>
                        <input type="text" className='form-control' value={employee.panNumber} name="panNumber" id="pan" required/>
                    </div>
                    <div className="col mt-3">
                        <div className="prevImage d-flex flex-column">
                            <label htmlFor="image" className="form-label">Current Profile Photo</label>
                            <img src={employee.photo} alt="profile" />
                        </div>
                        <label htmlFor="pdf" className="form-label">Update Photo <span style={{color:"rgb(170, 170, 170)"}}>( Passport Size )</span></label>
                        <input type="file" name='photo' class="form-control" placeholder="" aria-label="Profile Photo" required/>
                    </div>
                    <div class="mt-3" >
                        <label htmlFor="joining" class="form-label" >Joining Date</label>
                        <input type="date" name='joining' className="form-control" id="joining" disabled required/>
                    </div>
                    <button type="submit" class="mt-3 btn btn-sm btn-dark mb-3">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EmployeeEdit;