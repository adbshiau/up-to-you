import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function ProfilePage({user, handleLogout}) {
    return <PageHeader user={user} handleLogout={handleLogout}/> 
}