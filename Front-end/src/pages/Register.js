import React from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import MagicCat from "../components/MagicCat";
import { registerAction } from "../reducers/auth/authActions";

const Register = () => {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
    // validationSchema: logInSchema,
  });
  return (
    <MagicCat title="Sign up">
      <TextField
        placeholder="First Name"
        variant="outlined"
        name="name"
        id="firstName"
        value={values.name}
        onChange={handleChange}
        style={{ width: "100%", color: "grey", margin: "15px 0px" }}
        color="primary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BorderColorOutlinedIcon fontSize="small" color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        placeholder="Username"
        name="username"
        id="username"
        value={values.username}
        onChange={handleChange}
        variant="outlined"
        style={{ width: "100%", color: "grey", margin: "15px 0px" }}
        color="primary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BorderColorOutlinedIcon fontSize="small" color="primary" />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        placeholder="E-mail"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        variant="outlined"
        style={{
          width: "100%",
          color: "grey",
          margin: "15px 0px",
          outline: "none",
        }}
        color="primary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon fontSize="small" color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        placeholder="Password"
        name="password"
        id="password"
        value={values.password}
        onChange={handleChange}
        variant="outlined"
        type="password"
        style={{ width: "100%", color: "grey", margin: "15px 0px" }}
        color="primary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyOutlinedIcon fontSize="small" color="primary" />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Sign up
      </Button>
    </MagicCat>
  );
};

export default Register;
