export const createItem = function (
  title = "",
  dueDate = "",
  priority = "",
  description = ""
) {
  return { title, dueDate, priority, description };
};
