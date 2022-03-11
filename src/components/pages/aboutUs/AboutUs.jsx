import { Typography, Button } from "@material-ui/core";
import useStyle from "./AboutUsStyles";

const AboutUs = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.aboutMeTitle}>درباره ی من</Typography>
      <Typography className={classes.aboutMeParOne}>
        از 7 ماه پیش تصمیم گرفتم که به علاقه اصلی خودم یعنی برنامه نویسی
        بپردازم.
        <br /> بعد از مطالعه و تحقیق با یادگیری Front End شروع کردم و HTML ، CSS
        و JavaScript رو یادگرفتم.
        <br /> کم کم به زبان جاوا اسکریپت علاقه مند شدم و تصمیم گرفتم که بیشتر
        به این زبان فوق العاده بپردازم. برای همین با React آشنا شدم و اون رو
        بهتر از سایر فریمورک ها (و کتابخونه ها) دونستم.
        <br /> در همین مسیر SASS و Material-UI رو هم آموختم.
        <br /> هر چه بیشتر یاد میگرفتم، علاقم بیشتر و بیشتر می شد و تصمیم گرفتم
        که با Back End هم آشنا بشم.
        <br /> باز هم JavaScript عزیز به کمکم اومد و شروع به یادگیری Node.Js
        کردم و در طی مسیر یادگیری بک-اند Express و MongoDB رو هم یادگرفتم.
        <br />
        <br /> علت نام گذاری این پروژه هم علاقه من به دیتابیس Mongo بود. به این
        دلیل که هم یکی از دیتابیس های ساده و قدرتمند هست (مخصوصا با ترکیب اون با
        Mongoose) و هم اینکه اسم قشنگی داره.
      </Typography>
      <Typography className={classes.aboutMeParTwo}>
        در پایان خوشحال می شم نظرتون رو درباره ی این پروژه با من در میون بذارید.
        <br /> نظر و انتقاد یا پیشنهاد شما خیلی برای من ارزشمنده و می تونه به من
        در پیشرفت کارم کمک کنه.
        <br /> متشکرم.
      </Typography>
      <div className={classes.commentContainer}>
        <Typography className={classes.commentTitle}>
          لطفا نظر خود را از طریق دکمه های مقابل با ما در میان بگذارید.
        </Typography>
        <Button className={classes.likeButton}>Like</Button>
        <Button className={classes.disLikeButton}>disLike</Button>
      </div>
    </div>
  );
};

export default AboutUs;
