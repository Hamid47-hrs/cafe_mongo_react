import { Link, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import useStyle from "./ContactUsStyles.js";

const ContactUs = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>ما را در فضای مجازی دنبال کنید.</h3>
      <div className={classes.social}>
        <Link href="http://" target="_newTab">
          <InstagramIcon className={classes.icons} />
        </Link>
        <Link href="/hamid" target="_newTab">
          <TwitterIcon className={classes.icons} />
        </Link>
        <Link
          href="http://linkedin.com/in/hamid-reza-sadati-hrs47"
          target="_newTab"
        >
          <LinkedInIcon className={classes.icons} />
        </Link>
        <Link href="https://github.com/Hamid47-hrs" target="_newTab">
          <GithubIcon className={classes.icons} />
        </Link>
        <Link href="mailto://hamid47.hrs@gmail.com">
          <EmailIcon className={classes.icons} />
        </Link>
      </div>
      <Typography className={classes.text}>طراح : Hamid47.Hrs</Typography>
    </div>
  );
};

export default ContactUs;
