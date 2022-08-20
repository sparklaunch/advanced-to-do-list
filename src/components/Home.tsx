import Form from "./Form";
import Layout from "./Layout";
import Todos from "./Todos";

function Home() {
    return (
        <Layout>
            <Form />
            <Todos />
        </Layout>
    );
}

export default Home;
