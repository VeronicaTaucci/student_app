import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {editContact} from '../actions/studentsActions'
const UpdateStudent = () => {
  const [city, setCity] = useState('')
  const [fName, setFName] = useState('')
  const [ID, setID] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const studentsList = useSelector(state => state.students)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    let editedContact = {
      ID,
      city,
      fName
    }
    dispatch(editContact(editedContact))
    console.log(editedContact);
    setCity('')
    setFName('')
    setID('')
    setIsEdit(false)
  }

  const handleEdit = (student) => {
    console.log(student)
    setID(student.student.id)
    setIsEdit(true)
  }
  return (
    <>
      {isEdit ? <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' onChange={(e) => setFName(e.target.value)} ></input>
        <input type='text' onChange={(e) => setCity(e.target.value)} ></input>
        <button variant="primary" type="submit">
          Submit
        </button>
      </form> : ''}
      <ul>
        {studentsList.map(student => {
          return <li key={student.id}>{student.fName} <br />{student.city}
            <a href='#' onClick={() => handleEdit({student})}>edit</a>
            
          </li>
          
        })}
      </ul> 
      
    </>
  )
}

export default UpdateStudent
