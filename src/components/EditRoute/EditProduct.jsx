import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {
    let params = useParams();
    let id = params.id;
    let [product,setProduct] = useState({});

    useEffect(()=>{
        let fetchProduct = async()=>{
            const response = await fetch(`http://localhost:5000/products/items/${id}`,{
                method:'GET',
                headers:{
                    "Content-Type":"application/json",
                }
            });
            let productResponse = await response.json();
            console.log(productResponse);
            setProduct(productResponse);
        }
        fetchProduct();
    },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

  return (
    <div className="container productContainer mb-3" style={{marginTop:"5rem"}}>
        <h3 className='productTitle'>Update production</h3>
        <form method="POST" action={`http://localhost:5000/products/${product._id}?_method=PUT`} className="" >
              <div className="row">
                <div className=" mb-3">
                  <label htmlFor="target" className="form-label mt-3" >Product Name</label>
                  <input type="text" className="form-control" id="target" placeholder="" aria-label="Target For the Day" name='productName' value={product.productName} onChange={handleChange}/>
                </div>
                <div className="">
                  <label htmlFor="target" className="form-label" >Product Price</label>
                  <input type="number" className="form-control" placeholder="" name='productPrice' aria-label="Workers Available" value={product.productPrice} onChange={handleChange}/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="target" className="form-label" >Audit Date</label>
                  <input type="date" className="form-control" placeholder="" name="auditDate" aria-label="Stock For the Day" onChange={handleChange} required/>
                </div>
                <div className="col">
                  <label htmlFor="target" className="form-label" >Target Date</label>
                  <input type="date" name='targetDate' className="form-control" placeholder="" aria-label="Left Out Stock"onChange={handleChange} required/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="target" className="form-label" >Total Stock</label>
                  <input type="number" name='targetStock' className="form-control" placeholder="" aria-label="Faulty Stock" value={product.stock?product.stock:0} onChange={handleChange}/>
                </div>
                <div className="col">
                  <label htmlFor="target" className="form-label">Budget</label>
                  <input type="number" name='budget' className="form-control" placeholder="" aria-label="Faulty Production" value={product.budget} onChange={handleChange}/>
                </div>
              </div>
              <div className='col mt-3'>
                <label htmlFor="production" className="form-label">Production</label>
                <input type="number" className='form-control' name="production" id="production" value={product.production} onChange={handleChange}/>
              </div>
              <div className="mt-3" >
                <label htmlFor="target" className="form-label" >Product Details<span style={{color:"rgb(170, 170, 170)"}}>(Include Test Details Also)</span></label>
                <textarea name="productDetails" id="productInfo" placeholder="" rows={10} value={product.productDetails} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="mt-3 btn btn-sm btn-dark mb-3">Update</button>
            </form>
    </div>
  )
}

export default EditProduct