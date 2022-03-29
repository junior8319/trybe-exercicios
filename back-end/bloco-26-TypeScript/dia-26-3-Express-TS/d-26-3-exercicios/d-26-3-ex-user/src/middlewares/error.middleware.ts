import { Request, Response } from "express";

export const handleError = (err: Error, req: Request, res: Response) => {
  const { name, message, details } = err as any;
  // console.log(err);

  switch (name) {
    case 'ValidationError':
      return res.status(400).json({ message: details[0].message });
    
    case 'NotFoundError':
      return res.status(404).json({ message });
    
    case 'ConflictError':
      return res.status(409).json({ message });
  
    default:
      console.log(err);
      return res.status(500).json({ message });
  }

};
