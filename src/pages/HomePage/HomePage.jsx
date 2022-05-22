import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function HomePage({user, handleLogout}) {
    return <PageHeader user={user} handleLogout={handleLogout}/>
}