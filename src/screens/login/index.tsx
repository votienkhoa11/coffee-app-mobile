import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoaderSelector } from '../../app/selector'
import LoginContainer from './loginContainer'

const LoginScreen = (props: any) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(LoaderSelector)
    const { navigation } = props

    const loginContainerProps = {
        dispatch,
        isLoading,
        navigation
    }

    return <LoginContainer {...loginContainerProps} />
}

export default LoginScreen