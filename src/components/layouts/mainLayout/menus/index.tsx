import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import React from 'react'

export const sidebarMenu = [
  {
    icon: <HomeOutlinedIcon />,
    title: 'Home',
    items: [],
  },
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: 'Education',
    items: [
      {
        title: 'Technical Analysis',
        items: [
          {
            title: 'The Dow Theory',
            to: '/thedowtheory',
          },
          {
            title: 'Charts & Chart Patterns',
            to: '/chart',
          },
          {
            title: 'Trend & Trend Lines',
            to: '/trendlines',
          },
          {
            title: 'Support & Resistance',
            to: '/sandr',
          },
        ],
      },
      {
        title: 'Fundamental Analysis',
        items: [
          {
            title: 'The Dow Theory',
            to: '/thedowtheory',
          },
          {
            title: 'Charts & Chart Patterns',
            to: '/chart',
          },
          {
            title: 'Trend & Trend Lines',
            to: '/trendlines',
          },
          {
            title: 'Support & Resistance',
            to: '/sandr',
          },
        ],
      },
      {
        title: 'Elliot Wave Analysis',
        items: [
          {
            title: 'The Dow Theory',
            to: '/thedowtheory',
          },
          {
            title: 'Charts & Chart Patterns',
            to: '/chart',
          },
          {
            title: 'Trend & Trend Lines',
            to: '/trendlines',
          },
          {
            title: 'Support & Resistance',
            to: '/sandr',
          },
        ],
      },
    ],
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: 'Options',
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: 'Blog',
  },
]
