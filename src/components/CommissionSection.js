import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import commissionImg from '../imgs/commission.jpg';

const styles = theme => ({
  card: {
    maxWidth: 900,
    minWidth: 345,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
    backgroundPosition: 'center top',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  expand: {
    color: '#7640aa',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandContainer: {
    paddingLeft: 50,
    marginTop: -23,
    paddingBottom: 0,
  },
  expandText: {
    whiteSpace: 'nowrap',
    color: '#7640aa'
  },
  description: {
    textAlign: 'left',
    // paddingLeft: '30%',  when on full screen
    paddingLeft: 40, //when on moblile
  },
  button: {
    margin: theme.spacing.unit,
  },
  div: {
    marginTop: 50
  }
})

class CommissionSection extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={commissionImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom className='blue' variant="headline" component="h2">
              Commissions
            </Typography>
            <Typography component="p">
              Custom pieces made to order.<br/>  Pick your colors, size, and style!
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className={classes.expandContainer}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
              <ExpandMoreIcon className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })} />
              <Typography className={classes.expandText} component="p">
                Learn More
              </Typography>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Divider />
            <CardContent>
              <Typography paragraph variant="headline">
                How it works:
              </Typography>
              <Typography className={classes.description} paragraph>
                <ol>
                  <li>Pick a medium</li>
                  <li>Pick the size of that medium</li>
                  <li>Pick up to 5 colors</li>
                  <li>Suggest expamples for my gallary</li>
                  <li>You'll recieve a quote within 5 days!</li>
                </ol>
              </Typography>
              <Typography paragraph variant="Subheading">
                *Please Note*
              </Typography>
              <Typography paragraph>
                After you recieve your quote, I ask for half of the payment before I start and the other half at the time of delivery.<br/>
                Size of medium is the biggest factor in my price.
              </Typography>
              <Button variant="raised" color="primary" className={classes.button} target="_newtab" href='https://docs.google.com/forms/d/e/1FAIpQLSefq4-Rw3caiqv-lQ_uJTeXB18qj_C4cbLKrNHypA_HBxxhug/formResponse'>
                Request Quote
              </Button>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

CommissionSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommissionSection);
