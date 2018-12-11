import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';
import ShopHome from './components/ShopHome'
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
  img: {
    height: 40,
    width: 40,
    margin: "auto",
    marginTop: 10
  }
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <img className={classes.img} src={logoImg}/>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={classes.text} label="Gallary" />
            <Tab className={classes.text} label="Store" />
            <Tab className={classes.text} label="Commission Request" />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer className={classes.container}><GallaryBW/></TabContainer>
        }
        {value === 1 &&
          <TabContainer><ShopHome/></TabContainer>
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
