import React from 'react';

const SiteCard = ({ site }) => (
  <div className="site-card">
    <h3>{site.name}</h3>
    <a href={site.url} target="_blank" rel="noopener noreferrer">
      Visit Site
    </a>
  </div>
);

export default SiteCard;
