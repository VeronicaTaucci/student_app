
import React from 'react'
import { useSelector } from "react-redux";
const DisplayStudents = () => {
  let allStudents = useSelector((state) => state.students)
  console.log(allStudents)
    //display the current students
  return (
    <>
      <ul>
      {allStudents.map(student => {
        return <li key={student.id}>{student.fName} <br />{student.city} </li>
      })}
      </ul>
    </>
  )
}

export default DisplayStudents
