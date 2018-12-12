import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import ProductList from './ProductList.js';

const styles = theme => ({
  bottomDiv: {
    marginBottom: 10,
  },
  textBackground: {
    backgroundColor: '#cececec7',
  },
  root: {
    fontSize: "4rem",
    // color: "#c7adea",
    fontWeight: 700,
    // textDecoration: 'underline',
    textAlign: 'center',
  },
  text: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 14,
    fontWeight: 700,
    paddingBottom: 30,
    textAlign: 'center',
  },
  card: {
    borderRadius: 7,
  },
});

function ShopHome(props) {
  const { classes } = props;
  return (
      <Card className={classes.card}>
        <CardContent>
          <ProductList/>
        </CardContent>
      </Card>
  );
}

ShopHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopHome);
