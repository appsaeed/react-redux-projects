export const ADD_NEW_TODO = 'todos_add_todo';


export const SELECT_TODO_COLOR = 'todos_SELECT_TODO_COLOR';

export const DELETED_TODO = 'todos_DELETED_TODO ';

export const TOGGLGE_TODO = 'todos/toggle_todo';

//todo filter
export const ALL_COMPLETE_TODO = 'todos/ALL_COMPLETE_TODO';

export const CLEAR_COMPLETE_TODO = 'todos/clear_completed';

export const TODO_FILTER_BY_COLOR = 'TODO_FILTER_BY_COLOR'

export const TODO_FILTER_COLOR_CHANGE = 'todo/filter/COLOR_Changed'

export const TODO_FILTER_STATUS_CHANGED = 'todo/filter/STATUS_Changed'



export const addTodo = (value: string) => {
    return {
        type: ADD_NEW_TODO,
        payload: value
    }
}

export const toggleCompleteTodo = (id: number) => {
    return {
        type: TOGGLGE_TODO,
        payload: id,
    }
}

export const selectTodoColor = (todo_id: number, color: string) => {
    return {
        type: SELECT_TODO_COLOR,
        payload: {
            todo_id,
            color
        }
    }
}

export const deleteTodo = (todoid: number) => {
    return {
        type: DELETED_TODO,
        payload: todoid
    }
}

export const allCompleted = () => {
    return {
        type: ALL_COMPLETE_TODO
    }
}

export const clearCompleteTodo = () => {
    return {
        type: CLEAR_COMPLETE_TODO
    }
}


export const colorChanged = (color: string, changedType: string) => {

    return {
        type: TODO_FILTER_COLOR_CHANGE,
        payload: {
            color: color,
            changedType
        }
    }
}

export const statusChanged = (status: 'all' | 'complete' | 'in_complete') => {
    return {
        type: TODO_FILTER_STATUS_CHANGED,
        payload: status
    }
}