// reducer là 1 cái fun dùng để cập nhật lại giá trị state trong store

const initValue = [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
]

const todoListReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                // giữ lại mảng cũ thay thêm vào 1 giá trị mới.
                // {id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
                action.payload
            ]

        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        default:
            return state

    }
}


export default todoListReducer
