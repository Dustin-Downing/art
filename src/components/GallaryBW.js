import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import gallaryImg from '../imgs/b-w-chem.jpg';

const styles = {
  text: {
    fontSize: 15,
  },
  card: {
    // maxWidth: 900,
    // minWidth: 345,
    // width: "95%",
    // marginTop: 50,
    // marginLeft: "auto",
    // marginRight: "auto",
    borderRadius: 7,
    // padding: 0,
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
    backgroundPosition: 'center top',
  },
  div: {
    marginTop: 50
  }
};

function Gallary(props) {
  const { classes } = props;
  return (
    // <div className={classes.div}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={gallaryImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.text} component="p">
            Fan of my art? <br/>Looking for ideas for commission pieces?<br/>Checkout all my past work on my Instagram
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.instagram.com/arte_bykarina/' size="small" color="primary">
            <i className="fa fa-instagram fa-lg"></i>
            &nbsp;
            Explore My Instagram
          </Button>
        </CardActions>
      </Card>
    // </div>
  );
}

Gallary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallary);
