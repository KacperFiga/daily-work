const generateId = () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
export default generateId;