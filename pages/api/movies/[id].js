import { deleteOne, getOne, update } from "../../../db/queries";

const handler = async (request, response) => {
  if (request.method === "GET") {
    try {
      const movie = await getOne(request.query.id);
      return response.json(movie).end();
    } catch (error) {
      return response.status(400).json(`Error ${error}`).end();
    }
  }
  if (request.method === "PUT") {
    try {
      const [updatedMovie] = await update(request.query.id, request.body);
      return response.status(200).json(updatedMovie).end();
    } catch (error) {
      return response.status(400).json(`Error ${error}`).end();
    }
  }
  if (request.method === "DELETE") {
    try {
      await deleteOne(request.query.id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(`Error ${error}`).end();
    }
  }

  return response.status(404).end();
};

export default handler;
