
import { React, useState } from 'react'
import { Box, TextField, Button, Typography } from "@mui/material"

export const InputField = ({ removeComponent, addComponent, id, standard }) => {
    return (
        <Box id={id}>
            <Typography>{id}</Typography>
            <TextField variant="filled" onBlur={(e) => standard.push(e.target.value)} />
            <Button onClick={() => removeComponent(id)}>-</Button>
        </Box>
    )
}


