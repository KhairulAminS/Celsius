import * as React from 'react'
import { BrowserRouter as Router, Navigate, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import Dashboard from '../pages/Dashboard'


export const AppRouter = () => {
    const { initialized } = useKeycloak()

    if (!initialized) {
        return <div>Loading...</div>
    }

    return (
        <Router>
            <Navigate from="/" to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
        </Router>
    )
}