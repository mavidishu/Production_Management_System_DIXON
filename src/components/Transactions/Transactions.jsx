import React, { useContext, useEffect } from 'react';
import "./transactions.css";
import UserContext from '../../context/user/UserContext';

function Transactions() {
  const context = useContext(UserContext);
  const {transactions,getTransactions} = context;

  useEffect(()=>{
    getTransactions();
  },[]);

  return (
    <section id="transactions">
      <div className="container my-3">
        <h3 className="my-3">Transactions Listing</h3>
        <table className="table mx-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Id</th>
              <th scope="col">Created At</th>
              <th scope="col">No of Products</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map((item)=>{
                return(
                  <tr>
                  <th scope="row">{item._id}</th>
                  <th>{item.userId}</th>
                  <td>{item.createdAt}</td>
                  <td>{item.noOfProducts}</td>
                  <td>{item.cost}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Transactions