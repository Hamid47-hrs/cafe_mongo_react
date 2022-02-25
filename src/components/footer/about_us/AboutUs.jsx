import { Divider, Typography } from "@material-ui/core";
import useStyle from "./AboutUsStyles.js";

const AboutUs = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>کافه مانگو</h1>
      <div className={classes.conection}>
        <Typography className={classes.text}>تلفن : 09050551235</Typography>
        <Divider
          className={classes.divider}
          variant="middle"
          orientation="vertical"
          flexItem
        />
        <Typography className={classes.text}>پاسخگویی 47 ساعته</Typography>
      </div>
      <Divider className={classes.dividerh} />
      <div className={classes.info}>
        <Typography className={classes.text}>تحویل فوری در سطح شهر</Typography>
        <Typography className={classes.text}>پرداخت درب منزل</Typography>
        <Typography className={classes.text}>ضمانت کیفیت</Typography>
      </div>
    </div>
  );
};

export default AboutUs;
