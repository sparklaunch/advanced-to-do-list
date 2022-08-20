import styled from "styled-components";
import { Todo } from "../redux/modules/todo";

const TodoItemFrame = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px;
`;

function TodoItem({ id, title, content, isDone }: Todo) {
    return (
        <TodoItemFrame>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
        </TodoItemFrame>
    );
}

export default TodoItem;
