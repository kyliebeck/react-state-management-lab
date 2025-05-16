
import './App.css'
import React, { useState } from 'react';
// src/App.jsx

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )




  const handleAddFighter = (fighter) => {
    // Check if user has enough money for selected fighter
    if (money < fighter.price) {
      alert("Not enough money to recruit this fighter");
      return;
    }
    // add selected fighter to the team state array
    setTeam([...team, fighter]);
    // remove the selected fighter from zombieFighters state array

    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
    // subtract price from money
    setMoney(money - fighter.price)

  }

  const handleRemoveFighter = (fighter) => {
    // filter out the fighter to be removed from the team
    const updatedTeam = team.filter((teamFighter) => teamFighter.id !== fighter.id)
    // add the removed fighter to the zombieFighters array
    setZombieFighters([...zombieFighters, fighter])
    // update the team state
    setTeam(updatedTeam)
    // Add money back to user currency
    setMoney(fighter.price + money)
  }

  function setTotalStrength(team) {
    let totalStrength = 0;
    for (const fighter of team) {
      totalStrength += fighter.strength;
    }
    return totalStrength;
  }
  const totalStrength = setTotalStrength(team);


  function setTotalAgility(team) {
    let totalAgility = 0;
    for (const fighter of team) {
      totalAgility += fighter.agility;
    }
    return totalAgility;
  }
  const totalAgility = setTotalAgility(team)

  return (
    <>
      <h1>Available Zombie Fighters</h1>
      <h2>My currency: {money}</h2>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id} >  {zombieFighter.name}
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility:  {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h1>My Team of Fighters</h1>

      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App


