import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";

const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .inner-container {
        border: 1px solid lightgray;
        padding: 20px;
        border-radius: 20px;
        max-width: 1200px;
        min-width: 800px;
        .id {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            button {
                border: none;
                background-color: lightgreen;
                border-radius: 10px;
                padding: 10px;
                transition: opacity 0.3s;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .title {
            margin-bottom: 20px;
        }
    }
`;

function Detail() {
    const navigator = useNavigate();
    const { todoID } = useParams();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const { id, title, content } = todos.filter(
        (todo) => todo.id === todoID
    )[0];
    const goBack = () => {
        navigator(-1);
    };
    return (
        <DetailContainer>
            <div className="inner-container">
                <div className="id">
                    <p>ID: {id}</p>
                    <button onClick={goBack}>뒤로가기</button>
                </div>
                <div className="title">
                    <h2>제목</h2>
                    <h1>{title}</h1>
                </div>
                <div className="content">
                    <h2>본문</h2>
                    <p>{content}</p>
                </div>
            </div>
        </DetailContainer>
    );
}

export default Detail;
