import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USERS,
  GET_REPOS
} from '../types';


let githubClientId;
let githubClientSecret;
// if I had seperate client id and secrets for dev and prod
// if(process.env.NODE_ENV !== 'production'){
//   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
// } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET
// }
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET


const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);


  // Search Github users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };
  // Get User
    // Get single GitHub user
    const getUser = async username => {
      setLoading();
  
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    };

    // Get Users
    // Get users on pageload
    const getUsers = async () => {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
  
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    };
  // Get Repos
  // Get user repos
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };
  // Clear Users
    // // Clear users from state
  // clearUsers = () => this.setState({ users: [], loading: false });

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUsers,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
