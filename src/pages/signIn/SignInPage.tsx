import React from 'react'
import styles from './SignInPage.module.css'
import {} from 'antd'
import { useMatch, useLocation, useNavigate } from 'react-router-dom'

export const SignInPage: React.FC = () => {
    const math = useMatch('/signIn')
    const location = useLocation()
    const navigate = useNavigate()
    return <h1>登录页面</h1>
}
