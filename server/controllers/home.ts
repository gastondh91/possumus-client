import { Request, Response } from 'express'

const home = (req: Request, res: Response) => {
  res.send("Hello");
}

export default home