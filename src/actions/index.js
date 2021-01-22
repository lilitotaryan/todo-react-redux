let id = 0;
export const addTask = task => ({
  type: "ADD",
  id: id++,
  task
});

export const deleteTask = id => ({
  type: "DELETE",
  id: id
});

export const checkTask = id => ({
  type: "COMPLETED",
  id: id
});
