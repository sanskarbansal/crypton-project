import { Box, Button, Card, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";

export default function Todo({ id, title, description, date, isCompleted, deleteTodo, completeTodo }) {
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <Card variant="elevation" elevation={3} style={{ width: matches ? "80%" : "95%", margin: "0 auto" }}>
            <Box display="flex" justifyContent="space-between" p={2}>
                <Typography noWrap={true} color="primary" flex={1} maxWidth="30%">
                    {title}
                </Typography>
                <Typography noWrap={true} color="primary" flex={2} maxWidth="40%">
                    {description}
                </Typography>
                <div>
                    <Button variant="contained" color="primary" onClick={() => completeTodo(id)}>
                        Completed
                    </Button>
                    <Box width="10px" display="inline-block" />
                    <Button variant="contained" color="secondary" onClick={() => deleteTodo(id)}>
                        Delete
                    </Button>
                </div>
            </Box>
        </Card>
    );
}
