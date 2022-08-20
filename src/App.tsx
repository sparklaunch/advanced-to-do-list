import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <GlobalStyle />
                <Router></Router>
            </Layout>
        </Provider>
    );
}

export default App;
