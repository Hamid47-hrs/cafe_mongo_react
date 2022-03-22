import {
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../../../Home/productNavigator/ProductCard";
import useStyle from "./AddProductStyles";

const AddProduct = () => {
  const classes = useStyle();

  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("none");
  const [productSubset, setProductSubset] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState([]);
  const [productImagePath, setProductImagePath] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const selectContent = (event) => {
    event.target.select();
  };

  const resetForm = () => {
    setProductName("");
    setProductType("none");
    setProductSubset("");
    setProductPrice(0);
    setProductImage([]);
    setProductImagePath("");
    setProductDescription("");
  };

  const imageUploader = (event) => {
    if (event.target.files && event.target.files.length > 0)
      setProductImage(event.target.files[0]);

    const render = new FileReader();
    render.onload = (event) => {
      setProductImagePath(event.target.result);
    };
    render.readAsDataURL(event.target.files[0]);
  };

  const productValidation = (product) => {
    if (!product.productName) return ".نام محصول باید وارد شود";
    if (!product.productType) return ".نوع محصول باید مشخص شود";
    if (!product.productSubset) return ".زیر مجموعه محصول باید مشخص شود";
    if (product.productPrice < 1000) return ".قیمت محصول صحیح نیست";
    if (!product.productDescription) return ".توضیح محصول باید وارد شود";
  };

  const product = {
    productName: productName,
    productType: productType,
    productSubset: productSubset,
    productImage: productImage,
    productImagePath: productImagePath,
    productPrice: productPrice,
    productDescription: productDescription,
  };
  const addProductHandler = (event) => {
    event.preventDefault();

    const createProductError = productValidation(product);

    if (createProductError) return toast.error(createProductError);

    const formData = new FormData();

    formData.append("productName", productName);
    formData.append("productType", productType);
    formData.append("productSubset", productSubset);
    formData.append("productPrice", productPrice);
    formData.append("productDescription", productDescription);
    formData.append("numberOfPurchases", 0);
    if (productImage) formData.append("image", productImage);

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    fetch();
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title} variant="h2">
          افزدون محصول
        </Typography>
        <Typography className={classes.subTitle}>
          جهت افزودن محصول اطلاعات لازم را در فیلدهای مشخص شده وارد کنید.
        </Typography>
      </div>
      <div className={classes.body}>
        <div className={classes.formContainer}>
          <form id="productFrom" className={classes.form}>
            <Grid container className={classes.productFormGrid}>
              <Grid item className={classes.productFormGridItem}>
                <TextField
                  className={classes.productInput}
                  name="productName"
                  label="نام محصول *"
                  type="text"
                  value={productName ? productName : ""}
                  onFocus={(event) => selectContent(event)}
                  onChange={(event) => setProductName(event.target.value)}
                />
              </Grid>
              <Grid item className={classes.productFormGridItem}>
                <FormControl className={classes.productInput}>
                  <InputLabel shrink>نوع محصول *</InputLabel>
                  <Select
                    displayEmpty
                    onChange={(event) => setProductType(event.target.value)}
                  >
                    <MenuItem className={classes.itemSelect}>
                      <em>نوع محصول را انتخاب کنید</em>
                    </MenuItem>
                    <MenuItem value={"cafe"}>
                      <span className={classes.itemSelect}>کافه</span>
                    </MenuItem>
                    <MenuItem value={"fastFood"}>
                      <span className={classes.itemSelect}>فست فود</span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className={classes.productFormGridItem}>
                {productType === "fastFood" && (
                  <FormControl className={classes.productInput}>
                    <InputLabel shrink>زیر مجموعه محصول *</InputLabel>
                    <Select
                      displayEmpty
                      onChange={(event) => setProductSubset(event.target.value)}
                    >
                      <MenuItem>
                        <em>زیر مجموعه محصول را انتخاب کنید</em>
                      </MenuItem>
                      <MenuItem value={"ساندویچ"}>
                        <span className={classes.itemSelect}>ساندویچ</span>
                      </MenuItem>
                      <MenuItem value={"پیتزا"}>
                        <span className={classes.itemSelect}>پیتزا</span>
                      </MenuItem>
                      <MenuItem value={"برگر"}>
                        <span className={classes.itemSelect}>برگر</span>
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
                {productType === "cafe" && (
                  <FormControl className={classes.productInput}>
                    <InputLabel shrink>زیر مجموعه محصول *</InputLabel>
                    <Select
                      displayEmpty
                      onChange={(event) => setProductSubset(event.target.value)}
                    >
                      <MenuItem>
                        <em>زیر مجموعه محصول را انتخاب کنید</em>
                      </MenuItem>
                      <MenuItem value={"چای"}>
                        <span className={classes.itemSelect}>چای</span>
                      </MenuItem>
                      <MenuItem value={"کوکتل"}>
                        <span className={classes.itemSelect}>کوکتل</span>
                      </MenuItem>
                      <MenuItem value={"اسموتی"}>
                        <span className={classes.itemSelect}>اسموتی</span>
                      </MenuItem>
                      <MenuItem value={"قهوه"}>
                        <span className={classes.itemSelect}>قهوه</span>
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item className={classes.productFormGridItem}>
                <TextField
                  className={classes.productInput}
                  name="productPrice"
                  label="قیمت محصول *"
                  type="number"
                  value={productPrice ? productPrice : 0}
                  onFocus={(event) => selectContent(event)}
                  onChange={(event) => setProductPrice(event.target.value)}
                />
              </Grid>
              <Grid item className={classes.productFormGridItem}>
                <TextField
                  className={classes.productInput}
                  name="productImage"
                  label="تصویر محصول *"
                  type={"file"}
                  onChange={imageUploader}
                />
              </Grid>
              <Grid item className={classes.productFormGridItem}>
                <TextField
                  className={classes.productInput}
                  name="productDescription"
                  label="توضیح محصول *"
                  multiline
                  type="Text"
                  minRows={4}
                  maxRows={4}
                  value={productDescription ? productDescription : ""}
                  onFocus={(event) => selectContent(event)}
                  onChange={(event) =>
                    setProductDescription(event.target.value)
                  }
                />
              </Grid>
              <Button
                onClick={(event) => addProductHandler(event)}
                className={classes.submitButton}
                type="submit"
              >
                ایجاد محصول
              </Button>
              <Button onClick={resetForm} className={classes.submitButton}>
                شروع مجدد
              </Button>
            </Grid>
          </form>
        </div>
        <div className={classes.preProductContainer}>
          <ProductCard
            name={product.productName}
            type={product.productType}
            subset={product.productSubset}
            description={product.productDescription}
            price={product.productPrice}
            image={product.productImagePath}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
