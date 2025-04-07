export interface Template {
  id: string;
  name: string;
  description: string;
  file: string; // NEW: template file name
}

const templates: Template[] = [
  {
    id: "1",
    name: "Service Agreement",
    description: "A standard service agreement.",
    file: "service-agreement.hbs",
  },
  {
    id: "2",
    name: "NDA",
    description: "Non-disclosure agreement.",
    file: "nda.hbs",
  },
  {
    id: "3",
    name: "Employment Contract",
    description: "Contract for employment terms.",
    file: "employment.hbs",
  },
];

export const TemplateService = {
  getAll: () => {
    return templates;
  },

  getById: (id: string) => {
    const template = templates.find((t) => t.id === id);
    if (!template) {
      throw new Error(`Template with ID ${id} not found.`);
    }
    return template;
  },

  addTemplate: (template: Template) => {
    templates.push(template);
  },
};
