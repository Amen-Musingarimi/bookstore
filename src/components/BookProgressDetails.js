import React from 'react';
import PropTypes from 'prop-types';

const BookProgressDetails = ({ completed }) => (
  <div className="progress-div">
    <div className="progress-circle" />
    <div className="percentage-div">
      <p className="percentage">
        {completed}
        %
      </p>
      <p className="completed-text">Completed</p>
    </div>
  </div>
);

BookProgressDetails.propTypes = {
  completed: PropTypes.number.isRequired,
};

export default BookProgressDetails;
