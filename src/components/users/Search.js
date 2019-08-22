import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
    }
  };

  onClear = e => {
    e.preventDefault();
    this.setState({ text: '' });
    this.props.clearUsers();
  };

  render() {
    // javascript destructuring props
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <div className="grid-2">
            <input
              type="button"
              value="Clear"
              className="btn btn-light btn-block mt0"
              onClick={this.onClear}
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
  }
}

export default Search;
