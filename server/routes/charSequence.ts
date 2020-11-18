import express from 'express'
const router = express.Router()
import { Request, Response } from 'express'
import { checkPalindromo, resolverSecuencias } from '../services'

router.post('/charSeq', (req: Request, res: Response): void => {
  
  const { palabra }: { palabra: string } = req.body
  
  checkPalindromo(palabra)
  resolverSecuencias(palabra)

  res.json({ resultado : resolverSecuencias(palabra) })
  console.log('El proceso finalizo sin errores')
})

export default router