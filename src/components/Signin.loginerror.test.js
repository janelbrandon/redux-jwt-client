import React from 'react'
import renderer from 'react-test-renderer'
import Signin from './SignIn'

describe('Signin Snapshot', () => {
    it('Should render as expected with login error', () => {
        const tree = renderer.create(
            <Signin handleSignIn={() => { }} loginError="login error" />
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })

})