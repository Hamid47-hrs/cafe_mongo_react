import AdvertisingGiff from "./ad_giff/AdvertisingGiff";
import ProductCarousel from "./carousel/ProductCarousel";
import ProductNavigator from "./product_navigator/ProductNavigator";

const Main = () => {
  return (
    <div>
      <ProductCarousel />
      <ProductNavigator />
      <AdvertisingGiff />
    </div>
  );
};

export default Main;
