import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {

  async getAll(query = {}) {
    let comments = await dbContext.Comments.find(query);
    return comments;
  }

  async getById(id) {
    let comment = await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }

  async edit(Id, body) {
    let comment = await dbContext.Comments.findByIdAndUpdate(Id, body, { new: true })
    return comment
  }


  async create(body) {
    let comment = await dbContext.Comments.create(body)
    return comment
  }

  async remove(Id) {
    let comment = await dbContext.Comments.findByIdAndDelete(Id)
    return comment
  }


  async find(query={}) {
    let values = await dbContext.Comments.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Comments.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const commentsService = new CommentsService();