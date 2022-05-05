import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
    return (
        <Menu mode="vertical" className={styles['side-menu']}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={
                        <span>
                            <GifOutlined></GifOutlined>
                            {m.title}
                        </span>
                    }
                >
                    {/* 第二级菜单 */}
                    {m.subMenu.map((sm, smindex) => (
                        <Menu.SubMenu
                            key={`sub-menu-${smindex}`}
                            title={
                                <span>
                                    <GifOutlined></GifOutlined>
                                    {sm.title}
                                </span>
                            }
                        >
                            {/* 第三级菜单 */}
                            {sm.subMenu.map((sms, smsindex) => (
                                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                                    <span>
                                        <GifOutlined></GifOutlined>
                                        {sms}
                                    </span>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}
