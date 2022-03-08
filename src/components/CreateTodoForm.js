import { Grid, Typography, Card, TextField, Box, Button } from "@mui/material";

import React, { useState } from "react";

export default function CreateTodoForm({ handleSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    // const [title, setTitle] = useState("");

    return (
        <Box sx={{ width: "80%" }} display="flex" justifyContent="center" marginX="auto" marginTop={4}>
            <Card variant="elevation" elevation={4} style={{ width: "100%" }}>
                <Grid width="100%" container spacing={2} justifyContent="center" padding={4}>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h5" fontWeight={800} color="#003979">
                            Task Manager
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Task Title"
                            value={title}
                            variant="outlined"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="outlined-basic"
                            label="Task Description"
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            variant="outlined"
                            type="date"
                            shrink="true"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant="outlined" onClick={() => handleSubmit({ title, description, date })}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
