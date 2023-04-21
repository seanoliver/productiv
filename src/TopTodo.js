import React from 'react';

import Todo from './Todo';

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  if (todos.length === 0) return null; // so if no todos - will not show on page

	// lowest-priority # is the highest priority
	let top = todos.reduce(
		(acc, cur) => (cur.priority < acc.priority ? cur : acc),
		todos[0]
	);

	return (
		<Todo
			title={top.title}
			description={top.description}
			priority={top.priority}
			id={top.id}
		/>
	);
}

export default TopTodo;
