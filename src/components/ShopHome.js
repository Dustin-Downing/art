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
    color: "#c7adea",
    fontWeight: 700,
    textDecoration: 'underline',
    textAlign: 'center',
  },
  text: {
    color: "#001DFF",
    fontSize: 14,
    fontWeight: 700,
    paddingBottom: 30,
    textAlign: 'center',
  },
  card: {
    marginTop: 50,
    maxWidth: 900,
    minWidth: 345,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
    padding: 'none'
  },
});

function ShopHome(props) {
  const { classes } = props;
  return (
      <Card className={classes.card}>
        <Typography className={classes.root} variant="headline" component="h3">
          Shop
        </Typography>
        <Typography className={classes.text}  component="p">
          Every piece is an orignal.<br/>First come, first server.
        </Typography>
        <Divider />
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
