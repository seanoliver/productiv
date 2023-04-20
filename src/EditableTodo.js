import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - editing: boolean in editing state or not
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [editing, setEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    const isEditing = editing ? false : true;
    setEditing(isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete(evt) {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData });
    toggleEdit();
  }

  return (
    <div className="EditableTodo">
      {editing === true &&
        <TodoForm
          handleSave={handleSave}
          initialFormData={todo}
        />}
      {editing === false &&
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
          />
        </div>}
    </div>
  );
}

export default EditableTodo;
