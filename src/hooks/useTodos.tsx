import { useSelector } from "react-redux";
import type { TodoType } from "../pages/todos/todo";
import reducer from "../redux/reducer";

export default function useTodos(): TodoType[] {
    return useSelector((state: ReturnType<typeof reducer>) => state.todos);
}
