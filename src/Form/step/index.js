import React,  from "react";
import { TextField, Button, Box, Step } from "@mui/material";





    Step = ({data, step }) => {
  
    const {inputs, ButtonText,onSubmit} = data;

    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={onSubmit}

      >

        {
            inputs.map((input, i) => {
                const {label, type, value, valid, onChange, helperText,  validator} =  input;
                return (
                    <TextField
                    key={i} 
                    label= {label}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                   type= {type}
                    error={valid===false}
                    helperText={
                      valid === false && {helperText}
                    }
                    value={value}
                    onChange={onChange}
                     
                  />

                )
            })


        }



       
        
        <Button variant="contained" type="submit">
        {ButtonText}
        </Button>
      </Box>
    );
  
}

export default Step;
 