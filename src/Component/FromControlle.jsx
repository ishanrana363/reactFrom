import React, { useState } from 'react';
const FromControlle = () => {
    const [user,setUser] = useState({
        Name : "",
        email : "",
        password : ""
    })
    const {Name,email,password} = user
    const handleName =(e) =>{
        setUser({Name:e.target.value,email,password})
    }
    const handleEmail = (e) =>{
        setUser({Name,email : e.target.value,password})
    }
    const handlePassword = (e)=>{
        setUser({Name, email , password:e.target.value })
    }
    const handleFromSubmit = (e)=>{
        e.preventDefault()
        console.log("form is submited")
        console.log(user)
    }
    return (
        <div>
            <h1>Register form</h1>
            <form action="" onSubmit={handleFromSubmit} >
            <div>
                <label htmlFor="Name">Name : </label>
                <input  type="text" name="Name" 
                onChange={handleName} value={Name} id="Name" />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" value={email}
                onChange={handleEmail}id="email" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={password}
                onChange={handlePassword} id="password" />
            </div>
            <div>
                <button type= "submit" >Submit</button>
            </div>
            </form>
        </div>
    );
};

export default FromControlle;