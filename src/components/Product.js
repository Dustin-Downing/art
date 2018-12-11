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
  },
  name: {
    // color: "#001DFF",
    color: "#7a19fd",
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

class Product extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, product } = this.props;
    const { expanded } = this.state;
    return (
      <Grid item xs={12} sm={12} md={!!expanded ? 12 : 6}>
        <Card className={classes.card} onClick={this.handleExpandClick}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent className={classes.content}>
            {/* {!!product && !!product.images && product.images.length>0 && expanded
              ? (
                <Carousel showStatus={false} showThumbs={false} >
                  {product.images.map( (image, i) => (<div key={i}><img src={image}/></div>) )}
                </Carousel>
              )
              : <img className={classes.image} src={product.image}/>
            } */}
            <Typography className={classes.name} gutterBottom variant="headline" component="h2">
              {product.name}
            </Typography>
            <Typography className={classes.caption} component="p">
              {product.caption}
            </Typography>
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider className='m-t m-b' />
            <CardContent>
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
              {/* <Grid container spacing={24}>
                <Typography className='text-left' paragraph variant="body2">
                  <span className='bold'>Size:</span>
                </Typography>
                <Typography className='text-left text-md' paragraph>
                  {product.package_dimensions.length +'" x '+ product.package_dimensions.width +'"'}
                </Typography>
                <Typography className='text-left' paragraph variant="body2">
                  <span className='bold'>Discription:</span>
                </Typography>
                <Typography className='text-left text-md' paragraph>
                  {product.description}
                </Typography>
              </Grid> */}
              <PayButton {...product}/>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);
