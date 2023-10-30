import React, { useState } from 'react';
import "../css/style.css"
const FromControlle = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleName = (e)=>{
        setName(e.target.value)
      }
      const handleEmail = (e)=>{
        setEmail(e.target.value)
      }
      const handlePassword = (e) =>{
        setPassword(e.target.value)
      }
      const fromHandle = (e)=>{
        e.preventDefault()
       console.log("From submited")
        // console.log(name,email,password)
        let userInfo = {
            name:name,
            email:email,
            password:password
        }
        console.log(userInfo)
      }
    return (
        <div>
            <h1>Registration From</h1>
      <form action="" onSubmit={fromHandle} >
        <div className='formController' >
          <label htmlFor="name">Name : </label>
          <input onChange={handleName} type="text"
          value={name}
          name='name' id='name' required />
        </div>
        <div className='formController' >
          <label htmlFor="email">Email : </label>
          <input onChange={handleEmail} type="email" 
          value={email}
          name="email" id="email" required />
        </div>
        <div className='formController' >
          <label htmlFor="password">Password : </label>
          <input onChange={handlePassword} type="password"
            value={password}
          name="password" id="password" required />
        </div>
        <div className='formController' >
          <button type="submit" >Submit</button>
        </div>
      </form>
        </div>
    );
};

export default FromControlle;