import React from "react";
import MagicCat from "../components/MagicCat";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { useFormik } from "formik";

const CatForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validationSchema: logInSchema,
  });
  return (
    <MagicCat title="Sign up">
      <TextField
        placeholder="First Name"
        variant="outlined"
        name="firstName"
        id="firstName"
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
        placeholder="Last Name"
        name="lastName"
        id="lastName"
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

      <Button variant="contained" color="primary" fullWidth type="submit">
        Sign up
      </Button>
    </MagicCat>
  );
};

export default CatForm;
