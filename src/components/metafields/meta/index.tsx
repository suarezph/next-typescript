import { default as NextHead } from 'next/head'

export type SeoProps = {
  title: string
  metaName?: string
  metaProperty?: string
}

export default function Meta({
  title,
  metaName = 'MetaName HashGameHub',
  metaProperty = 'MetaProperty HashGameHub',
}: SeoProps) {
  return (
    <NextHead>
      <title>HashGameHub - {title}</title>
      <meta name="description" content={metaName} />
      <meta property="og:title" content={metaProperty} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
