import { TodoType } from "../todo";



//get todo from local storage 
export function getTodoStore(): TodoType[] {
    try {
        const data = JSON.parse(localStorage.getItem('todos') || "{}");
        if (data && typeof data === 'object' && Array.isArray(data)) return data;
    } catch (error) {
        return [];
    }

    return [];
}


export const nextTodo = (arr: TodoType[]) => {
    const maxid = arr.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxid + 1;
}

