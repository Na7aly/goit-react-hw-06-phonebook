import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} placeholder="Filter contacts" />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
