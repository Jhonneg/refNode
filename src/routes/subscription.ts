import z from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const subscriptionsToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["subscription"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    async (req, res) => {
      const { name, email } = req.body;

      return res.status(201).send({
        name,
        email,
      });
    }
  );
};
