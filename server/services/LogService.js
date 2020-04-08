import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class LogsService {

  async getAll(query = {}) {
    let logs = await dbContext.Logs.find(query);
    return logs;
  }

  async getById(id) {
    let log = await dbContext.Logs.findById(id);
    if (!log) {
      throw new BadRequest("Invalid Id");
    }
    return log;
  }

  async edit(Id, body) {
    let log = await dbContext.Logs.findByIdAndUpdate(Id, body, { new: true })
    return log
  }


  async create(body) {
    let log = await dbContext.Logs.create(body)
    return log
  }

  async remove(Id) {
    let log = await dbContext.Logs.findByIdAndDelete(Id)
    return log
  }


  async find(query={}) {
    let values = await dbContext.Logs.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Logs.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const logsService = new LogsService();