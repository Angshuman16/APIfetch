
import './App.css';
import {useEffect, useState} from "react";
import Users from './Components/Users';
const API="https://jsonplaceholder.typicode.com/users";



function App() {

const [users, setusers] = useState([]);

  const fetchuser = async (url) =>{
    try{
        const res= await fetch(url);
        const data= await res.json();
        if(data.length>0)
        setusers(data);
        console.log(data);
    }
    catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
     fetchuser(API);
  },[])
  return (
      <>
      <h1 className='heading'>TABLE DATA FETCHED FROM API</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
           <th>Email</th>
           <th>Website</th>
           </thead>
           <tbody>
            <Users data={users} />
           </tbody>
        
      </table>
      </>
  );
}

export default App;
