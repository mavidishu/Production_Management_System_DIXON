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
    const [yearSales,setYearSales] = useState([]);
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
        setMonthlySales(jsonMonthly);
    }

    // API CALL - get whole year sales in 12 month format using GET
    const getYearSales = async()=>{
        const response = await fetch("http://localhost:5000/transactions/year",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
            }
        });

        const jsonYear = await response.json();
        setYearSales(jsonYear);
    }

    return(
        <UserContext.Provider value={{user,getUser,products,getProduct,transactions,getTransactions,dailySales,getDailySales,monthlySales,getMonthlySales,yearSales,getYearSales}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;