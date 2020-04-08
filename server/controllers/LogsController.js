import express from "express";
import BaseController from "../utils/BaseController";
import { logsService } from "../services/LogService";
import { BadRequest } from "../utils/Errors";

export class LogsController extends BaseController {
  constructor() {
    super("api/logs");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      .put('/:Id', this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove)
  }
  async getAll(_, res, next) {
    try {
      let logs = await logsService.getAll()
      res.send(logs)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let log = await logsService.getById(req.params.Id)
      if (!log) {
        throw new BadRequest("Invalid burger Id")
      }
      res.send(log)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let log = await logsService.edit(req.params.Id, req.body)
      res.send(log)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let log = await logsService.create(req.body)
      res.send(log);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  
  async remove(req, res, next) {
    try {
      let log = await logsService.remove(req.params.Id)
      res.send(log)
    } catch (error) {
      next(error)
    }
  }


}