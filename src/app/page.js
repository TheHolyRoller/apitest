'use client'
import Image from 'next/image'

import axios from 'axios';
import {useState, useEffect, useCallback, useRef} from 'react'

export default function Home() {

  const [coindeskData, setCoindeskData] = useState(null);



// Add in the data here 
const data = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "writing", "coding"],
  
  
};


function sendData() {
  
  console.log('trying to send data')
  axios
    .post("http://localhost:5000/server", data)
    .then((response) => {
      alert(JSON.stringify(response.data));
      console.log('data send'); 
      
    })
    .catch((error) => {
      alert(error.message);
      alert("this DID NOT WORK")
      console.error("this did not work")
    });
}

function getData() {
  // Define the URL to make the GET request
  const url = 'http://localhost:5000/server/coindesk';

  // Use axios to make a GET request to the server
  axios.get(url)
    .then((response) => {
      // Get the data from the response
      console.log('trying to get data');
      
      const data = response.data;

      // Set the coindesk data state variable to the data
      setCoindeskData(data);
    })
    .catch((error) => {
      // Handle the error
      // For example, alert the error message
      console.log('this did not work');
      console.error("this did not work")
      alert(error.message);
    });
}




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={sendData} >
      
      <h1>
        SEND 
        
      </h1>
      </button>
      
      <button onClick={getData} >
      
      <h1>GET</h1>
      
      </button>
      
      
    </main>
  )
}
