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
      console.log('data sent'); 
      
    })
    .catch((error) => {
      alert(error.message);
      alert("this DID NOT WORK")
      console.error("this did not work")
    });
}


function getData() {
  const url = 'http://localhost:5000/server/coindesk';

  axios.get(url)
    .then((response) => {
      console.log('trying to get data');
      
      const data = response.data;

      setCoindeskData(data);
    });
    
    .catch((error) => {
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
