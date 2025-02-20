import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";
import { z } from "zod";

const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: true,
});


app.post("/subscribers", {
    schema: {
         
    }
}, () => {
  return;
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server running");
});
