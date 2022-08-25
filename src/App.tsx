import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Router />
        </Provider>
    );
}

export default App;
