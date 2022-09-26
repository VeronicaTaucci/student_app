import students from "../data/students"

const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            students: students,
            message:''
        }
    }
    switch (action.type) {
        case "ADD_STUDENT":
            return {
                ...state,
                students: state.students.concat(action.data)
            }
        case "DELETE_STUDENT_BY_ID":
            return {
                ...state,
                students: state.students.filter(student => {
                    return student.id !== action.id
                })
    }
        case "DELETE_STUDENT_BY_NAME":
            
            return {
                ...state,
                students: state.students.filter(student => {
                        return student.fName !== action.fName
                    } )
            }
        case "EDIT_CONTACT":
            let filteredStudents = state.students.filter(student => {
                return student.id !== action.data.ID
            })
            console.log(filteredStudents);
            return {
                ...state,
                students: filteredStudents.concat(action.data)
            }
        default:
            return state

    }

}

export default reducer