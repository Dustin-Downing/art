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
    this.onToken = this.onToken.bind(this);
  }

  async onToken(token) { // Token returned from Stripe
    fetch(config.stripe.orderUrl, { // Backend API url
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.price,
          description: this.props.name +' - '+this.props.caption,
          currency: 'USD',
          sku: this.props.sku,
        },
      }),
    }).then((res)=>{ return res.json()}).then((data) => {
      fetch(config.stripe.chargeUrl, { // Backend API url
        method: 'POST',
        body: JSON.stringify({
          token,
          charge: {
            amount: this.props.price,
            description: this.props.name +' - '+this.props.caption,
            currency: 'USD',
            sku: this.props.sku,
            order: data.order.id
          },
        }),
      }).then((res)=>{
        alert(`Thank you for your order ${token.card.name}.\n We're sending you a conformation email right now!`)
      }).catch((error) => {
        console.log('error:',error);
        alert(`There was a problem processing your order.\nPlease contact ${config.email}`)
      })
    }).catch((error) => {
      console.log('error:',error);
      alert(`There was a problem processing your order.\nPlease contact ${config.email}`)
    })
  }

  render() {
    const { classes, price } = this.props;
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
