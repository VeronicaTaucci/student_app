import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from '../actions/studentsActions';
const AddStudents = () => {
  const [fName, setFName] = useState('')
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const allStudents = useSelector(state => state.students)
  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch(addStudent(uuidv4(), fName,city))
   }
  return (
    <>
      Add Students. Num of students at the moment: {allStudents.length}
      <br />
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='first name' onChange={e=>setFName(e.target.value)} />
      <input type="text" placeholder='city' onChange={e=>setCity(e.target.value)} />
      <button type='submit'>Add Students</button>
      </form>
    </>
  )
}

export default AddStudents
