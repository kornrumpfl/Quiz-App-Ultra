import { useState } from 'react';
import './Card.css';
import Tag from "../tag/Tag";


function Card({card_data,onDelete,onBookmark}) {

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
        <button
          className={`card__bookmark${
            card_data.bookmarked ? " card__bookmark--active" : ""
          }`}
          aria-label="bookmark"
          type="button"
          onClick={onBookmark}
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>

        <div className="card__button-trashcan">
        <button
          className="card__trashcan"
          aria-label="delete"
          type="button"
          onClick={onDelete}
        >
          <svg className="card__trashcan-icon" viewBox="0 0 24 24">
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </button>
      </div>
      </section>
    );
}

export default Card;