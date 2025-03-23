import React, { useEffect, useReducer } from 'react'


const initialState = {
    loading : false ,
    data : null , 
    error : null ,
};

function reducer (state,action){
 switch (action.type){
    case "fetchStart" :
        return { ...state , loading : true , error : null };
    case "fetchSuccess" :
        return { ...state , loading : false , data : action.data };
    case "fetchError" :
        return { ...state , loading : false , error : action.error };
 }
}

// export const PostPage = () => {

//   const [state , dispatch] = useReducer( reducer , initialState);  

//   useEffect(() => {
//     dispatch({ type : "fetchStart"}); 
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => dispatch({ type : "fetchSuccess" , data: data }))
//     .catch((error) => dispatch({ type: "fetchError" , error }));
//   } , []);


//   if (state.loading) return <p>Loading...</p>;
//   if (state.error) return <p>Error : {state.error.message}</p>;
//   return <div>{state.data?.title}</div>;
  
// };

export const PostPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      dispatch({ type: "fetchStart" });
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "fetchSuccess", data }))
        .catch((error) => dispatch({ type: "fetchError", error }));
    }, []);
  
    if (state.loading) return <p>Loading ...</p>;
    if (state.error) return <p>Error: {state.error.message}</p>;
    return <div>{state.data?.title}</div>;
  };