import { useParams } from "react-router-dom";

function Detail() {
    const { todoID } = useParams();
    return <div>{todoID}</div>;
}

export default Detail;
