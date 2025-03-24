import {
  cleanup,
  render,
} from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders Main App Component", () => {
  render(<App />);
});

