import React from 'react';
import "./newemployee.css";

function NewEmployee() {
  return (
    <div className='container employeeFormContainer ' style={{marginTop:"5rem"}}>
        <h3 className='productTitle'>New Employees Form</h3>
        <form method="POST" action="http://localhost:5000/employees" className="needs-validation" enctype="multipart/form-data">
              <div class="row">
                <div class=" mb-3">
                  <label htmlFor="employee" class="form-label mt-3" >Employee Name</label>
                  <input type="text" class="form-control" id="employee" placeholder="" aria-label="employee" name='employeeName' required/>
                </div>
                <div class="">
                  <label htmlFor="position" class="form-label" >Work Position</label>
                  <input type="text" class="form-control" id="position" placeholder="" name='position' aria-label="Workers Available" required/>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="email" class="form-label" >Email</label>
                  <input type="email" class="form-control" id="email" placeholder="" name="email" aria-label="email" required/>
                </div>
                <div class="col">
                  <label htmlFor="mobile" class="form-label" >Mobile Number</label>
                  <input type="number" name='mobileNumber' class="form-control" id='mobile' placeholder="" aria-label="mobile number" required/>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="dob" class="form-label" >Date Of Birth</label>
                  <input type="date" name='dob' class="form-control" id='dob' placeholder="" aria-label="dob" required/>
                </div>
                <div class="col">
                  <label htmlFor="aadhar" class="form-label">Aadhar Number</label>
                  <input type="number" name='aadhar' id="aadhar" class="form-control" placeholder="" aria-label="aadhar number" required/>
                </div>
              </div>
              <div className='col mt-3'>
                <label htmlFor="pan" className="form-label">Pan Number</label>
                <input type="text" className='form-control' name="panNumber" id="pan" required/>
              </div>
              <div className="col mt-3">
                <label htmlFor="pdf" className="form-label">Upload Photo <span style={{color:"rgb(170, 170, 170)"}}>( Passport Size )</span></label>
                <input type="file" name='photo' class="form-control" placeholder="" aria-label="Profile Photo" required/>
                <div>* once uploaded can not be changed or updated thereafter.</div>
              </div>
              <div class="mt-3" >
                <label htmlFor="joining" class="form-label" >Joining Date</label>
                <input type="date" name='joining' className="form-control" id="joining" required/>
              </div>
              <button type="submit" class="mt-3 btn btn-sm btn-dark mb-3">Add</button>
            </form>
    </div>
  )
}

export default NewEmployee;