import React from "react";
import "./Form.scss";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { useFormik } from "formik";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const CatSignForm = () => {
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
    <div className="luna-form">
      <div class="luna-tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail">
                        <div class="tail">
                          <div class="tail">
                            <div class="tail">
                              <div class="tail">
                                <div class="tail">
                                  <div class="tail">
                                    <div class="tail">
                                      <div class="tail">
                                        <div class="tail">
                                          <div class="tail">
                                            <div class="tail last"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div className="form__header">
          <div className="form__img-wrapper">
            <img className="form__img" alt="" />
          </div>
          <h2 className="form__heading">sign up</h2>
          <div></div>
        </div>
        <div class="luna">
          <div class="ears">
            <div class="ear left-ear">
              <div class="inner-ear"></div>
            </div>
            <div class="ear right-ear">
              <div class="inner-ear"></div>
            </div>
          </div>
          <div class="head">
            <div class="moon"></div>
            <div class="face">
              <div class="eyes">
                <div class="eye blink">
                  <div class="inner-eye left"></div>
                </div>
                <div class="eye blink">
                  <div class="inner-eye right"></div>
                </div>
              </div>
              <div class="nose"></div>
              <div class="mouth"></div>
            </div>
          </div>
          <div class="whiskers"></div>
        </div>
        <form onSubmit={formik.handleSubmit} className="authorization__form">
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
          <TextField
            placeholder="Confirm Password"
            name="passwordConfirmation"
            id="passwordConfirmation"
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
        </form>
      </div>
      <div class="logged-in">
        <div class="gif-wrapper">
          <img
            src="http://giphygifs.s3.amazonaws.com/media/tw6L7TjvODnTa/giphy.gif"
            alt="Usagi welcomes you"
          />
          <figcaption>In the name of the moon, we welcome you!</figcaption>
        </div>
      </div>
    </div>
  );
};

export default CatSignForm;
