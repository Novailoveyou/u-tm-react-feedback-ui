import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './components/context/FeedbackContext'
import FeedbackData from './data/FeedbackData'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App
