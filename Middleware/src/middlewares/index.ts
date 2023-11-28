import { Request, Response, NextFunction } from 'express';

export const controllerWrapper = (controller: Function) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const request = { body: req.body, query: req.query, params: req.params, headers: req.headers };
      const response = await controller(request);
      res.status(response.status).send(response);
    } catch (error) {
      console.log(error);
      res.status(409).send(error);
    }
  };
};
