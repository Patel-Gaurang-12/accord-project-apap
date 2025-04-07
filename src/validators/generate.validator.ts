import { z } from "zod";

export const GenerateRequestSchema = z.object({
  templateId: z.string().min(1, "templateId is required"),
  data: z.record(z.any(), {
    required_error: "data is required",
    invalid_type_error: "data must be an object",
  }),
});
