



import React  from 'react';

// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Initiative from './initiative';
import { useState } from 'react';
import Axios from 'axios';
import 'C:/Users/HP/Desktop/InitiativeManagement/client/src/index.css';
import { useSelector } from 'react-redux';
function InitiativeSection() {

    const [InitiativeList, setInitiativeList] = useState([]);
 



const getInitiative = () => {
    Axios.get("http://localhost:3001/initiatives").then((response) => {
        setInitiativeList(response.data);
      console.log(response.data);
    });
  };
return(
    <div>
        <button onClick={getInitiative}>Show Upcoming Initiatives</button><section className='initiativelist'>
        {InitiativeList.map((initiative) => {
            return <Initiative {...initiative}></Initiative>;
        })}
    </section>
    </div>
);
}

export default InitiativeSection;
