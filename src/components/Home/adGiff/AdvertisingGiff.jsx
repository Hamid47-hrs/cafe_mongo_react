import video from "../../../images/AdGiff/InShot_20220224_162920817_672x378.mp4";
import useStyle from "./AdvertisingGiffStyles.js";
import { Divider } from "@material-ui/core";


const AdvertisingGiff = () => {
  const classes = useStyle();

  return (
    <>
      <Divider className={classes.divider}/>
      <div className={classes.container}>
          <div className={classes.dimmer}></div>
        <video className={classes.video} src={video} loop autoPlay controls/>
      </div>
    </>
  );
};

export default AdvertisingGiff;
