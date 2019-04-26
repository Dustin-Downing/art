import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import config from '../config';
import Product from './Product';
import ProductThumbnail from './ProductThumbnail';
import Loading from './Loading';


const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
})

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

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
    const productNumber = getUrlVars()['product'];
    let productData = null
    skus.forEach(sku => {
      if (sku.id == productNumber && sku.inventory.quantity > 0) {
        productData = {...sku, ...products[sku.product]}
      }
    })

    return (
      <div className={classes.root}>
        { !!productNumber
          ? (
            <div>
              { !!productData
                ? <Product product={productData}/>
                : <Loading/>
              }
            </div>
          )
          : (
            <div>
              {skus.length==0 && <Loading/>}
              <Grid container spacing={24}>
                {skus.map(item => {
                  if (item.inventory.quantity > 0) {
                    return <ProductThumbnail key={item.id} product={{...item, ...products[item.product]}}/>
                  }
                })}
              </Grid>
            </div>
          )
        }
      </div>
    )
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);
