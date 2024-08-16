import React,{useState} from "react";
import UserContext from "./UserContext";
import { json } from "react-router";

const UserState = (props)=>{
    const userInitial = [];
    const productInitial = [];
    const transactionsInitial = [];
    const productOneInitial = [];
    const yearSalesInitial = [];
    // State to fetch all users from mongodb [backend]
    const [user,setUser] = useState(userInitial);
    const [products,setProduct] = useState(productInitial);
    const [transactions,setTransaction] = useState(transactionsInitial);
    const [productOne,setParticularProduct] = useState(productOneInitial);
    const [yearSales,setYearSales] = useState(yearSalesInitial);
    // API CALL - get all users using GET
    const getUser = async()=>{
        const response = await fetch("http://localhost:5000/employees",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token for login
            }
        });
        const jsonUser = await response.json();
        setUser(jsonUser);
    }

    // API CALL - get all products using GET
    const getProduct = async()=>{
        const response = await fetch("http://localhost:5000/products/items",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token - authorization
            }
        });
        const jsonProduct = await response.json();
        console.log(jsonProduct);
        setProduct(jsonProduct);
    }

    // API CALL - get all transactions using GET
    const getTransactions = async()=>{
        const response = await fetch("http://localhost:5000/transactions/items",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token - authorization
            }
        });
        const jsonTransaction = await response.json();
        setTransaction(jsonTransaction);
    }

    // API CALL - get particular products using GET
    const getParticularProduct = async(id)=>{
        const response = await fetch(`http://localhost:5000/products/items/${id}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
            }
        });
        const jsonProductOne =  await response.json();
        jsonProductOne.auditDate = jsonProductOne.auditDate.substring(0,10);
        jsonProductOne.targetDate = jsonProductOne.targetDate.substring(0,10);
        console.log(jsonProductOne);
        setParticularProduct(jsonProductOne);
    }

    // API CALL - get year sales using GET
    const getYearSales = async()=>{
        const response = await fetch("http://localhost:5000/transactions/year");
        const jsonResponse = await response.json();

        setYearSales(jsonResponse);
    }
    return(
        <UserContext.Provider value={{user,getUser,products,getProduct,transactions,getTransactions,productOne,getParticularProduct,yearSales,getYearSales}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;