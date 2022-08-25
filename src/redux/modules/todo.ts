const CREATE_TODO = "CREATE_TODO";
const TOGGLE_DONE = "TOGGLE_DONE";
const DELETE_TODO = "DELETE_TODO";

export type Todo = {
    id: string;
    title: string;
    content: string;
    isDone: boolean;
}

export const createTodo = (payload: Todo) => {
    return {
        type: CREATE_TODO,
        payload
    }
}

export const toggleDone = (payload: Todo) => {
    return {
        type: TOGGLE_DONE,
        payload
    }
}

export const deleteTodo = (payload: Todo) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
};

interface Action {
    type: string;
    payload: Todo;
}

const todos = (state = initialState, action: Action) => {
    switch (action.type) {
        case CREATE_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_DONE:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.isDone = !todo.isDone;
                    }
                    return todo;
                })
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default todos;