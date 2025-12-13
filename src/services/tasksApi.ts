const BASE_URL = "https://api.npoint.io/55d2a96ad4842d6fba44";

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
