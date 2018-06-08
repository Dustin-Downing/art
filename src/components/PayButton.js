import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';

import config from '../config';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class PayButton extends React.Component {
  constructor(props) {
    super(props);
     // This binding is necessary to make `this` work in the callback
    this.onToken = this.onToken.bind(this);
  }

  async onToken(token) { // Token returned from Stripe
    console.log('token',token);
    const chargeRes = await fetch(config.stripe.orderUrl, { // Backend API url
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.price,
          description: this.props.name +' - '+this.props.caption,
          currency: 'USD',
          sku: this.props.sku,
          // order: res.json.order.id
        },
      }),
    }).then((res)=>{
      console.log('order res');
      console.log(res);
      console.log(res.json);
      console.log(res.json.order.id);
      fetch(config.stripe.chargeUrl, { // Backend API url
        method: 'POST',
        body: JSON.stringify({
          token,
          charge: {
            amount: this.props.price,
            description: this.props.name +' - '+this.props.caption,
            currency: 'USD',
            sku: this.props.sku,
            // order: res.json.order.id
          },
        }),
      }).then((res)=>{
        alert(`Thank you for your order ${token.card.name}.\n We're sending you a conformation email right now...`)
      })
    });
  }

  render() {
    const { classes, price } = this.props;
    console.log('this.props',this.props);
    return (
      <StripeCheckout
        name="Arte By Karina" // the pop-in header title
        description="Fluid Art Creations" // the pop-in header subtitle
        image="//i.imgur.com/wwPYedW.jpg" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Checkout" // prepended to the amount in the bottom pay button
        amount={price} // cents
        currency="USD"
        stripeKey={config.stripe.apiKey}
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        allowRememberMe // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onClick"
        >
          <Button variant="raised" color="primary" className={classes.button}>
            Buy Now
          </Button>
      </StripeCheckout>
    );
  }
}

PayButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default withStyles(styles)(PayButton);
