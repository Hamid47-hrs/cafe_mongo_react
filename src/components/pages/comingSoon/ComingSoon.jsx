import { Typography } from "@material-ui/core";
import useStyle from "./ComingSoonStyles";
import image from "../../../images/comingSoon/cd5441e9b1739c839342732071761df1.png";

const ComingSoon = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Typography className={classes.comingSoonFa}>به زودی ...</Typography>
      <Typography className={classes.comingSoonEn}>... Coming Soon</Typography>
      <img className={classes.comingSoonPNG} src={image} alt="coming-soon" />
    </div>
  );
};

export default ComingSoon;
