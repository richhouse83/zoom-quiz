import { render, screen } from "@testing-library/react";
import App from "./App";
const { jService } = require("./utils/jService");

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate/i);
  expect(linkElement).toBeInTheDocument();
});

describe("JService.getQuestion", () => {
  test("Returns a question", async () => {
    const question = await jService();

    expect(question).toEqual({
      id: expect.any(Number),
      answer: expect.any(String),
      question: expect.any(String),
      value: expect.any(Number),
      airdate: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String),
      category_id: expect.any(Number),
      game_id: null,
      invalid_count: null,
      category: {
        id: expect.any(Number),
        title: expect.any(String),
        created_at: expect.any(String),
        updated_at: expect.any(String),
        clues_count: expect.any(Number),
      },
    });
  });
});
