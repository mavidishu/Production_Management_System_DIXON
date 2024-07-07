import React from 'react';
import "./newproduct.css";
function NewProduct() {
  return (
    <div className="container productContainer mb-3" style={{marginTop:"5rem"}}>
        <h3 className='productTitle'>Add to production</h3>
        <form method="POST" action="http://localhost:5000/products" className="needs-validation" enctype="multipart/form-data" noValidate>
              <div class="row">
                <div class=" mb-3">
                  <label htmlFor="target" class="form-label mt-3" >Product Name</label>
                  <input type="text" class="form-control" id="target" placeholder="" aria-label="Target For the Day" name='productName' />
                </div>
                <div class="">
                  <label htmlFor="target" class="form-label" >Product Price</label>
                  <input type="number" class="form-control" placeholder="" name='productPrice' aria-label="Workers Available" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="target" class="form-label" >Audit Date</label>
                  <input type="date" class="form-control" placeholder="" name="auditDate" aria-label="Stock For the Day" />
                </div>
                <div class="col">
                  <label htmlFor="target" class="form-label" >Target Date</label>
                  <input type="date" name='targetDate' class="form-control" placeholder="" aria-label="Left Out Stock" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label htmlFor="target" class="form-label" >Total Stock</label>
                  <input type="number" name='targetStock' class="form-control" placeholder="" aria-label="Faulty Stock" />
                </div>
                <div class="col">
                  <label htmlFor="target" class="form-label">Budget</label>
                  <input type="number" name='budget' class="form-control" placeholder="" aria-label="Faulty Production" />
                </div>
              </div>
              <div className='col mt-3'>
                <label htmlFor="production" className="form-label">Production</label>
                <input type="number" className='form-control' name="production" id="production" />
              </div>
              <div className="col mt-3">
                <label htmlFor="pdf" className="form-label">Upload WI <span style={{color:"rgb(170, 170, 170)"}}>(Work Instruction)</span></label>
                <input type="file" name='wiUrl' class="form-control" placeholder="" aria-label="Faulty Production" accept='.pdf'/>
              </div>
              <div class="mt-3" >
                <label htmlFor="target" class="form-label" >Product Details<span style={{color:"rgb(170, 170, 170)"}}>(Include Test Details Also)</span></label>
                <textarea name="productDetails" id="productInfo" placeholder="" rows={10}></textarea>
              </div>
              <button type="submit" class="mt-3 btn btn-sm btn-dark mb-3">Add</button>
            </form>
    </div>
  )
}

export default NewProduct;