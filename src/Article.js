import React from 'react'
import moment from 'moment' //moment js library is used to handle date format
const Article = ({title,snippet,date,length}) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}
        </span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
