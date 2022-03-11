import { Typography } from "@material-ui/core";
import useStyle from "./Page404Styles";

const Page404 = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.errorTitle}> خطای 404</Typography>
      <Typography className={classes.errorText}>
        صفحه مورد نظر شما وجود ندارد.
        <br />
        لطفا آدرس مرورگر خود را بررسی کنید یا روی آیکون
        <span className={classes.cafe}> کافه </span>
        <span className={classes.mongo}> مانگو </span>
        کلیک کنید تا به صفحه اصلی هدایت شوید.
      </Typography>
    </div>
  );
};

export default Page404;
