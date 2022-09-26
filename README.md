# Redux 101 Homework

## Setup Redux
- import redux and react-redux to your application
- import createStore from redux (note, a reducer has to be passed to this function, and it hasn't been created yet)
- import Provider from react-redux
- create redux store in the index.js file 
- wrap your application with the Provider function 
- pass the store to the Provider via the store props

## Setup folder structure

In the src folder, create a `actions` and `reducers` folder 

## Setup reducer 
- In the reducers folder, create a new file called reducer.js 
- create a reducer function that creates an initial state for the following keys:
    - an array of students that is initially empty
    - an integer for count that is initially 0

## Display all students
- In the `DisplayStudents` components, write logic to display all of the students in the global state. This should initially be an empty list
- Write logic to show the count from the global state. This value should initially be zero.

## Add Students

- import the data from data/students.js 
- add this data to the global students state 
- write logic to keep track of how many students are in the student array

## Add New Student 

- create a form in `AddNewStudent.jsx` to add a new student to the new students array in global state.

## Delete Student By ID

- In the `DeleteStudentByID` component, list out all of the students names using an anchor tag.  
- Set the onClick property of the anchor tag equal to a dispatched action that will delete the student from the student list when the link is clicked.  
- The dispatched action should use the userID to identify which student needs to be deleted.

## Update Student List

Don't do this yet. 

## Delete Student By Name

- Create an input field inside of a form. 
- Allow the user to type a name of a student. 
- When the form is submitted, grab the name that was given and remove the name of the student from the list.  
- If no name was found, display an error message that no name was found in the list. 

## Sort Student List

- Create a button in the Student `SortStudentList` component.  
- When a user click on the button, display the sorted list of users.
- Create another button.  When the user clicks on this list, sort by city

## Add Student In Order 

- In the `AddItemInOrder` component. create a new piece of state inside of your reducer for sorted students. 
- Create a form with an input field for student and city.  
- When the user clicks on the button, insert the user in sorted order.  

## Search Student

- Create a form in the `SearchStudent` component that allows a user to enter a name.
- Search through the global students list to see if the student is there.  
- If not, display a message to the user that no user by that name exists.

**Note** You will have to create a new piece of global state to store the user that was found in the search result. Name this piece of state `searchResult` with a data type of an object.   

### Bonus 

- Create a new piece of global state called `searchHistory` in your reducer with a datatype of an array. 
- Keep the last 3 search results in this array.  
- Each element in the array should be an object representing the student that was found in the search result.  
- When a user submits a form to find a new student, your reducer should first look inside of the `searchHistory` global state.  
- If the search results are in the list, then update the  `searchResult` global state with the new user information. 
- If the user wasn't found in the `searchHistory` then search through the `students` list and find the student.  
- If a student is found, update the `searchHistory` and the `searchResult` global state. **Remember** that the `searchHistory` should only keep upto 3 search results. 

