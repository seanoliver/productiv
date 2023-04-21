import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo.js";
import { TEST_TODOS } from './_testCommon.js';


describe("TopTodo tests", function () {
  it("renders without crashing", function () {
   render(<TopTodo todos={TEST_TODOS} />);
  });

  it("matches snapshot with todos", function () {
    const { container, debug } = render(<TopTodo todos={TEST_TODOS} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot no todos", function () {
    const { container, debug } = render(<TopTodo todos={[]} />);

    expect(container).toMatchSnapshot();
  });

  it("has the correct title", function () {
    const { container, debug } = render(<TopTodo todos={TEST_TODOS} />);

    const title = container.querySelector(".Todo-title");

    expect(title.textContent).toMatch("Test title");
  });

  it("has the correct description", function () {
    const { container, debug } = render(<TopTodo todos={TEST_TODOS} />);

    const description = container.querySelector(".Todo-description");

    expect(description.textContent).toMatch("Test description");
  });

  it("has the correct priority", function () {
    const { container, debug } = render(<TopTodo todos={TEST_TODOS} />);


    const priority = container.querySelector(".Todo-priority");

    expect(priority.textContent).toMatch("1");
  });

  // test no todos doesn't show top todos
  it("No TopTodo when no todos", function () {
    const { container, debug } = render(<TopTodo todos={[]} />);

    expect(container.querySelector(".TopTodo")).not.toBeInTheDocument();
  });

});