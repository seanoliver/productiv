import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm.js";
import { TEST_TODOS } from './_testCommon.js';

const EDIT_FORM_DATA = TEST_TODOS[0];

describe("TodoForm tests", function() {
it('renders without crashing for new TodoForm', function () {
  render(
    <TodoForm handleSave={jest.fn()} />
  );
});

// smoke test for edit form
it('renders without crashing for edit TodoForm', function () {
  render(
    <TodoForm
    handleSave={jest.fn()}
    initialFormData={EDIT_FORM_DATA}
  />
  );
});

// snapshot test for new form
it('matches snapshot in new form', function () {
  const { container, debug } = render(
    <TodoForm handleSave={jest.fn()} />
  );

  expect(container).toMatchSnapshot();
});

// snapshot test for edit form
it('matches snapshot in edit form', function () {
  const { container, debug } = render(
    <TodoForm
    handleSave={jest.fn()}
    initialFormData={EDIT_FORM_DATA}
  />
  );

  expect(container).toMatchSnapshot();
});

// new form
// no prepopulated data
it('Matches initial state new form', function () {
  const { container, debug } = render(
    <TodoForm handleSave={jest.fn()} />
  );

  const title = container.querySelector("#newTodo-title");
  const description = container.querySelector("#newTodo-description");
  const priority = container.querySelector("#newTodo-priority");

  expect(title.value).toEqual("");
  expect(description.value).toEqual("");
  expect(priority.value).toEqual("2");
});

// when submitted, clears form data again


// edit form
// does passed title, description, priority match props


});
