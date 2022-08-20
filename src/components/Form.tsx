import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/modules/todo";
import { v4 as uuidV4 } from "uuid";

const FormFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .left {
        display: flex;
        .field {
            margin-right: 30px;
            label {
                font-size: 1.2rem;
                margin-right: 10px;
            }
            input {
                border: 1px solid gray;
                border-radius: 10px;
                padding: 10px;
                font-size: 1.2rem;
            }
            &:last-child {
                input {
                    width: 500px;
                }
            }
        }
    }
    .right {
        button {
            border-radius: 10px;
            border: none;
            padding: 20px;
            font-size: 1.2rem;
            transition: opacity 0.3s;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const [content, setContent] = useState("");
    const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };
    const submitHandler = () => {
        if (title.length !== 0 && content.length !== 0) {
            const uuid = uuidV4();
            dispatch(
                createTodo({
                    id: uuid,
                    title,
                    content,
                    isDone: false
                })
            );
            setTitle("");
            setContent("");
        }
    };
    return (
        <FormFrame>
            <div className="left">
                <div className="field">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="content">내용</label>
                    <input
                        type="text"
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
            </div>
            <div className="right">
                <button onClick={submitHandler}>제출하기</button>
            </div>
        </FormFrame>
    );
};

export default Form;
