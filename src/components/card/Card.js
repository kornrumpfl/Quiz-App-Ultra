import { useState } from 'react';
import './Card.css';
import Tag from "../tag/Tag";

function Card({card_data}) {
    const [showAnswer, setShowAnswer] = useState(false)
    return(
        <section className="card">
      <h2>{card_data.question}</h2>
      <button className="card__button-answer" type="button" onClick={()=>setShowAnswer(!showAnswer)}>
      {showAnswer===false?"Show answer":"Hide answer"}
      </button>
      <p className={showAnswer===true?"card__answer card__answer--active":"card__answer"}>{card_data.answer}</p>
      <ul className="card__tag-list">
      {card_data.tag.map((tag) => {
          return <Tag tag={tag} />;
        })}
      </ul>
      <div className="card__button-bookmark">
        <button className="card__bookmark" aria-label="bookmark" type="button">
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
    </section>
    );
}

export default Card;