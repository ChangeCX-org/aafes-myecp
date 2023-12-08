import { Express,Request,Response } from "express";
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options :swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "MyECP API",
        version: "3.0.0",
        description: "MyECP API Doc"
      },
      components :{
        securitySchemas :{
            bearAuth :{
                type:'http',
                schema :'bearer',
                bearerFormat:'JWT',
            },
        },
      },
      security :[
        {
        bearerAuth :[],
        },
    ],
      servers: [
        {
          url: "http://localhost:3000"
        }
      ],
    },
    // swaggerOptions: {
    //   authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
    // },
    apis: ["./src/routes/*.ts"]
  }

  const swaggerSpecs =swaggerJsdoc(options);

  function swaggerDocs(app :Express){
    // swagger page 
    app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs));

    //Docs in Json format
    app.get("docs.json", (req:Request , res:Response)=>{
        res.setHeader("content-type","application/json");
        res.send(swaggerSpecs);
    });
  }
  

  export default swaggerDocs;