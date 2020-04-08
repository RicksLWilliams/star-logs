import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentService";
import { BadRequest } from "../utils/Errors";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      .put('/:Id', this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove)
  }
  async getAll(_, res, next) {
    try {
      let comments = await commentsService.getAll()
      res.send(comments)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let comment = await commentsService.getById(req.params.Id)
      if (!comment) {
        throw new BadRequest("Invalid burger Id")
      }
      res.send(comment)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let comment = await commentsService.edit(req.params.Id, req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let comment = await commentsService.create(req.body)
      res.send(comment);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  
  async remove(req, res, next) {
    try {
      let comment = await commentsService.remove(req.params.Id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }


}