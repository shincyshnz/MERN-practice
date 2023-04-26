import React, {useEffect} from 'react'

function Title({userName}) {

  useEffect(()=>{
    // Mount
    let interval = setInterval(()=>{
      console.log("Mount");
    },1000);

    // Unmount
    return () => {
      console.log("UnMount");
      clearInterval(interval)
    };

  },[]); // dependency array

  return (
    <div>
        <h1>Welcome {userName}</h1>
    </div>
  )
}

export {Title}