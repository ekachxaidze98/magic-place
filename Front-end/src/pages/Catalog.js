import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import { addProduct, getProducts } from "../reducers/products/productsActions";

const styles = (theme) => ({
  root: {
    minWidth: 600,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export default function Catalog({ open, setOpen }) {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { values, setFieldValue, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        price: "",
        image: "",
      },
      //   validationSchema: addProductValidation,
      onSubmit: (values) => {
        dispatch(addProduct(values));
      },
    });

  const handleClose = () => {
    setOpen(false);
  };

  const fileUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxkt3hoda/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setFieldValue("image", file.secure_url);
  };

  return (
    <div>
      <div>
        <TextField
          fullWidth
          type="file"
          id="image"
          name="image"
          placeholder="Image"
          variant="outlined"
          error={touched.imageUrl && Boolean(errors.imageUrl)}
          onChange={fileUpload}
        />
        {values.imageUrl && (
          <img src={values.imageUrl} alt="img" width="300" height="150" />
        )}
        <TextField
          fullWidth
          id="title"
          name="title"
          placeholder="title"
          variant="outlined"
          value={values.title}
          error={touched.title && Boolean(errors.title)}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          id="description"
          name="description"
          placeholder="description"
          variant="outlined"
          value={values.description}
          error={touched.description && Boolean(errors.description)}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="number"
          id="price"
          name="price"
          placeholder="1000"
          variant="outlined"
          value={values.price}
          error={touched.price && Boolean(errors.price)}
          onChange={handleChange}
        />
      </div>

      <Button autoFocus onClick={handleSubmit} type="submit" color="primary">
        Submit
      </Button>
    </div>
  );
}
