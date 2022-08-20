import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    justify-content: center;
`;

const LayoutBox = styled.div`
    min-width: 800px;
    max-width: 1200px;
    flex-grow: 1;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Header = styled.div`
    background-image: url("/assets/Background.jpg");
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10px;
    h1 {
        color: white;
        font-size: 3rem;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    }
`;

function Layout({ children }: { children: ReactNode }) {
    return (
        <Frame>
            <LayoutBox>
                <Link to="/">
                    <Header>
                        <h1>업그레이드! Todo List</h1>
                    </Header>
                </Link>
                {children}
            </LayoutBox>
        </Frame>
    );
}

export default Layout;
