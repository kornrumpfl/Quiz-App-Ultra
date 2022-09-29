import Card from "../card/Card";


function Cards({cards,onDelete,onBookmark}){
    return(
        <>
            {cards.map(card => {
                return (<Card key={card.id} card_data={card} 
                    onDelete={() => onDelete(card.id)}
                    onBookmark={() => onBookmark(card.id)}/>);
            })}
        </>
);}
export default Cards;