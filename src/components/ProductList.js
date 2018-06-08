import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import config from '../config';
import Product from './Product';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      skus: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchSKUs();
  }

  async fetchProducts() { // Token returned from Stripe
    const res = await fetch(config.stripe.productsUrl, { // Backend API url
      method: 'GET'
    });
    const response = await res.json();

    const products = response.data.reduce((map, product) => {
        map[product.id] = {...product};
        return map;
      }, {});

    this.setState({
      products: products
    });
  }

  async fetchSKUs() { // Token returned from Stripe
    const res = await fetch(config.stripe.skusUrl, { // Backend API url
      method: 'GET'
    });
    const response = await res.json();
    const skus = response.data.map(sku => ({...sku, sku:sku.id}));

    this.setState({
      skus: skus
    });
  }

  render() {
    const { classes } = this.props;
    const { products, skus } = this.state;

    const dummyInventroy = [
      {id:1, name: 'Green Waves', caption:'cavas fluid art', price: 45, size: '12" x 12"'},
    ]

    console.log("Products: ",products);
    console.log("skus: ",skus);

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {skus.map(item => (<Product key={item.id} product={{...item, ...products[item.product]}}/>))}
        </Grid>
      </div>
    )
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);
