import express from 'express'
import { Request, Response } from 'express'
import { resolverSecuencias } from '../services'
import chalk from 'chalk'
const router = express.Router()

router.post('/charSequence', (req: Request, res: Response): void => {
  const { palabra }: { palabra: string } = req.body

  const result = resolverSecuencias(palabra)

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')

  res.json(result)
  console.log(
    result.error
      ? chalk.redBright(result.error)
      : chalk.greenBright('El proceso finalizo sin errores')
  )
})

export default router
