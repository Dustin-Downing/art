import React from 'react'
import "./Section.css";
import Button from '@material-ui/core/Button';

export default class Section extends React.Component {

  render() {
    return (
      <div className={`section__continer ${this.props.className}`}>
        <h2 className="section__header">{this.props.headerText}</h2>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
        <div className='section__footer'>
          {this.props.linkText && <span className='section__link'>{this.props.linkText}</span>}
        </div>
      </div>
    )
  }
}
