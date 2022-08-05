import useSelection from "antd/lib/table/hooks/useSelection"
import { useSelector } from "react-redux"
import { createSelector } from "reselect"

// export const todoListSelector = state => {
//     const todosRemaining = state.todoList.filter(todo => {
//         return todo.name.includes(state.filters.search)
//     })
//     return todosRemaining
// }

export const todoListSelector = state => state.todoList
export const searchTextSelector = state => state.filters.search
export const filterStatusSelector = state => state.filters.status
export const filtePrioritiesSelector = state => state.filters.priority

export const todosRemaining = createSelector(
    todoListSelector, 
    searchTextSelector, 
    filterStatusSelector,
    filtePrioritiesSelector,
    (todoList, search, status, priorities) => {
    return todoList.filter(todo => {
        if(status === 'All'){
            return priorities.length
            ? todo.name.includes(search) && priorities.includes(todo.priority)
            : todo.name.includes(search)
        }

        return (
            todo.name.includes(search) &&
            (status !== 'All' && status === 'Completed'
            ? todo.completed
            : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
        )
    }) 
})


