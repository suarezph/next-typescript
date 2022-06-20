import { useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { CustomTransparentButton } from '@/components/buttons'
import flagCN from '@/assets/img/flags/cn.svg'
import flagEN from '@/assets/img/flags/en.svg'

type langType = {
  [key: string]: { name: string; image: string }
}

export default function Locales() {
  const { locales, locale, push, pathname, asPath, query } = useRouter()
  const [currLang, currLangSet] = useState<string | null>(locale || null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const langOptions: langType = {
    en: { name: 'English', image: flagEN },
    cn: { name: '简体中文', image: flagCN },
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLang = (nextLocale: string) => {
    push({ pathname, query }, asPath, { locale: nextLocale })
    currLangSet(nextLocale)
  }

  return (
    <>
      <CustomTransparentButton
        disableRipple={true}
        onClick={handleClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ marginLeft: 1 }}
      >
        {currLang ? (
          <Image src={langOptions[currLang].image} width={25} height={25} />
        ) : null}
      </CustomTransparentButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 180,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {locales?.map(item => (
          <MenuItem key={item} onClick={() => changeLang(item)}>
            <Image src={langOptions[item].image} width={25} height={25} />
            <span style={{ paddingInlineStart: 10 }}>
              {langOptions[item].name}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
