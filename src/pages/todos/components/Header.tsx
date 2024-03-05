import { useDispatch } from "react-redux";
import double_tick from "../assets/images/double-tick.png";
import note from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import {
    addTodo,
    allCompleted,
    clearCompleteTodo,
} from "../redux/actions";
export default function Header() {
    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(e: any) {
        e.preventDefault();

        if (e.target?.text.value) {

            dispatch(addTodo(e.target?.text.value))

            e.target.text.value = '';
        }

        return false;
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-gray-100 px-4 py-1 rounded-md"
            >
                <img src={note} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    name="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-6 h-6 bg-no-repeat bg-contain`}
                    style={{
                        backgroundImage: `url(${plus})`,
                    }}
                />
            </form>
            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    onClick={() => dispatch(allCompleted())}
                    className="flex space-x-1 cursor-pointer"
                >
                    <img className="w-4 h-4" src={double_tick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li
                    onClick={() => dispatch(clearCompleteTodo())}
                    className="cursor-pointer"
                >
                    Clear completed
                </li>
            </ul>
        </div>
    );
}
