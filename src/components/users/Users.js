import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
const Users = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users, getUsers} = githubContext;

  async function fetchData() {
    getUsers();
  }

  useEffect(() => {
    if(users.length === 0){
      fetchData()
    }
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={cardContainerStyle}>
        <div className="grid-3">
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }

};

// for setting mobile height of card container
const containerHeight = window.innerWidth < 480 ? '40vh' : '75vh';

const cardContainerStyle = {
  paddingRight: '.1rem',
  marginTop: '.7rem',
  overflowY: 'auto',
  height: containerHeight
};

export default Users;
