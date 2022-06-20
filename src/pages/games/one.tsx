import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import type { NextPage } from 'next'
import { Meta } from '@/components/metafields'
import { MainLayout } from '@/components/layouts'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale || 'en', ['common'])) },
  }
}

const GameOne: NextPage = props => {
  const { t, ready } = useTranslation()

  return (
    <MainLayout>
      <Meta title="GameOne" />
      <div>{ready && t('common:title')}</div>
    </MainLayout>
  )
}

export default GameOne
