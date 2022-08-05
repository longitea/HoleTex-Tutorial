// reducer là 1 cái fun dùng để cập nhật lại giá trị state trong store

const initValue = {
    filters : {
        name : '',
        status: 'All',
        priority: []
    },
    todoList : [
       {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
       {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
       {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low'}
    ]
}

const rootReducer = (state = initValue, action) => {
    switch(action.type) {
        case 'todoList/addTodo':
            return {
                // coppy lại state cũ
                ...state, 

                // thay thế lại giá trị mới
                todoList : [
                    ...state.todoList,
                    // giữ lại mảng cũ thay thêm vào 1 giá trị mới.
                    // {id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
                    action.payload
                ]
            }
        default:
            return state
            
    }
}


export default rootReducer
