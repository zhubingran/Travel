import React from 'react'
import styles from './ProductImage.module.css'
import { Image, Typography } from 'antd'
import { useNavigate, Link } from 'react-router-dom'

interface PropsType {
    id: string | number
    size: 'large' | 'small'
    imageSrc: string
    title: string
    price: string | number
}

export const ProductImage: React.FC<PropsType> = ({
    id,
    size,
    title,
    imageSrc,
    price
}) => {
    return (
        <Link to={`detail/${id}`}>
            <div>
                {size === 'large' ? (
                    <Image src={imageSrc}></Image>
                ) : (
                    <Image src={imageSrc}></Image>
                )}
            </div>
            <div>
                <Typography.Text type="secondary">
                    {title.slice(0, 25)}
                </Typography.Text>
                <Typography.Text type="warning" strong>
                    {price}
                </Typography.Text>
            </div>
        </Link>
    )
}
