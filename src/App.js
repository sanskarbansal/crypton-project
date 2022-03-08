import axios from "axios";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm";

function App() {
    const handleSubmit = (data) => {
        axios
            .post("/todos", {
                ...data,
                isCompleted: false,
            })
            .then(({ data }) => {
                console.log(data);
            });
    };
    return (
        <div className="App">
            <CreateTodoForm handleSubmit={handleSubmit} />
        </div>
    );
}

export default App;
