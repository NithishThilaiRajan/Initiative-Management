import './App.css';
import Axios from "axios";
import React from 'react';
import { useState } from 'react/cjs/react.development';
// import Contribution from './contribution';
import ContributeSection from './Initiative/contribution/others_contribution';
import InitiativeSection from './Initiative/initativeList';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { response } from "express";
function UserHome({authorized}) {
const [name,setName]=useState("");
const [email,setEmail]=useState(0);
const [password,setPassword]=useState("");
const [position,setPosition]=useState("");
const [address,setAddress]=useState(0);
const [InitiativeList, setInitiativeList] = useState([]);
const [contributionList, setContributionList] = useState([]);
const userDetails = useSelector((state) => state.userInfo);
  const loginStatus = userDetails.loggedIn;
  const loggedName=userDetails.name;
  // console.log(loggedName);

  const getContribution = () => {
    Axios.get("http://localhost:3001/getcon").then((response) => {
      setContributionList(response.data);
      console.log(response.data);
    });
  };

if(authorized)
{
  return (
    <div className="App">
      Mr.Cooper Group
   <div className='greeting'> Welcome {loggedName}
   </div>
      <div className="employees">
      {/* <div className="con">
        <button onClick={getContribution}>Show Others Contribution</button>
     
       {contributionList.map((val)=>{

         return (
           <div className="contributionList">
          <h1> Contribution Id={val.con_id}</h1>     
         <h1>Contribution Details= {val.con_details}</h1> 
         </div>
         );
       })}
       </div> */}
       <ContributeSection/>
       <InitiativeSection/>
       </div>
    </div>
  );
      }
      return <Redirect to="/login" />;  
}

export default UserHome;