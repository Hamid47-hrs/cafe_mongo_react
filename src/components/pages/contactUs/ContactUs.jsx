import { Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import useStyle from "./ContactUsStyles";

const ContactUs = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.contactMeTitle}>تماس با ما</Typography>
      <div className={classes.contactMeBottomContainer}>
        <Typography className={classes.contactMeText}>
          از طریق راه های ارتباطی زیر با ما تماس برقرار کنید.
        </Typography>
        <div className={classes.contactContainer}>
          <div className={classes.contactItem}>
            <Typography className={classes.instagram}>
              Instagram : @Hamid47hrs
            </Typography>
            <InstagramIcon className={classes.contactIcon} />
          </div>
          <div className={classes.contactItem}>
            <Typography className={classes.twitter}>
              Twitter : @Hamid47Hrs
            </Typography>
            <TwitterIcon className={classes.contactIcon} />
          </div>
          <div className={classes.contactItem}>
            <Typography className={classes.linkedin}>
              LinkedIn : hamid-reza-sadati
            </Typography>
            <LinkedInIcon className={classes.contactIcon} />
          </div>
          <div className={classes.contactItem}>
            <Typography className={classes.github}>
              GitHub : hamid47-hrs
            </Typography>
            <GithubIcon className={classes.contactIcon} />
          </div>
          <div className={classes.contactItem}>
            <Typography className={classes.gmail}>
              G-Mail : hamid47.hrs@gmail.com
            </Typography>
            <EmailIcon className={classes.contactIcon} />
          </div>
          <div className={classes.contactItem}>
            <Typography className={classes.phoneNumber}>
              Phone Number : 09050551235
            </Typography>
            <PhoneAndroidIcon className={classes.contactIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
