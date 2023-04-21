import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo.js";
import { TEST_TODOS } from './_testCommon.js';

const TEST_TODO = TEST_TODOS[0];

it("renders without crashing", function () {
  render(<Todo
    id={TEST_TODO.id}
    title={TEST_TODO.title}
    description={TEST_TODO.description}
    priority={TEST_TODO.priority}
  />);
});

it("matches snapshot", function () {
  const { container, debug } = render(<Todo
    id={TEST_TODO.id}
    title={TEST_TODO.title}
    description={TEST_TODO.description}
    priority={TEST_TODO.priority}
  />);
  expect(container).toMatchSnapshot();
});

// make sure title, description, priority are on page
it("has the correct title", function () {
  const { container, debug } = render(<Todo
    id={TEST_TODO.id}
    title={TEST_TODO.title}
    description={TEST_TODO.description}
    priority={TEST_TODO.priority}
  />);

  const title = container.querySelector(".Todo-title");

  expect(title.textContent).toMatch("Test title");
});

it("has the correct description", function () {
  const { container, debug } = render(<Todo
    id={TEST_TODO.id}
    title={TEST_TODO.title}
    description={TEST_TODO.description}
    priority={TEST_TODO.priority}
  />);

  const description = container.querySelector(".Todo-description");

  expect(description.textContent).toMatch("Test description");
});

it("has the correct priority", function () {
  const { container, debug } = render(<Todo
    id={TEST_TODO.id}
    title={TEST_TODO.title}
    description={TEST_TODO.description}
    priority={TEST_TODO.priority}
  />);

  const priority = container.querySelector(".Todo-priority");

  expect(priority.textContent).toMatch("1");
});

