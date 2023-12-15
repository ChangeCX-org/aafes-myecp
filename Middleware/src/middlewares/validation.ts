import { Request, Response, NextFunction, RequestHandler } from 'express';

interface ValidationError {
  message: string;
  type: string;
}

interface JoiError {
  status: String;
  error: {
    original: unknown;
    details: ValidationError[];
  };
}

const supportedMethods = ['post', 'put', 'patch', 'delete'];

const validationOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: false,
};

const schemaValidator = (schema: any): RequestHandler => {
  //Input schema is not recieved.
  if (!schema) {
    throw new Error('Schema not found.');
  }

  return (req: Request, res: Response, next: NextFunction) => {
    const method = req.method;

    //API method is not supported for schema validation.
    if (!supportedMethods.includes(method)) {
      next();
    }

    const { error, value } = schema.validate(req.body, validationOptions);
    console.log(value);

    //Validation failed.
    if (error) {
      const joiError: JoiError = {
        status: 'failed',
        error: {
          original: error._original,
          details: error.details.map(({ message, type }: ValidationError) => ({
            message: message.replace(/['"]/g, ''),
            type,
          })),
        },
      };

      return res.status(422).json(joiError);
    }

    //Validation successful.
    return next();
  };
};

export default schemaValidator;
