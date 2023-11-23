'use client'
import Image from 'next/image'

import axios from 'axios';
import {useState, useEffect, useCallback, useRef} from 'react'

export default function Home() {

// Add in the data here 
const data = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "writing", "coding"],
  
  
};


// Create the function here 
function sendData() {
  // Use axios to send a post request to the backend server
  
  console.log('trying to send data')
  axios
    .post("http://localhost:5000/server", data)
    .then((response) => {
      // Do something with the response
      // For example, alert the response data
      alert(JSON.stringify(response.data));
      console.log('data send'); 
      
    })
    .catch((error) => {
      // Handle the error
      // For example, alert the error message
      alert(error.message);
      alert("this DID NOT WORK")
      console.error("this did not work")
    });
}






  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={sendData} >
      
      <h1>
        SEND 
        
      </h1>
      </button>
      
      
    </main>
  )
}
