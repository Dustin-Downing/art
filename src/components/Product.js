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
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ChevronLeft';


import PayButton from './PayButton';

const styles = theme => ({
  card: {
    cursor: "pointer",
    borderRadius: 7,
    paddingTop: "0 !important",
  },
  name: {
    // color: "#001DFF",
    // color: "#7a19fd",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
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
    // height: '84.25%',
    maxHeight: 644,
    width: 'auto',
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
    padding: "0",
  },
  iconContainer: {
    padding: 0,
    marginBottom: 10
  }
});

class Product extends React.Component {
  state = {};

  clearParams = () => {
    window.history.replaceState({},'',window.location.pathname+window.location.hash)
    window.location.reload()
  };

  render() {
    const { classes, product } = this.props;
    return (
      <Grid item xs={12}>
        <div className='text-left'>
          <Button variant="extendedFab" className={classes.iconContainer} onClick={this.clearParams}>
            <BackIcon />
          </Button>
        </div>
        <Card className={classes.card} onClick={this.handleExpandClick}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <CardContent className={classes.content}>
                {!!product && !!product.images && product.images.length>0
                  ? (
                    <Carousel showStatus={false} showThumbs={false} >
                      {product.images.map( (image, i) => (<div key={i}><img src={image} className={classes.image}/></div>) )}
                    </Carousel>
                  )
                  : <img className={classes.image} src={product.image}/>
                }
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography className={classes.name} gutterBottom variant="headline" component="h2">
                  {product.name}
                </Typography>
                <Typography className={classes.caption} component="p">
                  {product.caption}
                </Typography>
                <Divider className='m-t m-b' />
                <h3 className='text-left bold'>
                  Price:
                </h3>
                <p className='text-left text-md'>${parseFloat(product.price/100).toFixed(2)}</p>
                <h3 className='text-left bold'>
                  Size:
                </h3>
                <p className='text-left text-md'>{product.package_dimensions.length +'" x '+ product.package_dimensions.width +'"'}</p>
                <h3 className='text-left bold'>
                  Discription:
                </h3>
                <p className='text-left text-md'>{product.description}</p>
                <PayButton {...product}/>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);
