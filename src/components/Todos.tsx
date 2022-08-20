import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";
import TodoItem from "./TodoItem";

const TodoFrame = styled.div`
    .working .working-todos,
    .done .done-todos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, auto));
        gap: 10px;
    }
    .working,
    .done {
        margin-bottom: 20px;
    }
    .working h2,
    .done h2 {
        margin-bottom: 10px;
    }
`;

function Todos() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    return (
        <TodoFrame>
            <div className="working">
                <h2>미완료</h2>
                <div className="working-todos">
                    {todos
                        .filter((todo) => !todo.isDone)
                        .map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                </div>
            </div>
            <div className="done">
                <h2>완료</h2>
                <div className="done-todos">
                    {todos
                        .filter((todo) => todo.isDone)
                        .map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                </div>
            </div>
        </TodoFrame>
    );
}

export default Todos;
