import React from 'react'
import renderer from 'react-test-renderer'
import Signin from './SignIn'

it('Should render as expected without login error', () => {
    const tree = renderer.create(
        <Signin handleSignIn={() => { }} loginError={null} />
    )
    expect(tree.toJSON()).toMatchSnapshot()
})