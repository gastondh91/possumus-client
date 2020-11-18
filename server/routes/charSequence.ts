import express from 'express'
import { Request, Response } from 'express'
import { checkPalindromo, resolverSecuencias } from '../services'
import chalk from 'chalk'
const router = express.Router()

router.post('/charSeq', (req: Request, res: Response): void => {
  
  const { palabra }: { palabra: string } = req.body
  
  checkPalindromo(palabra)
  resolverSecuencias(palabra)

  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.json({ resultado : resolverSecuencias(palabra) })
  console.log(chalk.greenBright('El proceso finalizo sin errores'))
})

export default router