import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders the table component correctly", () => {
  const data = [
    {
      id: 1,
      title: "Product 1",
      price: 10.99,
      description: "Product description 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      description: "Product description 2",
    },
  ];
  const onDelete = jest.fn();
  const onEdit = jest.fn();

  render(<Table data={data} onDelete={onDelete} onEdit={onEdit} />);

  const tableRows = screen.getAllByRole("row");
  expect(tableRows.length).toBe(data.length + 1); // +1 for the header row
});
