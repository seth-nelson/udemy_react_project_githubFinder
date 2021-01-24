import React, { Component } from 'react';
import UserItem from './UserItem.js';
import Spinner from '../layout/Spinner.js';
import PropTypes from 'prop-types';

const Users = ({ users, isLoading}) => {
    if (isLoading) {
        return <Spinner />
    } else {

        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users
