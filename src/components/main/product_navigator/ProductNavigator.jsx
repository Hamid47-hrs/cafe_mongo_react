import ProductCard from "./ProductCard";
import useStyle from "./ProductNavigatorStyles";
import prodImage1 from "../../../images/product_images/masala_Chai.jpg";
import prodImage2 from "../../../images/product_images/blackBerry_smootie.jpg";
import prodImage3 from "../../../images/product_images/double_berger.jpg";
import prodImage4 from "../../../images/product_images/esspresso_coffee.jpg";
import prodImage5 from "../../../images/product_images/pepperoni_pizza.jpg";
import prodImage6 from "../../../images/product_images/green_tea.jpg";
import prodImage7 from "../../../images/product_images/turkish_Kebab.jpg";
import prodImage8 from "../../../images/product_images/yellow_cocktail.jpg";
import prodImage9 from "../../../images/product_images/meetball_pizza.jpg";
import prodImage10 from "../../../images/product_images/sosis_bandari.jpg";
import prodImage11 from "../../../images/product_images/turkish_coffee.jpg";

const products = [
  {
    title: "چای ماسالا",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 8700,
    image: prodImage1,
  },
  {
    title: "اسموتی تمشک سیاه",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 10000,
    image: prodImage2,
  },
  {
    title: "دبل برگر",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 23000,
    image: prodImage3,
  },
  {
    title: "قهوه اسپرسو",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 5400,
    image: prodImage4,
  },
  {
    title: "پیتزا پپرونی",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 89000,
    image: prodImage5,
  },
  {
    title: "چای سبز",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 8700,
    image: prodImage6,
  },
  {
    title: "کباب ترکی",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 55000,
    image: prodImage7,
  },
  {
    title: "کوکتل زرد",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 63500,
    image: prodImage8,
  },
  {
    title: "پیتزا میت بال",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 106000,
    image: prodImage9,
  },
  {
    title: "سوسیس بندری",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 32000,
    image: prodImage10,
  },
  {
    title: "قهوه ترک",
    description: "چایی برگرفته از قبایل بودایی که بسیار ریق آور می باشد.",
    price: 13000,
    image: prodImage11,
    link: "/hamid"
  },
];

const ProductNavigator = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ProductNavigator;
