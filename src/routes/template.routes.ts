import { Router } from "express";
import { TemplateService } from "../services/template.service";

const router = Router();

router.get("/", (_req, res) => {
  const templates = TemplateService.getAll();
  res.json(templates);
});

export default router;
