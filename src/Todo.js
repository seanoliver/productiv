import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({id, title, description, priority}) {
  return (
      <div className="Todo">
        <div>
          <b className="Todo-title">{title}</b>
          <small className="Todo-priority">(priority: {priority})</small>
        </div>
        <div><small className="Todo-description">{description}</small></div>
      </div>
  );
}

export default Todo;
