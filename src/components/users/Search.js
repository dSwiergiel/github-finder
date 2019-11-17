import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

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
    githubContext.getUsers();
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
          style={{marginBottom: '15px'}}
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

export default Search;
