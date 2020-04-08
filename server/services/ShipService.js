import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {

  async getAll(query = {}) {
    let ships = await dbContext.Ships.find(query);
    return ships;
  }

  async getById(id) {
    let ship = await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }

  async edit(Id, body) {
    let ship = await dbContext.Ships.findByIdAndUpdate(Id, body, { new: true })
    return ship
  }


  async create(body) {
    let ship = await dbContext.Ships.create(body)
    return ship
  }

  async remove(Id) {
    let ship = await dbContext.Ships.findByIdAndDelete(Id)
    return ship
  }


  async find(query={}) {
    let values = await dbContext.Ships.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Ships.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const shipsService = new ShipsService();