import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/auth/authActions";
import MagicCat from "../components/MagicCat";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { useFormik } from "formik";

const CatForm = () => {
  const dispatach = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatach(loginAction(values));
    },
    // validationSchema: logInSchema,
  });
  return (
    <MagicCat title="Members Log In">
      <TextField
        placeholder="E-mail"
        name="email"
        id="email"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
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
        Log in
      </Button>
    </MagicCat>
  );
};

export default CatForm;
