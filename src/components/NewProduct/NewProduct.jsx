import React from 'react';
import "./newproduct.css";
function NewProduct() {
  return (
    <div className="container productContainer mb-3" style={{marginTop:"5rem"}}>
        <h3 className='productTitle'>Add to production</h3>
        <form method="POST" action="http://localhost:5000/products" className="needs-validation" encType="multipart/form-data">
              <div className="row">
                <div className=" mb-3">
                  <label htmlFor="target" className="form-label mt-3" >Product Name</label>
                  <input type="text" className="form-control" id="target" placeholder="" aria-label="Target For the Day" name='productName' required/>
                </div>
                <div className="">
                  <label htmlFor="target" className="form-label" >Product Price</label>
                  <input type="number" className="form-control" placeholder="" name='productPrice' aria-label="Workers Available" required/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="target" className="form-label" >Audit Date</label>
                  <input type="date" className="form-control" placeholder="" name="auditDate" aria-label="Stock For the Day" required/>
                </div>
                <div className="col">
                  <label htmlFor="target" className="form-label" >Target Date</label>
                  <input type="date" name='targetDate' className="form-control" placeholder="" aria-label="Left Out Stock" required/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="target" className="form-label" >Total Stock</label>
                  <input type="number" name='targetStock' className="form-control" placeholder="" aria-label="Faulty Stock" required/>
                </div>
                <div className="col">
                  <label htmlFor="target" className="form-label">Budget</label>
                  <input type="number" name='budget' className="form-control" placeholder="" aria-label="Faulty Production" required/>
                </div>
              </div>
              <div className='col mt-3'>
                <label htmlFor="production" className="form-label">Production</label>
                <input type="number" className='form-control' name="production" id="production" required/>
              </div>
              <div className="col mt-3">
                <label htmlFor="pdf" className="form-label">Upload WI <span style={{color:"rgb(170, 170, 170)"}}>(Work Instruction)</span></label>
                <input type="file" name='wiUrl' className="form-control" placeholder="" aria-label="Faulty Production" accept='.pdf' required/>
                <div>* once uploaded can not be changed or updated thereafter.</div>
              </div>
              <div className="mt-3" >
                <label htmlFor="target" className="form-label" >Product Details<span style={{color:"rgb(170, 170, 170)"}}>(Include Test Details Also)</span></label>
                <textarea name="productDetails" id="productInfo" placeholder="" rows={10}></textarea>
              </div>
              <button type="submit" className="mt-3 btn btn-sm btn-dark mb-3">Add</button>
            </form>
    </div>
  )
}

export default NewProduct;