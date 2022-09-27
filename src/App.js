import './App.css';
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";


function App() {
  return (
    <div className="App">
      <Header />
        <main className = "app__main">
          <Card question="In the Kingdom Heart series who provides the english voice for Master
							Eraqus?" answer="Mark Hamill" option1="#kingdomheart" option2="#mastereraqus" option3="#english voices"/>
          <Card question="Daniel Radcliffe became a global star in the film industry due to his
							performance in which film franchise?" answer="Harry Potter" option1="#danielradcliffe" option2="#hewhomustnotbenamed" option3="#abracadabra"/>
          <Card question="Which former US president was nicknamed &quot;Teddy&quot; after he
							refused to shoot a defenseless black bear?" answer="Theodore Roosevelt" option1="#usa" option2="#president" option3="#teddybear"/>
        </main>
      <Navigation />
    </div>
  );
}

export default App;
