import { DialogContent, DialogTitle, FormGroup, TextField } from "@mui/material";
import { forwardRef } from "react";
const EditCard = forwardRef((props, ref) => (
    <>
        <DialogTitle>Edit Form</DialogTitle>
        <DialogContent>
            <FormGroup sx={{ pt: "1rem", gap: '1rem' }} ref={ref}>
                <TextField
                    helperText="*Please enter name of the video"
                    label="name"
                    required
                />
                <TextField
                    helperText="*Please enter the link of the video"
                    label="link"
                    required
                />
            </FormGroup>
        </DialogContent>
    </>
))

export default EditCard