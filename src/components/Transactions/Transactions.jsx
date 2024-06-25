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
        <h3 className="my-3 transactionTitle">Transactions Listing</h3>
        <div className="tableContainer">
          <table className="table mx-3">
            <thead>
              <tr>
                <th scope="col" className='tableHead'>Transaction Id</th>
                <th scope="col" className='tableHead'>User Id</th>
                <th scope="col" className='tableHead'>Created At</th>
                <th scope="col" className='tableHead'>No of Products</th>
                <th scope="col" className='tableHead'>Cost</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions.map((item)=>{
                  return(
                    <tr>
                    <th scope="row">{item._id.substring(0,10)}</th>
                    <th>{item.userId.substring(0,10)}</th>
                    <td>{item.createdAt.substring(0,10)}</td>
                    <td>{item.noOfProducts}</td>
                    <td>{item.cost}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Transactions