"use strict";
import express from "express";
import {
  getCategory,
  getAll,
  getNameByCategoryID,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/category", getCategory);
categoryRouter.get("/category/all/:page", getAll);
categoryRouter.get("/category/name/:id", getNameByCategoryID);

export default categoryRouter;
