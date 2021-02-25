import PropTypes from 'prop-types';
import { Component } from 'react';

class Tab extends Component {
  render() {
    return (
      <li onClick={this.props.clicked} className={'tab ' + this.props.activeClass}>
        <span>{this.props.tabName}</span>
        <ul className="sub-tabs">
          {this.props.children}
        </ul>
      </li>
    )
  }
};

Tab.defaultProps = {
  activeClass: '',
  children: '',
  clicked: () => {},
  tabName: ''
};

Tab.propTypes = {
  activeClass: PropTypes.string,
  children: PropTypes.node,
  clicked: PropTypes.func,
  tabName: PropTypes.string
};

export default Tab;
