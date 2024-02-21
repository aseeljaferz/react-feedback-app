import React, { useState } from "react";
import { BrowserRouter as Router,  Routes ,Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";


const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const deletefeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  

  return  (
    <>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
              <Route exact path="/" element={
              <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback}
                  handleDelete={deletefeedback}/>
              </>
            }>
              
            </Route>
            <Route path="/about" element={<AboutPage/>} />
          </Routes>

          <AboutIconLink/>
        </div>
      </Router>
    </>
  )
}

export default App;
