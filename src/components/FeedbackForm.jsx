import { useState, useContext, useEffect } from "react"; 
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabledt] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true){
            setBtnDisabledt(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit])

    const handleTextChange = (event) => {
        if (text === ''){
            setBtnDisabledt(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters');
            setBtnDisabledt(true);
        } else{
            setMessage(null);
            setBtnDisabledt(false);
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

            if (feedbackEdit.edit ===true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

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
