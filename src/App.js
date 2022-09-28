import './App.css';
import { useState } from 'react';
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

const cards = [
  {
    id:1234,
    question:"In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer:"Mark Hamill",
    tag:["#kingdomheart","#mastereraqus","#english voices"]          
  },
  {
    id:4321,
    question:"Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer:"Harry Potter",
    tag:["#danielradcliffe","#hewhomustnotbenamed","#abracadabra"]          
  },
  {
    id:2341,
    question:"Which former US president was nicknamed &quot;Teddy&quot; after he refused to shoot a defenseless black bear?",
    answer:"Theodore Roosevelt",
    tag:["#usa","#president","#teddybear"]          
  }
];

function App() {
  const[showClick,setShowClick]=useState(0);
  console.log(showClick);
  console.log(setShowClick);

  return (
    <div className="App">
      <Header />
        <main className = "app__main">
        {cards.map((card) => {
          return <Card key={card.id} card_data={card} />;
        })}
        </main>
      <Navigation setShowClick={setShowClick} showClick={showClick}/>
    </div>
  );
}

export default App;
