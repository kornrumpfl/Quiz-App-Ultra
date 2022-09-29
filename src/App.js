import './App.css';
import { useState } from 'react';

import Cards from "./components/pages/Cards";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Create from './components/pages/Create';
import Profile from './components/pages/Profile';
import {nanoid} from "nanoid";

const initialCards = [
  {
    id:1234,
    question:"In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer:"Mark Hamill",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
    bookmarked:"true"          
  },
  {
    id:4321,
    question:"Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer:"Harry Potter",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
  },
  {
    id:2341,
    question:"Which former US president was nicknamed &quot;Teddy&quot; after he refused to shoot a defenseless black bear?",
    answer:"Theodore Roosevelt",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
    bookmarked:"true"
  },
  {
    id:12343,
    question:"In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer:"Mark Hamill",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
    bookmarked:"true"          
  },
  {
    id:43213,
    question:"Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer:"Harry Potter",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
    bookmarked:"false"
  },
  {
    id:23413,
    question:"Which former US president was nicknamed &quot;Teddy&quot; after he refused to shoot a defenseless black bear?",
    answer:"Theodore Roosevelt",
    tag:["#kingdomheart","#mastereraqus","#english voices"],
    bookmarked:"false"
  }
];


function App() {
  const[showClick,setShowClick]=useState(0);
  const[cards,setCards]=useState(initialCards);
  
  function appendCard(question, answer, ...tag){
    console.log(tag);
      setCards([...cards,{id:nanoid(),question:question,answer:answer,tag:tag,bookmarked:false}])
  }

  return (
    <div className="App">
      <Header />
        <main className = "app__main">
          {showClick===1?<Cards cards={cards}/>:showClick===2?<Cards cards={cards.filter(card=>{return card.bookmarked==="true"})}/>:showClick===3?<div><Create onHandleSubmit={appendCard}/></div>:showClick===4?<Profile/>:<></>}
        </main>
      <Navigation setShowClick={setShowClick} showClick={showClick}/>
      
    </div>
  );
}

export default App;
