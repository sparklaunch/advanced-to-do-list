import styled from "styled-components";

const ErrorMessage = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function NotFound() {
    return (
        <ErrorMessage>
            <h1>404 Not Found</h1>
        </ErrorMessage>
    );
}

export default NotFound;
