import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddItemInOrder from './components/AddItemInOrder'
import AddNewStudent from './components/AddNewStudent'
import AddStudents from './components/AddStudents'
import DeleteStudentByID from './components/DeleteStudentByID'
import DeleteStudentByName from './components/DeleteStudentByName'
import DisplayStudents from './components/DisplayStudents'
import SearchStudent from './components/SearchStudent'
import SortStudentList from './components/SortStudentList'
import UpdateStudent from './components/UpdateStudent'



import { createStore } from 'redux';
import reducer from './store/reducer.js';
import { Provider } from 'react-redux';

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/add_inorder" element={<AddItemInOrder />}/>
          <Route path="/add_new_student" element={<AddNewStudent />}/>
          <Route path="/delete_student_by_id" element={<DeleteStudentByID />}/>
          <Route path="/delete_student_by_name" element={<DeleteStudentByName />}/>
          <Route path="/display_students" element={<DisplayStudents />}/>
          <Route path="/search_student" element={<SearchStudent />}/>
          <Route path="/sort_student_list" element={<SortStudentList />}/>
          <Route path="/add_students" element={<AddStudents />}/>
          <Route path="/update" element={<UpdateStudent />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

