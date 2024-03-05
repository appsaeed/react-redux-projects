import { getTodoStore, nextTodo } from "../assets/utils";
import { TodoFilterType, TodoType } from "../todo";
import { ADD_NEW_TODO, ALL_COMPLETE_TODO, CLEAR_COMPLETE_TODO, DELETED_TODO, SELECT_TODO_COLOR, TODO_FILTER_COLOR_CHANGE, TODO_FILTER_STATUS_CHANGED, TOGGLGE_TODO } from "./actions";


type Action = {
    type: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any
}



export const todolistReducer = (state = getTodoStore(), action: Action): TodoType[] => {

    switch (action.type) {

        //add new todo in todo list
        case ADD_NEW_TODO:

            return [
                ...state,
                {
                    id: nextTodo(state),
                    title: action.payload,
                    color: 'red',
                    completed: false,
                }
            ];

        //fetch todos from api

        case 'fetch-todos':

            return [
                ...action.payload
            ]

        //toggle todo in todo list
        case TOGGLGE_TODO:

            return state.map(todo => {

                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                }

            })

        case SELECT_TODO_COLOR:

            // eslint-disable-next-line no-case-declarations
            const { todo_id, color } = action.payload;

            return state.map(todo => {

                if (todo.id === todo_id) {
                    const todo_color = color === todo?.color ? '' : color;
                    return {
                        ...todo,
                        color: todo_color
                    };
                }

                return todo;
            })


        case DELETED_TODO:

            return state.filter(todo => todo.id !== action.payload);

        case ALL_COMPLETE_TODO:

            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            });


        case CLEAR_COMPLETE_TODO:

            return state.map(todo => {
                return { ...todo, completed: false }
            })

        default:
            return state
    }
}


/**
 * create todo filter reducer function
 * =================================================================
 * 
 * 
 */
const filterInitState: TodoFilterType = {
    status: 'all',
    colors: []
}

export const todoFilterReducer = (state = filterInitState, action: Action): TodoFilterType => {

    switch (action.type) {

        case TODO_FILTER_STATUS_CHANGED:

            return {
                ...state,
                status: action.payload
            }


        case TODO_FILTER_COLOR_CHANGE:


            if (action.payload.changedType === 'added') {
                return {
                    ...state,
                    colors: [
                        ...state.colors,
                        action.payload.color
                    ]
                }
            } else if (action.payload.changedType === 'removed') {
                return {
                    ...state,
                    colors: state.colors.filter(c => c !== action.payload.color)
                }
            }

            return state

        default:
            return state
    }
}


export default {
    todos: todolistReducer,
    filters: todoFilterReducer
}