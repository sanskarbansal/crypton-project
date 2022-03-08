import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm";
import TodoList from "./components/TodoList";

const getUrl = (endpoint) => `https://my-json-server.typicode.com/sanskarbansal/crypton-project${endpoint}`;

const theme = createTheme({
    palette: {
        primary: {
            main: "#003979",
        },
        secondary: {
            main: "#D60707",
        },
    },
});

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get(getUrl("/todos?isCompleted=false")).then(({ data }) => {
            setTodos(data);
        });
    }, []);

    const handleSubmit = (data) => {
        axios
            .post(getUrl("/todos"), {
                ...data,
                isCompleted: false,
            })
            .then(({ data }) => {
                setTodos([...todos, data]);
            });
    };
    const deleteTodo = (todoId) => {
        axios.delete(getUrl(`/todos/${todoId}`)).then((resp) => {
            setTodos(todos.filter(({ id }) => todoId !== id));
        });
    };
    const completeTodo = (todoId) => {
        axios
            .patch(getUrl(`/todos/${todoId}`), {
                isCompleted: true,
            })
            .then(({ data }) => {
                setTodos(todos.filter(({ id }) => id !== todoId));
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CreateTodoForm handleSubmit={handleSubmit} />
            {todos.length && (
                <Typography my={4} textAlign="center" variant="h5" fontWeight={800} color="primary">
                    Your Tasks
                </Typography>
            )}
            <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        </ThemeProvider>
    );
}

export default App;
