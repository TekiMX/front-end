import { useState, useEffect } from 'react'
import IssuesList from './components/IssuesList'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])

  // First issues render
  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        setIssues(results)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1 className='title'> REACT Issues list</h1>
        <div>
          {
            issues.map(issue => (
              <IssuesList
                id={issue.number}
                title={issue.title}
                username={issue.user.login}
                url={issue.html_url}
                key={issue.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
