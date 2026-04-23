import React from 'react'

function Student(props) {
  return (
    <div className="card">
      <h3 className="head">{props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  )
}

export default Student