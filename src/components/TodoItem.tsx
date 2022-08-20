import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, markUndone, Todo } from "../redux/modules/todo";
import { markDone } from "../redux/modules/todo";

const TodoItemFrame = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px;
    .content {
        margin-bottom: 20px;
    }
    .detail-link {
        margin-bottom: 10px;
    }
    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        button {
            border: none;
            padding: 10px;
            border-radius: 10px;
            transition: opacity 0.3s;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
        .mark-button {
            background-color: lightblue;
        }
        .unmark-button {
            background-color: lightgoldenrodyellow;
        }
        .delete-button {
            background-color: lightcoral;
        }
    }
`;

function TodoItem({ id, title, content, isDone }: Todo) {
    const dispatch = useDispatch();
    const markHandler = () => {
        dispatch(
            markDone({
                id,
                title,
                content,
                isDone
            })
        );
    };
    const unmarkHandler = () => {
        dispatch(
            markUndone({
                id,
                title,
                content,
                isDone
            })
        );
    };
    const deleteHandler = () => {
        dispatch(
            deleteTodo({
                id,
                title,
                content,
                isDone
            })
        );
    };
    return (
        <TodoItemFrame>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="detail-link">
                <Link to={`/${id}`}>
                    <p>상세 정보 보기</p>
                </Link>
            </div>
            <div className="buttons">
                {isDone ? (
                    <button className="unmark-button" onClick={unmarkHandler}>
                        제거
                    </button>
                ) : (
                    <button className="mark-button" onClick={markHandler}>
                        완료
                    </button>
                )}
                <button className="delete-button" onClick={deleteHandler}>
                    삭제
                </button>
            </div>
        </TodoItemFrame>
    );
}

export default TodoItem;
