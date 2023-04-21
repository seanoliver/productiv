import { render, fireEvent } from '@testing-library/react';
import EditableTodoList from './EditableTodoList.js';

const TEST_TODOS = [{
	id: 'im-an-id',
	title: 'Test title',
	description: 'Test description',
	priority: 1,
},
{
	id: 'im-also-an-id',
	title: 'Test title 2',
	description: 'Test description 2',
	priority: 1,
},
{
	id: 'me-too',
	title: 'Test title 3',
	description: 'Test description 3',
	priority: 1,
}];

describe('EditableTodoList', function () {
	it('renders without crashing', function () {
		render(
			<EditableTodoList
				todos={TEST_TODOS}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
	});

	it('matches snapshot in non-editing state', function () {
		const { container, debug } = render(
			<EditableTodoList
				todos={TEST_TODOS}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
		expect(container).toMatchSnapshot();
	});

  it('renders the correct number of EditableTodo components', function () {
		const { container, debug } = render(
			<EditableTodoList
				todos={TEST_TODOS}
				update={jest.fn()}
				remove={jest.fn()}
			/>
		);
    expect(container.querySelectorAll('.EditableTodo').length).toEqual(3);
    });

	});