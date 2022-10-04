import '../pages/Create.css'
import './Icon.css';
import {useNavigate} from "react-router-dom"

function Create({onHandleSubmit}){
    const navigate = useNavigate();

    function onSubmit(event){
        event.preventDefault();
        const form = event.target;
        const {question} = form.elements;
        const {answer} = form.elements;
        const {tag1} = form.elements;
        const {tag2} = form.elements;
        const {tag3} = form.elements;
        onHandleSubmit(question.value,answer.value,tag1.value,tag2.value,tag3.value);
        navigate("/");
        form.reset();
    }
    return(

        <form onSubmit = {onSubmit} className="form" aria-label="Add a new question">
            <label htmlFor="question">Your question:</label>
                        <textarea
                            id="question"
                            rows="7"
                            name="question"
                            maxLength="150"
                        ></textarea>
                        <label htmlFor="answer">Your answer:</label>
                        <textarea
                            id="answer"
                            rows="7"
                            name="answer"
                        ></textarea>
                        <label htmlFor="tag">Tag:</label>
                        <input id="tag1" type="text" name="tag1" />
                        <input id="tag2" type="text" name="tag2" />
                        <input id="tag3" type="text" name="tag3" />
                        <button className="form__submit-button" type="submit">Submit</button>
        </form>
    );
}
export default Create;