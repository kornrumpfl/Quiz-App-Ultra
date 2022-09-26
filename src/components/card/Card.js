import React from "react";
import '../card/Card.css';

export default function Card() {
    return(
        <li className="card-list__item">
            <article class="card">
                <h2 class="card__question">
                    In the Kingdom Heart series who provides the english voice for Master Eraqus?
                </h2>
					<button class="card__button-answer" type="button" data-js="answer-button">
						Show answer
					</button>
					<p class="card__answer" data-js="answer">Mark Hamill</p>
					<ul class="card__tag-list">
						<li class="card__tag-list-item">#kingdomheart</li>
						<li class="card__tag-list-item">#mastereraqus</li>
						<li class="card__tag-list-item">#english voices</li>
					</ul>
					<div class="card__button-bookmark">
						<button
							class="bookmark"
							aria-label="bookmark"
							type="button"
							data-js="bookmark-button"
						>
							<svg
								class="bookmark__icon"
								xmlns="http://www.w3.org/2000/svg"
								viewbox="0 0 24 24"
							>
								<path
								d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
								/>
							</svg>
						</button>
					</div>
			</article>	
        </li>
    );
}
