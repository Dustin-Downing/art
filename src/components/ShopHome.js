import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import ProductList from './ProductList.js';

const styles = theme => ({
  bottomDiv: {
    marginBottom: 10,
  },
  root: {
    fontSize: "4rem",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: 'underline'
  },
  text: {
    color: "#001DFF",
    fontWeight: 700,
    paddingBottom: 10,
  },
  div: {
    padding: "10px",
  },
});

function ShopHome(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Typography className={classes.root} variant="headline" component="h3">
          Shop
        </Typography>
        <Typography className={classes.text}  component="p">
          Explore pieces I have for sale
        </Typography>
        <Divider />
      </div>
      <div className={classes.div}>
        <ProductList/>
      </div>
    </div>
  );
}

ShopHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopHome);
