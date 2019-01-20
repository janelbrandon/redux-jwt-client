import React from 'react'
import { handleSignOut } from '../services/SigninService'
import { Button } from '../styles/componentSyles'


export default function SessionInfo({ tokenDetails }) {
    return (
        <div>
            <h4>Welcome {tokenDetails.email}!</h4>
            <p>You logged in at: {new Date(tokenDetails.iat * 1000).toLocaleString()}</p>
            <p>Your token expires at: {new Date(tokenDetails.exp * 1000).toLocaleString()}</p>
            <Button highlight="silver" onClick={handleSignOut}>Logout</Button>
        </div>
    )
}
