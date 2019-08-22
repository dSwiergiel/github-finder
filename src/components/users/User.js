import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        <strong>Hireable:</strong>{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2 my-1">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="User avatar"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <a
              href={html_url}
              className="btn btn-dark my-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>{' '}
                    <a href={blog} target="_blank" rel="noopener noreferrer">
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center my-1">
          <div className="badge badge-success">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-danger">Public Gists: {public_gists}</div>
          <div className="badge badge-dark">Followers: {followers}</div>
          <div className="badge badge-light">Following: {following}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
