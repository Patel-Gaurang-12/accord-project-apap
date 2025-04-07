import { TemplateService } from "./template.service";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export const GenerationService = {
  generateDocument: (templateId: string, data: Record<string, any>) => {
    const template = TemplateService.getById(templateId);

    if (!template) {
      throw new Error(`Template with ID ${templateId} not found.`);
    }

    const filePath = path.join(__dirname, "..", "templates", template.file);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Template file not found: ${template.file}`);
    }

    const rawTemplate = fs.readFileSync(filePath, "utf-8");
    const compiledTemplate = handlebars.compile(rawTemplate);
    const result = compiledTemplate(data);

    TemplateService.addTemplate({
      id: templateId,
      name: template.name,
      description: template.description,
      file: template.file,
    });

    return result;
  },
};
