const BASE_URL = "https://tasks.free.beeceptor.com";

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
