import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';
import ProductList from './components/ProductList'
import CommissionSection from './components/CommissionSection'
import GallaryBW from './components/GallaryBW'
import './App.css';
import logoImg from './imgs/logo.png';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  text: {
    fontSize: 30,
  },
  container: {
    padding: 0,
  },
  imgContainer: {
    margin: "auto",
  },
  img: {
    height: 80,
    width: 80,
    marginTop: 10
  }
};

class CenteredTabs extends React.Component {
  state = {
    value: (!!getUrlVars()['product']) ? 1 : 1, //always showing shop anyway, could AB test this
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  clearParams = () => {
    window.history.replaceState({},'',window.location.pathname+window.location.hash)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className={classes.imgContainer}>
            <img className={classes.img} src={logoImg}/>
          </div>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={classes.text} label="Gallary" onClick={this.clearParams}/>
            <Tab className={classes.text} label="Store" onClick={this.clearParams}/>
            <Tab className={classes.text} label="Commission Request" onClick={this.clearParams}/>
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer className={classes.container}><GallaryBW/></TabContainer>
        }
        {value === 1 &&
          <TabContainer><ProductList/></TabContainer>
        }
        {value === 2 &&
          <TabContainer><CommissionSection/></TabContainer>
        }
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
