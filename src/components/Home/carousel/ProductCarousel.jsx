import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../../images/1000_F_267568050_gKkcBAI5XkpEHNpipkx2aIarNbwarCRN.jpg";
import image2 from "../../../images/istockphoto_823719536-1024x1024.jpg";
import image3 from "../../../images/1306126.jpg";
import image4 from "../../../images/istockphoto_1303583671_170667a.jpg";
import image5 from "../../../images/coffee_background_space_text_85121087.jpg";
import image6 from "../../../images/frame_made_pieces_pizza_red_background_16651662.jpg";
import image7 from "../../../images/kXmJbh.jpg";

const iamges = [
  {
    url: image1,
  },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
];

const ProductCarousel = () => {
  return (
    <div>
      <SimpleImageSlider
        style={{ direction: "ltr" }}
        width={"100%"}
        height={300}
        images={iamges}
        showNavs={true}
        slideDuration={3}
        loop={true}
        autoPlay={true}
        autoPlayDelay={6}
      />
    </div>
  );
};

export default ProductCarousel;
