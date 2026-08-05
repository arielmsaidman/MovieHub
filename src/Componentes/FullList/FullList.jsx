import Card from '../Card/Card';
import "./FullList.css";
import { useFetch } from "../../hooks/useFetch";

const FullList = () => {

    const { users, loading, error } = useFetch();

    console.log("users:", users);
    console.log("loading:", loading);
    console.log("error:", error);

    if (loading) return <p>loading</p>;

    if (error) return <p>{error}</p>;

    return (
        <div className="grid">
            {
                users.map((user) => (
                    <Card 
                        key={user.id} 
                        data={user} 
                    />
                ))
            }
        </div>
    );
}

export default FullList;

// import React, {useState, useEffect} from 'react'
// // import axios from 'axios';
// import Card from '../Card/Card';
// import "./FullList.css"
// // import Spinner from '../Spinner/Spinner';

// //custom hook
// import {useFetch} from "../../hooks/useFetch";

// const FullList = () => {
    
//     const {users, loading, error} = useFetch();
    
//     if(loading)  return <p>loading</p>;

//     if (error) return <p>{error}</p>;

//     return (
//         <div className='grid'>
            
//            {users.map((user) => {
//              return <Card key={user.id} data={user} />;
//             })}
            
//         </div>
//     )
// }

// export default FullList