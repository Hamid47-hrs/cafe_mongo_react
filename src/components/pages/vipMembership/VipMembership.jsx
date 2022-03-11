import { Typography } from "@material-ui/core";
import useStyle from "./VipMembershipStyles";

const VipMembership = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.vipTitle}>عضویت ویژه</Typography>
      </div>
    </div>
  );
};

export default VipMembership;
