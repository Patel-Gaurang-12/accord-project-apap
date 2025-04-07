import { Router } from "express";
import { GenerationService } from "../services/generation.service";
import { GenerateRequestSchema } from "../validators/generate.validator";

const router = Router();

router.post("/", (req: any, res: any) => {
  const parseResult = GenerateRequestSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parseResult.error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  const { templateId, data } = parseResult.data;

  try {
    const doc = GenerationService.generateDocument(templateId, data);
    res.status(200).json({
      status: "success",
      generatedDocument: doc,
    });
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export default router;
