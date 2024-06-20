import React from 'react'

const IssuesList = ({ id, title, username, url }) => {
  return (
    <div className='issue-container'>
      <li className='issue-list'>
        <div className='issue-id'>
          <p><b>{id}</b></p>
        </div>
        <div className='issue-title'>
          <p>{title}</p>
        </div>
        <div className='issue-username'>
          <p>{username}</p>
        </div>
        <div className='issue-url'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >
            external link
          </a>
        </div>
      </li>
    </div>
  )
}

export default IssuesList
