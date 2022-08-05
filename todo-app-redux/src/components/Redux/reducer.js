// rootReducer này sẽ quản lý các reducer con

import { combineReducers } from "redux"
import filterReducer from "../Filters/FilterSlice"
import todoListReducer from "../TodoList/TodoSlice"

// chỗ này nó bưng 2 thằng reducer con kia lên
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         _todoList: todoListReducer(state.todoList, action),
//     }
            
// }


// sử dụng combine dễ hiểu hơn -> chức năng cũng tương tự như thằng ở trên


const rootReducer = combineReducers({
    filters : filterReducer,
    todoList: todoListReducer
})

export default rootReducer
