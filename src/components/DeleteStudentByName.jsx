import React,{useState,useEffect} from 'react'

import { deleteStudentByName } from '../actions/studentsActions'
import { useDispatch, useSelector } from "react-redux";

const DeleteStudentByName = () => {
const [fName, setFName] = useState('')
  let allStudents = useSelector((state) => state)
  const [message, setMessage] = useState(false)
  const dispatch = useDispatch()  

  
  useEffect(() => {
    console.log(allStudents);
  }, [fName])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (allStudents.students.filter(e => e.fName == fName).length > 0) {
      dispatch(deleteStudentByName(fName))
      setMessage(false)
    } else {
      setMessage(true)
    }
    
  }
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' onChange={(e)=>setFName(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
      {allStudents.message}
      <ul>
        {allStudents.students.map(student => {
          return <li key={student.id}>{student.fName} <br />{student.city}
          </li>
        })}
      </ul>
      {message ? <div>no match</div> : '' }
      
    </>
  )
}

export default DeleteStudentByName



