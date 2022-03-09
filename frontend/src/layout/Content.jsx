import PropTypes from 'prop-types';
import React from 'react';

function Content(props) {
  const { isLoggedIn } = props;

  return (
    <div>
      {isLoggedIn ? (
        <div>Hier steht der AdminContent.</div>
      ) : (
        <div>Hier steht der normale Content.</div>
      )}
    </div>
  );
}

Content.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Content.defaultProps = {
  isLoggedIn: false,
};

export default Content;
