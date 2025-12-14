export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const validateTitle = (title: string) => {
  return title.trim().length > 0;
};

export const validateDescription = (description: string) => {
  return description.trim().length > 3;
};

export const validateDueDate = (dueDate: string) => {
  return dueDate.trim().length > 0;
};

export const validateStatus = (status: string) => {
  const validStatuses = ["to do", "in progress", "done"];
  return validStatuses.includes(status);
};
