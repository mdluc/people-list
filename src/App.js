import React, { useState,useEffect } from 'react';
import StaffPage from './components/StaffPage/StaffPage';

const url="https://random-data-api.com/api/users/random_user?size=10";

function App() {
  const [people,setPeople]=useState([]);
  

  const fetchPeople = async () =>{
    try{
      const response = await fetch(url);
      const people = await response.json();
      setPeople(people);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPeople();
  }, [])

  return <StaffPage people={people} />;
}

export default App;
