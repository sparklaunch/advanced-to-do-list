const CREATE_TODO = "CREATE_TODO";
const MARK_DONE = "MARK_DONE";
const MARK_UNDONE = "MARK_UNDONE";
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

export const markDone = (payload: Todo) => {
    return {
        type: MARK_DONE,
        payload
    }
}

export const markUndone = (payload: Todo) => {
    return {
        type: MARK_UNDONE,
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
        case MARK_DONE:
            const doneCopy = [...state.todos];
            doneCopy.filter(todo => todo.id === action.payload.id)[0].isDone = true;
            return {
                todos: doneCopy
            }
        case MARK_UNDONE:
            const undoneCopy = [...state.todos];
            undoneCopy.filter(todo => todo.id === action.payload.id)[0].isDone = false;
            return {
                todos: undoneCopy
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