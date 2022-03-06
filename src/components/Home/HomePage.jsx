import ProductCarousel from "./carousel/ProductCarousel";
import ProductNavigator from "./productNavigator/ProductNavigator";
import AdvertisingGiff from "./adGiff/AdvertisingGiff";
import useStyle from "./HomePageStyles";

const HomePage = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <ProductCarousel />
      <ProductNavigator />
      <AdvertisingGiff />
    </div>
  );
};

export default HomePage;
