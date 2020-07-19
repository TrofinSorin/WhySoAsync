import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  button: {
    background: "blue",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 100px",
  },
};

const ScssModules = (props) => {
  console.log("props:", props);
  const { classes } = props;

  return (
    <div className="ScssModulesWrapper">
      <Button className={classes.button}>Higher-order component</Button>
    </div>
  );
};

export default withStyles(styles)(ScssModules);
