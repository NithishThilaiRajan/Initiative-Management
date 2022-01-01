
import React  from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Contribute = (props) => {
 
    
    const {con_id,Init_id,emp_id,emp_name,con_details} =props;

    
    const userDetails = useSelector((state) => state.userInfo);
  
     const loggedId=userDetails.id;
  // console.log(loggedName);



   // const {con_id,Init_Id,emp_id,con_details} =props;
   // const [con_details,setCon_details]=useState("");
    const applause = () => {
  
      Axios.post("http://localhost:3001/addapplause", {
        emp_id: loggedId,
      //  Init_id: Init_Id,
        con_id: con_id,
        }).then(() => {
        console.log("Applause Registered Successfully..");
      });
    };

    return(
    
  <article className='initiative'>
      
       <h1>Contribution Details:{con_details}</h1>
       <h4>By: {emp_name}</h4>
      
      
       
      <button type='button' onClick={applause}>Applause</button>
  </article>
  );
}

export default Contribute;
