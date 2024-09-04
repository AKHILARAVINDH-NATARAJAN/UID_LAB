import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <div className="profile-header">
                <img src={props.user.avatar} alt="User Avatar" className="profile-avatar" />
                <h2>{props.user.name}</h2>
                <p className="profile-username">@{props.user.username}</p>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {props.user.email}</p>
                <p><strong>Location:</strong> {props.user.location}</p>
                <p><strong>Bio:</strong> {props.user.bio}</p>
            </div>
        </div>
    );
}

export default UserProfile;
