import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
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
    paddingTop: '56.25%', // 16:9
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
      <Grid item xs={!!expanded ? 12 : 6} sm={!!expanded ? 12 : 6} md={!!expanded ? 12 : 4}>
        <Card className={classes.card} onClick={this.handleExpandClick}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent className={classes.content} onClick={this.handleExpandClick}>
            <Typography className={classes.name} gutterBottom variant="headline" component="h2">
              {product.name}
            </Typography>
            <Typography className={classes.caption} component="p">
              {product.caption}
            </Typography>
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider />
            <CardContent>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <Typography className='text-right' paragraph variant="body2">
                    <span className='bold'>Size:</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className='text-left text-md' paragraph>
                    {product.package_dimensions.length +'" x '+ product.package_dimensions.width +'"'}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className='text-right' paragraph variant="body2">
                    <span className='bold'>Discription:</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className='text-left text-md' paragraph>
                    {product.description}
                  </Typography>
                </Grid>
              </Grid>
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
