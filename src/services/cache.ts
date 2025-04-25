export const get = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error("Error getting value from localStorage", error);
  }
  return null;
};

export const set = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
