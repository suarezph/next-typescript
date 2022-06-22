import React from 'react'
import type { ReactNode } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 3',
        path: '/reports/report3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    subNav: [
      {
        title: 'Messages',
        path: '/messages/messages',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Messages 2',
        path: '/messages/messages',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Messages 3',
        path: '/messages/messages',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
]
