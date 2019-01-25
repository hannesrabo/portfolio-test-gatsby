import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './highlight-box.css';

const HighlightBox = ({ children }) => <Container>{children}</Container>;

HighlightBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HighlightBox;
