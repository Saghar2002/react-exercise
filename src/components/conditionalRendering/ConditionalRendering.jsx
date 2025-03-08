import {useState} from 'react'

const ConditionalRendering = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true);
    const [productState , setProductState] = useState("pending");

    // product state : error - pending - success

    // if(isLoggedIn){

    //     return (
    //         <>
    //         <button>LogOut</button>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //         <button>LogIn</button>
    //         </>
    //     )
    // }

    // return <>{ isLoggedIn ? <button>LogOut</button> : <button>LogIn</button> }</>

     // ' && ' Logical Operator

  //  
 
  switch(productState) {
    case "error" : 
    return (
        <div className='bg-white rounded p-3'>
            <h3>Error</h3>
        </div>
    );

    case "pending" :
        return (
            <div className='bg-blue-400 rounded p-3'>
                <h3>Pending</h3>
                <p>وضعیت موجود</p>
            </div>
        );

    case "success" :
        return (
            <div className='bg-green-400 rounded p-3'>
                <h3>Success</h3>
                <p>با موفقیت انجام شد</p>
            </div>
        );    
        
    default :     
    return (
            <div className=" bg-gray-400 rounded p-3">
                <p>در انتظار تعیین وضعیت</p>
            </div>
            );
  }

}

export default ConditionalRendering