import React from "react";
import PropTypes from "prop-types";


const Featured = ({ featured, toggleFeatured }) => (
  <span>
    {featured ? (
      <a onClick={toggleFeatured} className="ui right yellow corner label">
        <i className="star icon"></i>
      </a>
    ) : (
      <a onClick={toggleFeatured} className="ui right corner label">
        <i className="empty star icon"></i>
      </a>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired
};

export default Featured;
