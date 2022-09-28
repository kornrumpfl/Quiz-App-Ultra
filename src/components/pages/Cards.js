import Card from "../card/Card";


function Cards({cards}){
    return(
        <>
            {cards.map(card => {
                return (<Card key={card.id} card_data={card} />);
            })}
        </>
);}
export default Cards;


