
import React  from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Initiative = (props) => {
 


    
    const userDetails = useSelector((state) => state.userInfo);
  const loginStatus = userDetails.loggedIn;
  const loggedId=userDetails.id;
  // console.log(loggedName);



    const {Init_Id,Init_Name,Description,further_plans} =props;
    const [con_details,setCon_details]=useState("");
    const addContribution = () => {
  
      Axios.post("http://localhost:3001/addcon", {
        emp_id: loggedId,
        Init_id: Init_Id,
        con_details: con_details,
        }).then(() => {
        console.log("Contribution Registered Successfully..");
      });
    };

    return(
    
  <article className='initiative'>
      
       <h1>Initiative Name:{Init_Name}</h1>
       <h4>About: {Description}</h4>
       <p>Future Plans:{further_plans}</p>
       <label>Your Contribution:</label>
        <input
          type="text"
          onChange={(event) => {
            setCon_details(event.target.value);
          }}
        />
       
      <button type='button' onClick={addContribution}>Contribute</button>
  </article>
  );
}

export default Initiative;
