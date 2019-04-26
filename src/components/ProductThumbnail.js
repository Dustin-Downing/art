import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import PayButton from './PayButton';

const styles = theme => ({
  card: {
    cursor: "pointer",
    borderRadius: 7,
  },
  name: {
    // color: "#001DFF",
    color: "#3458aa",
    textAlign: 'center',
    fontSize: 20,
  },
  caption: {
    fontSize: 14,
    textAlign: 'center',
  },
  media: {
    height: 50,
    paddingTop: '84.25%', // this is custom for the image ratio I have   design docs say to use => '56.25%', // 16:9
  },
  image: {
    height: '84.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  price: {
    color: "#001dff61",
    paddingLeft: "12px",
    fontSize: "2rem",
  },
  content: {
    padding: "10px 0 0",
  }
});

class ProductThumbnail extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    document.location.search = `product=${this.props.product.sku}`
  };

  render() {
    const { classes, product } = this.props;
    const { expanded } = this.state;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card} onClick={this.handleExpandClick}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.name} gutterBottom variant="headline" component="h2">
              {product.name}
            </Typography>
            <Typography className={classes.caption} component="p">
              {product.caption}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

ProductThumbnail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductThumbnail);
