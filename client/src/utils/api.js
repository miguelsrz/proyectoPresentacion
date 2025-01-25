const apiURL = import.meta.env.VITE_API_URL;

export const fetchModules = async () => {
  const response = await fetch(`${apiURL}/modules`);
  if (!response.ok) throw new Error("Error al cargar los módulos");
  return response.json();
};

export const fetchModuleById = async (moduleId) => {
  const response = await fetch(`${apiURL}/modules/${moduleId}`);
  if (!response.ok) throw new Error("Error al cargar el módulo");
  return response.json();
};

export const fetchSectionById = async (moduleId, sectionId) => {
  const response = await fetch(`${apiURL}/modules/${moduleId}/sections/${sectionId}`);
  if (!response.ok) throw new Error("Error al cargar la sección");
  return response.json();
};