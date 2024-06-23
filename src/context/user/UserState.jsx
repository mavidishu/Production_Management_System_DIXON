import React,{useState} from "react";
import UserContext from "./UserContext";

const UserState = (props)=>{
    const userInitial = [];
    const productInitial = [];
    const transactionsInitial = [];

    // State to fetch all users from mongodb [backend]
    const [user,setUser] = useState(userInitial);
    const [products,setProduct] = useState(productInitial);
    const [transactions,setTransaction] = useState(transactionsInitial);
    const [dailySales,setDailySales] = useState(0);
    const [monthlySales,setMonthlySales] = useState(0);
    // API CALL - get all users using GET
    const getUser = async()=>{
        const response = await fetch("http://localhost:5000/listings/user",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token for login
            }
        });
        const jsonUser = await response.json();
        console.log(jsonUser);
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
        console.log(jsonTransaction);
        setTransaction(jsonTransaction);
    }

    // API CALL - get daily sales using GET
    const getDailySales = async()=>{
        const response = await fetch("http://localhost:5000/transactions/dailysales",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token - authorization
            }
        });
        const jsonDaily = await response.json();
        console.log(jsonDaily);
        setDailySales(jsonDaily);
    }

    // API CALL - get monthly sales using GET
    const getMonthlySales = async()=>{
        const response = await fetch("http://localhost:5000/transactions/monthlysales",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                // auth token - authorization
            }
        });
        const jsonMonthly = await response.json();
        console.log(jsonMonthly);
        setMonthlySales(jsonMonthly);
    }
    return(
        <UserContext.Provider value={{user,getUser,products,getProduct,transactions,getTransactions,dailySales,getDailySales,monthlySales,getMonthlySales}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;