import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import { deleteTodo, selectTodoColor, toggleCompleteTodo } from "../redux/actions";
import { TodoType } from "../todo";

export default function Todo(todo: TodoType) {
    const dispatch = useDispatch();
    const { title, id: todo_id, completed, color } = todo;

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                onClick={() => dispatch(toggleCompleteTodo(todo_id))}
                className={`rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer ${completed ? "border-green-400" : "border-gray-400"
                    } focus-within:border-green-500`}
            >
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div

                onClick={() => dispatch(toggleCompleteTodo(todo_id))}
                className={`select-none cursor-pointer flex-1 ${completed && 'line-through'}`}>{title}</div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-400 hover:bg-green-500 ${color === 'green' && 'bg-green-600'}`} onClick={() => dispatch(selectTodoColor(todo_id, 'green'))}></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-400 hover:bg-yellow-500 ${color === 'yellow' && 'bg-yellow-600'}`} onClick={() => dispatch(selectTodoColor(todo_id, 'yellow'))}></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-400 hover:bg-red-500 ${color === 'red' && 'bg-red-600'}`} onClick={() => dispatch(selectTodoColor(todo_id, 'red'))}></div>

            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => dispatch(deleteTodo(todo_id))}
            />
        </div>
    );
}
