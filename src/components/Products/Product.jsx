import React,{useContext, useEffect} from "react";
import "./product.css";
import UserContext from "../../context/user/UserContext";

function Product() {
  const contextProduct = useContext(UserContext);
  const {products,getProduct} = contextProduct;
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <section id="product">
      <div className="container my-3">
        <h3 className="my-3">Product Listing</h3>
        <table className="table mx-3">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Registered Date</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">66786b58ec144130df9dg1f1</th>
              <td>Samsung Television 1</td>
              <td>20 May 2000</td>
              <td>Samsung Pvt. Ltd.</td>
            </tr>
            <tr>
              <th scope="row">66786b58ec144130df9df1fg</th>
              <td>OnePlus Note 4</td>
              <td>17 June 2018</td>
              <td>OnePlus Mobile</td>
            </tr>
            <tr>
              <th scope="row">66786b58ec144130df9df1fa</th>
              <td>RedTape Shoes XL White</td>
              <td>09 Jan 1990</td>
              <td>RedTape</td>
            </tr>
            {
              products.map((item)=>{
                  let date = new Date(item.registeredDate);
                  let options = {
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                  };
                  let formatter = new Intl.DateTimeFormat('en-IN', options);
                  let formattedDate = formatter.format(date);
                return(
                  <tr key={`${item._id}`}>
                    <th scope="row">{item._id}</th>
                    <td>{item.productName}</td>
                    <td>{formattedDate}</td>
                    <td>{item.productCategory}</td>
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

export default Product;
