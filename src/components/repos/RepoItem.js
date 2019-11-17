import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card my-1">
      <h3>
        <div style={{maxWidth: '75%', display: 'inline-block'}}>
                <a
          href={repo.html_url}
          target="_blank"
          className="mr-1"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        <div style={{display: 'inline-block'}}>
        <i className="fas fa-code mr-1" />
        {repo.language}{' '}
        </div>
        </div>

        <h3 style={{ float: 'right'}}>
          <i className="fas fa-star mr-1" />
          {repo.stargazers_count}
        </h3>
        <div className="clearfix"></div>
      </h3>
    </div>
  );
};


RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
