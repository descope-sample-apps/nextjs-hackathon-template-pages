'use client';
import { UserProfile } from '@descope/nextjs-sdk';
import { signOut } from 'next-auth/react';

const Profile = () => (
    <UserProfile widgetId="user-profile-widget" onLogout={signOut}/>
);

export default Profile;
