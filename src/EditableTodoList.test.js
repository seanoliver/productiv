import { render, fireEvent } from '@testing-library/react';
import EditableTodoList from './EditableTodoList.js';
import { TEST_TODOS } from './_testCommon.js';

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