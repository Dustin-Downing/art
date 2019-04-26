import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  card: {
    cursor: "pointer",
    borderRadius: 7,
    paddingTop: "0 !important",
  },
  progress: {
    margin: "125px 16px",
  },
})

class Loading extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CircularProgress className={classes.progress} />
      </Card>
    )
  }
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
