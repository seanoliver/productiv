import { render, fireEvent } from '@testing-library/react';
import EditableTodo from './EditableTodo.js';

const TEST_TODO = {
	id: 'im-an-id',
	title: 'Test title',
	description: 'Test description',
	priority: 1,
};

describe('EditableToDo', function () {
	it('renders without crashing', function () {
		render(
			<EditableTodo
				todo={TEST_TODO}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
	});

	it('matches snapshot in non-editing state', function () {
		const { container, debug } = render(
			<EditableTodo
				todo={TEST_TODO}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
		expect(container).toMatchSnapshot();
	});

  it('matches snapshot in editing state', function () {
		const { container, debug } = render(
			<EditableTodo
				todo={TEST_TODO}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
    fireEvent.click(container.querySelector('.EditableTodo-toggle'));
		expect(container).toMatchSnapshot();
	});

	it('toggles between todo and form', function () {
    const { container, debug } = render(
			<EditableTodo
				todo={TEST_TODO}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);

    expect(container.querySelector('.Todo')).toBeInTheDocument();
    expect(container.querySelector('.TodoForm')).not.toBeInTheDocument();

    fireEvent.click(container.querySelector('.EditableTodo-toggle'));

    expect(container.querySelector('.Todo')).not.toBeInTheDocument();
    expect(container.querySelector('.NewTodoForm')).toBeInTheDocument();

	});
});