import React from 'react'
import styles from './DetailPage.module.css'
import {} from 'antd'
import { useParams } from 'react-router-dom'

export const DetailPage: React.FC = () => {
    const params = useParams()
    return <h1>旅游路线详情页面，路线ID：{params.touristRouteId}</h1>
}
