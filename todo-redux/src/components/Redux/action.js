// Đầu tiên chúng ta định nghĩa 1 action là 1 object gửi lên reducer để lên reducer
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 5, name: 'Learn Football', completed: false, priority: 'Medium' }
// }

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

// action creators => function dùng để trả về 1 action
//  mục đích để không phải viết các đoạn code lặp đi lặp lại mà chỉ cần gọi đến fn này thôi.