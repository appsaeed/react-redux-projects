import { useSelector } from "react-redux";
import type { TodoFilterType } from "../pages/todos/todo";
import reducer from "../redux/reducer";

export default function useTodoFilters(): TodoFilterType {
    return useSelector((state: ReturnType<typeof reducer>) => state.filters);
}