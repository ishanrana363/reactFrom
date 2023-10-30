import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Registration From</h1>
      <form action="">
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" name='name' id='name' required />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;