import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CatSidebar from "../components/Catalog/CatalogSideBar";
import Header from "../components/header/Header";
import Sort from "../components/header/Sort";
import Bee from "../components/Animations/Bee";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/products/productsActions";
import CatalogHead from "../components/Catalog/CatalogHead";
import "../components/Catalog/Catalog.css";
export default function Catalog() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const selectedProducts = useSelector(
  //   (state) => state.product.selectedProducts
  // );

  return (
    <>
      <Grid container className={classes.main}>
        <Grid item lg={2} md={2}>
          <CatSidebar />
        </Grid>
        <Grid item lg={10} md={10} sm={12} xs={12} className="content">
          <Header />
          <Sort />
          <Grid container className="catalog">
            <Bee />
            {products &&
              products.map((item) => (
                <Grid item lg={4} key={item.id} md={4} xs={12} sm={6}>
                  <div
                    className="catalog__product"
                    // className={`catalog__product  ${
                    //   selectedProducts.includes(item.id)
                    //     ? "catalog__product--border"
                    //     : ""
                    // }`}
                  >
                    <CatalogHead />
                    <div className="catalog__product-body">
                      <div className="catalog__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="catalog__product-footer">
                        <div className="product__item--middle">
                          <div className="catalog__title">{item.title}</div>
                          <p className="catalog__supplier">
                            By:
                            <span className="catalog__supplier-identity">
                              SP-Supplier115
                            </span>
                          </p>
                        </div>
                        <div className="product__item--price">
                          <div className="catalog__prices">
                            <span className="catalog__prices-item">
                              ${item.price}
                            </span>
                            RRP
                          </div>
                          <div className="catalog__prices">
                            <span className="catalog__prices-item">$654</span>
                            Cost
                          </div>
                          <div className="catalog__prices">
                            <span className="catalog__prices-item catalog__prices--modifier">
                              14%($4)
                            </span>{" "}
                            / Profit
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
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
