import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm";
import TodoList from "./components/TodoList";

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#003979",
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#D60707",
        },
    },
});

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("/todos?isCompleted=false").then(({ data }) => {
            setTodos(data);
        });
    }, []);

    const handleSubmit = (data) => {
        axios
            .post("/todos", {
                ...data,
                isCompleted: false,
            })
            .then(({ data }) => {
                setTodos([...todos, data]);
            });
    };
    const deleteTodo = (todoId) => {
        axios.delete(`/todos/${todoId}`).then((resp) => {
            setTodos(todos.filter(({ id }) => todoId !== id));
        });
    };
    const completeTodo = (todoId) => {
        axios
            .patch(`/todos/${todoId}`, {
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
