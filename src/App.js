import React from 'react';
import Card from "./componentes/card"
import CardInfo from "./componentes/Card-Info"
class App extends React.Component {
  render() {
    
    const cardsinfo = CardInfo.map( card => <Card key={card.id} img={card.img} text={card.text} alt={card.alt}/>)
    return (
      <div className="Body-div">
        {cardsinfo}
      </div>
    )
  }
  
}

export default App;
