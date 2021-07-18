import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CatSidebar from "../components/Catalog/CatalogSideBar";
import Header from "../components/header/Header";
import Sort from "../components/header/Sort";
import Bee from "../components/Animations/Bee";
export default function Catalog() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main}>
        <Grid item lg={2} md={2}>
          <CatSidebar />
        </Grid>
        <Grid item lg={10} md={10} sm={12} xs={12} className="content">
          <Header
          // selectedCount={selectedProducts.length}
          // count={products.length}
          />
          <Sort />
          <Grid container className="catalog">
            <Bee/>
            {/* {products.map((item) => (
              <Grid item lg={3} key={item.id} md={4} xs={12} sm={6}>
                <Catalog
                  // handleSelect={handleSelect}
                  id={item.id}
                  key={item.id}
                  image={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  // handleOpen={() => handleOpen(item)}
                  selected={item.selected}
                  item={item}
                  checked={item.selected}
                />
              </Grid>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
const useStyles = makeStyles({
  main: {
    width: "100%",
  },
});
