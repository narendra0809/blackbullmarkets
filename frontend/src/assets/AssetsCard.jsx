import React from 'react'
import './AssetsCard.css'

function AssetsCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.img} alt={props.title} height="50" width="50" />
      </div>
      <div className="card-footer">
        <h2 className="title">{props.title}</h2>
      <p className="description">{props.des}</p>
      </div>
    </div>
  )
}

export default AssetsCard
