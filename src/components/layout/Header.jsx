
import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/display_students"> Display Students</Link></li>
        <li> <Link to="/add_students"> Add Students</Link></li>
        <li> <Link to="/add_new_student">  Add New Student</Link></li>
        <li> <Link to="/delete_student_by_id"> Delete Student By ID</Link></li>
        <li> <Link to="/update"> Update Student List</Link></li>
        <li> <Link to="/delete_student_by_name"> Delete Student By Name</Link></li>
        <li> <Link to="/sort_student_list"> Sort Student List</Link></li>
        <li> <Link to="/add_inorder"> Add Student In Order</Link></li>
        <li> <Link to="/search_student"> Search Student</Link></li>
        
    </ul>
  )
}

export default Header
