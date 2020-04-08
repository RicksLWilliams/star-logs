import express from "express";
import BaseController from "../utils/BaseController";
import { shipsService } from "../services/ShipService";
import { BadRequest } from "../utils/Errors";

export class ShipsController extends BaseController {
  constructor() {
    super("api/ships");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      .put('/:Id', this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove)
  }
  async getAll(_, res, next) {
    try {
      let ships = await shipsService.getAll()
      res.send(ships)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let ship = await shipsService.getById(req.params.Id)
      if (!ship) {
        throw new BadRequest("Invalid burger Id")
      }
      res.send(ship)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let ship = await shipsService.edit(req.params.Id, req.body)
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let ship = await shipsService.create(req.body)
      res.send(ship);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  
  async remove(req, res, next) {
    try {
      let ship = await shipsService.remove(req.params.Id)
      res.send(ship)
    } catch (error) {
      next(error)
    }
  }


}