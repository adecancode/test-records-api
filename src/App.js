import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [records, profiles] = useState('')

  useEffect(() => {
    getInfo();
  }, [])

  const getInfo = () => {
    axios.get(`https://api.enye.tech/v1/challenge/records`)
    .then((res) => {
      console.log(res.data.records.profiles)
      const allCards = res.data.records.profiles
      profiles(allCards)
    })
    .then(err => {
      console.log(err)
    })
  };

  return (
    <div className="App">
      <Header />
      <Card records={records} />
    </div>
  );
}

export default App;
