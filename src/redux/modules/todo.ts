const CREATE_TODO = "CREATE_TODO";

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
        default:
            return state;
    }
}

export default todos;