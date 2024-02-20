import React, { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";


const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deletefeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    
  }

  return  (
    <>
      <Header/>
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deletefeedback}/>
      </div>
    </>
  )
}

export default App;
