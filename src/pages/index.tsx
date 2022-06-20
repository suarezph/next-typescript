import type { NextPage } from 'next'
import { Meta } from '@/components/metafields'
import { MainLayout } from '@/components/layouts'

const Homepage: NextPage = () => {
  return (
    <MainLayout>
      <Meta title="Homepage" />
      test
    </MainLayout>
  )
}

export default Homepage
