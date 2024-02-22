import { useState, useContext } from "react"; 
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setbtnDisabledt] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback } = useContext(FeedbackContext);

    const handleTextChange = (event) => {
        if (text === ''){
            setbtnDisabledt(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters');
            setbtnDisabledt(true);
        } else{
            setMessage(null);
            setbtnDisabledt(false);
        }

        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }

            addFeedback(newFeedback);

            setText('');
        }
    }

  return (  
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text"      placeholder="Write a review" value={text}
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;
