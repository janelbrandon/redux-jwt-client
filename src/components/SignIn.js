import React from 'react'
import { Button } from '../styles/componentSyles'


export default ({ handleSignIn, loginError }) => (
  <form onSubmit={handleSignIn}>
    {loginError && <p>{loginError}</p>}
    <label>Email: <input type="email" name="email" /></label><br />
    <label>Password: <input type="password" name="password" /></label><br />
    <Button highlight="silver" type="submit">Login</Button>
  </form>
)
