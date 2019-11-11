import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
const Users = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext;


  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={cardContainerStyle}>
        <div style={userStyle}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }

};


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem'
};

const cardContainerStyle = {
  marginTop: '.7rem',
  overflowY: 'auto',
  height: '607px'
};

export default Users;
