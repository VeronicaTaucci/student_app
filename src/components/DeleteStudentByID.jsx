import React from 'react'
import {deleteStudentByID} from '../actions/studentsActions'
import { useDispatch, useSelector } from "react-redux";
const DeleteStudentByID = () => {

  let allStudents = useSelector((state) => state.students)
  const dispatch = useDispatch()
  return (
    <>
      <ul>
        {allStudents.map(student => {
          return <li key={student.id}>{student.fName} <br />{student.city}
            <a href="#" onClick={()=> dispatch(deleteStudentByID(student.id))}>X</a> 
            </li>
        })}
      </ul>
    </>
  )
}

export default DeleteStudentByID
