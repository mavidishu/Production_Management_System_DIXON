import React from 'react';
import "./newemployee.css";

function NewEmployee() {
  return (
    <div className='container employeeFormContainer ' style={{marginTop:"5rem"}}>
        <h3 className='productTitle'>New Employees Form</h3>
        <form method="POST" action="http://localhost:5000/employees" className="needs-validation" encType="multipart/form-data">
              <div className="row">
                <div className=" mb-3">
                  <label htmlFor="employee" className="form-label mt-3" >Employee Name</label>
                  <input type="text" className="form-control" id="employee" placeholder="" aria-label="employee" name='employeeName' required/>
                </div>
                <div className="">
                  <label htmlFor="position" className="form-label" >Work Position</label>
                  <input type="text" className="form-control" id="position" placeholder="" name='position' aria-label="Workers Available" required/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="email" className="form-label" >Email</label>
                  <input type="email" className="form-control" id="email" placeholder="" name="email" aria-label="email" required/>
                </div>
                <div className="col">
                  <label htmlFor="mobile" className="form-label" >Mobile Number</label>
                  <input type="number" name='mobileNumber' className="form-control" id='mobile' placeholder="" aria-label="mobile number" required/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="dob" className="form-label" >Date Of Birth</label>
                  <input type="date" name='dob' className="form-control" id='dob' placeholder="" aria-label="dob" required/>
                </div>
                <div className="col">
                  <label htmlFor="aadhar" className="form-label">Aadhar Number</label>
                  <input type="number" name='aadhar' id="aadhar" className="form-control" placeholder="" aria-label="aadhar number" required/>
                </div>
              </div>
              <div className='col mt-3'>
                <label htmlFor="pan" className="form-label">Pan Number</label>
                <input type="text" className='form-control' name="panNumber" id="pan" required/>
              </div>
              <div className="col mt-3">
                <label htmlFor="pdf" className="form-label">Upload Photo <span style={{color:"rgb(170, 170, 170)"}}>( Passport Size )</span></label>
                <input type="file" name='photo' className="form-control" placeholder="" aria-label="Profile Photo" required/>
                <div>* once uploaded can not be changed or updated thereafter.</div>
              </div>
              <div className="mt-3" >
                <label htmlFor="joining" className="form-label" >Joining Date</label>
                <input type="date" name='joining' className="form-control" id="joining" required/>
              </div>
              <button type="submit" className="mt-3 btn btn-sm btn-dark mb-3">Add</button>
            </form>
    </div>
  )
}

export default NewEmployee;