import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card my-1">
      <h3>
        <a
          href={repo.html_url}
          target="_blank"
          className="mr-1"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        <i className="fas fa-code mr-1" />
        {repo.language}{' '}
        <span style={{ float: 'right' }}>
          <i className="fas fa-star mr-1" />
          {repo.stargazers_count}
        </span>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
