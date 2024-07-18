export const getProfile= async()=>{
    let response = await fetch("http://localhost:5000/profile",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    });

    let admin = response.json();
    return admin;
}