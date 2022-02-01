import {
  Button as MuiButton,
  Stack,
  TextField as MuiTextField,
  inputLabelClasses,
  CircularProgress
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { Controller, useController } from "react-hook-form";
import PropTypes from "prop-types";
const Button = (props) => (
  <MuiButton {...props} variant="contained" size="large" />
);
const TextField = styled(({ name, control, rules, defaultValue, ...rest }) => {
  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    defaultValue,
    rules
  });
  return (
    <MuiTextField
      {...rest}
      inputRef={ref}
      {...{ name, value, onChange, onBlur }}
      error={invalid}
      helperText={invalid && error.message}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
})(({ theme }) => {
  return {
    [`& .${inputLabelClasses.root}`]: {
      fontSize: "1.2rem"
    }
    // '& .Mui-focused':{
    //   color: theme.palette.secondary.light
    // }
  };
});

function WithMui({ control, defaultValues, submit, reset }) {
  return (
    <>
      <TextField
        name="name"
        control={control}
        defaultValue={defaultValues.name}
        label="Name"
        required
        rules={{
          required: "Name is required"
        }}
      />
      <TextField
        name="lastName"
        control={control}
        defaultValue={defaultValues.lastName}
        label="Last Name"
      />
      <TextField
        label="E-mail"
        required
        name="mail"
        control={control}
        defaultValue={defaultValues.mail}
        rules={{
          required: "E-mail is required",
          pattern: {
            value: /^[^\.]\S{4,30}@\S+\.\S{2,}$/i, //eslint-disable-line
            message: "Wrong format"
          }
        }}
      />
      <Stack direction="row" spacing={4}>
        <Button children="reset" onClick={() => reset()} />
        <Controller
          control={control}
          render={({ formState: { isSubmitting } }) => (
            <Button
              children="send data"
              onClick={submit}
              endIcon={
                isSubmitting ? (
                  <CircularProgress color="inherit" size={18} />
                ) : (
                  <SendIcon />
                )
              }
            />
          )}
        />
      </Stack>
    </>
  );
}
WithMui.propTypes = {
  control: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  defaultValues: PropTypes.object.isRequired
};
export default WithMui;
