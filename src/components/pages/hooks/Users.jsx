import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Users = () => {

    const [users, setUsers] = useState();


    useEffect(() => {
        fetchUsers();
    } ,[]);

    async function fetchUsers(pageNumber) {
        await axios.get("https://reqres.in/api/users" , {
            params: {page: pageNumber} ,
        })
        .then((res) => {
            console.log(res)
            setUsers(res.data.data);
        });
    }



if(users){
    return (
      <div>
        <h3>Users List:</h3>
        <div className='grid gap-3 grid-cols-3'>
            {users.map((user) => (
          <Link key={user.id} to={`/User/${user.id}`}>
             <div className="p-5 rounded shadow-md bg-white">
                <img src={user.avatar} alt="avatar" />
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
             </div>
          </Link>
            ))}
        </div>
      </div>
    )
}
}
