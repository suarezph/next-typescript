// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fsPromises from 'fs/promises'
import path from 'path'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const selected = req.headers['accept-language'] || 'en'
  const cnData = path.join(process.cwd(), `/locales/${selected}.json`)
  const jsonCNData = await fsPromises.readFile(cnData)
  const objectData = JSON.parse(jsonCNData.toString())

  res.status(200).json(objectData)
}
