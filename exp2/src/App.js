import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
    const user = {
        name: 'Akhil Aravindh P N',
        username: 'akhil',
        email: 'akhilaravindh16@gmail.com',
        location: 'Erode',
        bio: 'A passionate developer who loves coding and exploring new technologies.',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'  
    };

    return (
        <div className="App">
            <UserProfile user={user} />
        </div>
    );
}

export default App;
