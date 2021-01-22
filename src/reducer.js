const initialState = {
  tasks: [
    {
      task: "something new 0",
      completed: false,
      styling: {
        textDecoration: "none"
      }
    },
    {
      task: "something new 1",
      completed: false,
      styling: {
        textDecoration: "none"
      }
    },
    {
      task: "something new 2",
      completed: false,
      styling: {
        textDecoration: "none"
      }
    },
    {
      task: "something new 3",
      completed: false,
      styling: {
        textDecoration: "none"
      }
    },
    {
      task: "something new 4",
      completed: false,
      styling: {
        textDecoration: "none"
      }
    }
  ],
  value: ""
};
export default function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    return Object.assign({}, state, {
      tasks: [
        ...state.tasks,
        {
          task: action.task,
          completed: false
        }
      ],
      value: ""
    });
  } else if (action.type === "DELETE") {
    return Object.assign({}, state, {
      tasks: state.tasks.filter((elem, i) => i !== action.id)
    });
  } else if (action.type === "COMPLETED") {
    return Object.assign({}, state, {
      tasks: state.tasks.map((elem, i) => {
        return i === action.id
          ? Object.assign(elem, {
              completed: !elem.completed,
              styling: {
                textDecoration: !elem.completed ? "line-through" : "none"
              }
            })
          : elem;
      })
    });
  }
  return state;
}
