import { Box } from "@mui/material";
import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo, completeTodo }) {
    return (
        <Box display="flex" flexDirection="column" rowGap={2} mb={2}>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            ))}
        </Box>
    );
}
