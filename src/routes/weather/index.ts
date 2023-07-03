import type { FastifyPluginAsync } from "fastify";

const weather: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  /**
   * @swagger
   * tags:
   *   name: Weather
   *   description: Weather API routes
   */

  /**
   * @swagger
   * /weather:
   *   get:
   *     tags: [Weather]
   *     description: Returns weather data for the biggest cities in Brazil
   *     responses:
   *       200:
   *         description: List of forecasted weather data
   */
  fastify.get("/", async (_request, reply) => {
    void reply.send([
      {
        name: "Rio de Janeiro",
        today: { min: 24, max: 34 },
        week: [
          { day: "mon", min: 24, max: 34 },
          { day: "tue", min: 25, max: 35 },
          { day: "wed", min: 21, max: 31 },
          { day: "thu", min: 22, max: 32 },
          { day: "fri", min: 25, max: 35 },
        ],
      },
      {
        name: "São Paulo",
        today: { min: 22, max: 32 },
        week: [
          { day: "mon", min: 22, max: 32 },
          { day: "tue", min: 23, max: 33 },
          { day: "wed", min: 20, max: 30 },
          { day: "thu", min: 21, max: 31 },
          { day: "fri", min: 24, max: 34 },
        ],
      },
      {
        name: "Belo Horizonte",
        today: { min: 20, max: 30 },
        week: [
          { day: "mon", min: 20, max: 30 },
          { day: "tue", min: 21, max: 31 },
          { day: "wed", min: 18, max: 28 },
          { day: "thu", min: 19, max: 29 },
          { day: "fri", min: 22, max: 32 },
        ],
      },
      {
        name: "Brasília",
        today: { min: 26, max: 36 },
        week: [
          { day: "mon", min: 26, max: 36 },
          { day: "tue", min: 27, max: 37 },
          { day: "wed", min: 23, max: 33 },
          { day: "thu", min: 24, max: 34 },
          { day: "fri", min: 27, max: 37 },
        ],
      },
    ]);
  });
};

export default weather;
