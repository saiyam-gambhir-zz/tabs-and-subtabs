import PropTypes from 'prop-types';

const tabContent = (props) => props.children;

tabContent.defaultProps = {
  children: ''
};

tabContent.propTypes = {
  children: PropTypes.node
};

export default tabContent;
