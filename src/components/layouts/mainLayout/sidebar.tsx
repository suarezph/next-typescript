import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { motion } from 'framer-motion'
import { SidebarData } from './menus/sidebarData'
import SubMenu, { SubMenuType } from './subMenu'

interface INav {
  isWide?: boolean
}

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`

const SidebarNav = styled(motion.nav)`
  background: #18171c;
  width: ${({ isWide }: INav) => (isWide ? '100%' : '250px')};
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;
`

const SidebarWrap = styled.div`
  width: 100%;
`
const Sidebar = () => {
  const [sidebar, setSidebar] = React.useState<boolean>(false)
  const [isWide, setIsWide] = React.useState<boolean>(false)
  const showSidebar = () => setSidebar(!sidebar)

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <>
      <Nav>
        <NavIcon>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav
        initial={{ left: '-100%' }}
        animate={{ left: !sidebar ? '-100%' : '0' }}
        isWide={isWide}
      >
        <SidebarWrap>
          <NavIcon>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData?.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  )
}

export default Sidebar
