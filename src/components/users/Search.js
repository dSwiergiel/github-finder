import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'warning');
    } else {
      githubContext.searchUsers(text);
    }
  };

  const onClear = e => {
    e.preventDefault();
    setText('');
    clearUsers();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <div className="grid-2">
          <input
            type="button"
            value="Clear"
            className="btn btn-light btn-block mt0"
            onClick={onClear}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block mt0"
          />
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
