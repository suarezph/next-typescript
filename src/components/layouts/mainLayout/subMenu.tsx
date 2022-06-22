import React from 'react'
import styled from 'styled-components'

const SidebarLink = styled.a`
  display: flex;
  color: #e1e0fc;
  justify-content: space-between;
  align-items: center;
`

const SidebarLabel = styled.span`
  display: inline;
`

export type SubMenuType = {
  item: {
    title: string
    path: string
    icon: JSX.Element
    iconClosed: JSX.Element
    iconOpened: JSX.Element
    subNav: {
      title: string
      path: string
      icon: JSX.Element
    }[]
  }
}

const SubMenu: React.FC<SubMenuType> = props => {
  const { item } = props

  return (
    <>
      <SidebarLink href={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  )
}

export default SubMenu
