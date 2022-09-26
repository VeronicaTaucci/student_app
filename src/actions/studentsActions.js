export const addStudent = (id, fName, city) => {
    return {
        type: "ADD_STUDENT",
        data: {
            id, fName, city
        }
    }
}
export const deleteStudentByID = (id) => {
    return {
        type: "DELETE_STUDENT_BY_ID",
        id: id
    }
}
export const deleteStudentByName = (fName) => {
return {
    type: "DELETE_STUDENT_BY_NAME",
    fName:fName
}
}
export const editContact = (obj) => { 
    return {
        type: 'EDIT_CONTACT',
        data:obj
    }
 }