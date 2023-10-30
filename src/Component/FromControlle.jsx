import React, { useState } from 'react';
const FromControlle = () => {
    const [user,setUser] = useState({
        Name : "",
        email : "",
        password : ""
    })
    const {Name,email,password} = user
    const handleFrom = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
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
                onChange={handleFrom} value={Name} id="Name" />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" value={email}
                onChange={handleFrom}id="email" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={password}
                onChange={handleFrom} id="password" />
            </div>
            <div>
                <button type= "submit" >Submit</button>
            </div>
            </form>
        </div>
    );
};

export default FromControlle;