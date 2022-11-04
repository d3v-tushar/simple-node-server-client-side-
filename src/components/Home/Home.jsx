import React, { useEffect, useState } from 'react';
import useTitle from '../../../Custom Hook/UseTitle/UseTitle';

const Home = () => {
    useTitle('Home')
    const [users, setUsers] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
    },[]);
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      console.log(name, email);
      const user = {name, email};
      form.reset();
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
      .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" placeholder='Name' />
            <br />
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder='Email' />
            <br />
            <button type="submit">Add User</button>
        </form>
        <h3>Total Users: {users.length}</h3>
        <div>
        {
            users.map(user => <p key={user.id}>Name: {user.name} & Email: {user.email}</p>)
        }
        </div>
        </div>
    );
};

export default Home;