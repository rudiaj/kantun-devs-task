import { create } from "../../../db/queries";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, genre, rating, explicit } = request.body;

    try {
      const [newMovie] = await create({ name, genre, rating, explicit });

      return response.status(201).json(newMovie);
    } catch (error) {
      return response.status(400).json(`Error ${error}`);
    }
  }
}
