import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom';

export const Users = () => {

    const [users, setUsers] = useState();
    const [searchParams , setSearchParams] = useSearchParams();
    const [pageQuery , setPageQuery] = useState(searchParams.get("page"));
    const [paginationData , setPageinationData] = useState();


    useEffect(() => {
        fetchUsers();
    } ,[]);

    async function fetchUsers(pageNumber) {
        await axios.get("https://reqres.in/api/users" , {
            params: {page: pageNumber} ,
        })
        .then((res) => {
            console.log(res);
            setSearchParams({ page : pageNumber || 1});
            setPageQuery(pageNumber);
            setUsers(res.data.data);
            setPageinationData({
                total : res.data.total,
                per_page : res.data.per_page,
            });
        });
    }


    const handlePageClick = (pageNumber) => {
        fetchUsers(pageNumber);
    };


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
        <div className="w-full flex justify-center items-center">
            {Array.from(
                {
                    length: paginationData.total / paginationData.per_page,
                },
                (item, index) => (
                    <button
                    className="rounded mx-4 mt-2 p-4 bg-blue-500 text-white font-bold"
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                )
            )}
        </div>
      </div>
    );
} else {
    return <p>Loading ...</p>
}
};
