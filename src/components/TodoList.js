import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { deleteTask, checkTask } from "../actions/index";

const useStyles = {
  width: "100%",
  maxWidth: "360"
};

const TodoList = ({ dispatch, task, completed, id, styling }) => {
  return (
    <List style={useStyles}>
      <ListItem key={id} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            onClick={e => {
              e.preventDefault();
              dispatch(checkTask(id));
            }}
            inputProps={{
              "aria-labelledby": `checkbox-list-label-${task}`
            }}
          />
        </ListItemIcon>
        <ListItemText
          style={styling}
          id={`checkbox-list-label-${task}`}
          primary={task}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={e => {
              e.preventDefault();
              dispatch(deleteTask(id));
            }}
          >
            <Icon>delete</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default connect()(TodoList);

// export default function TodoList(props) {
//   const currentList = useUpdate(props.id);
//   const deleteList = useDelete(props.id);

//   return (
//     <List style={useStyles}>
//       <ListItem key={props.id} dense button>
//         <ListItemIcon>
//           <Checkbox
//             edge="start"
//             checked={props.completed}
//             onChange={currentList.onChange}
//             inputProps={{
//               "aria-labelledby": `checkbox-list-label-${props.task}`
//             }}
//           />
//         </ListItemIcon>
//         <ListItemText
//           style={props.styling}
//           id={`checkbox-list-label-${props.task}`}
//           primary={props.task}
//         />
//         <ListItemSecondaryAction>
//           <IconButton
//             edge="end"
//             aria-label="comments"
//             onClick={deleteList.onClick}
//           >
//             <Icon>delete</Icon>
//           </IconButton>
//         </ListItemSecondaryAction>
//       </ListItem>
//     </List>
//   );
// }

// function useUpdate(id) {
//   function handleUpdate() {
//     store.dispatch({
//       type: "COMPLETED",
//       id: id
//     });
//   }
//   return {
//     onChange: handleUpdate
//   };
// }

// function useDelete(id) {
//   // const [value, setValue] = setState("");
//   function handleDelete() {
//     store.dispatch({
//       type: "DELETE",
//       id: id
//     });
//     // setValue("");
//   }
//   return {
//     onClick: handleDelete
//   };
// }
