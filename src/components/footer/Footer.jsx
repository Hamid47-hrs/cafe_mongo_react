import { Divider } from "@material-ui/core";
import AboutUs from "./about_us/AboutUs";
import ContactUs from "./contact_us/ContactUs";
import useStyle from "./FooterStyles.js";

const Footer = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <AboutUs />
      <Divider variant="middle" orientation="vertical" flexItem />
      <ContactUs />
    </div>
  );
};

export default Footer;
