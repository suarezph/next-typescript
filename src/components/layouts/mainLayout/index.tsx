import type { ReactNode } from 'react'
import Header from './header'
import Navigation from './navigation'
import Footer from './footer'

export type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
