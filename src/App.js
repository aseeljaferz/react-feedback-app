import { BrowserRouter as Router,  Routes ,Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.js";

const App = () => {

  return  (
    <>
      <FeedbackProvider>
        <Router>
          <Header/>
          <div className="container">
            <Routes>
                <Route exact path="/" element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>
              </Route>

              <Route path="/about" element={<AboutPage/>} />
            </Routes>

            <AboutIconLink/>
          </div>
        </Router>
      </FeedbackProvider>
    </>
  )
}

export default App;
