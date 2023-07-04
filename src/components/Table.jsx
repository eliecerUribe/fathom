import { DataGrid } from "@mui/x-data-grid";
import AddProductButton from "./AddProductButton";
import DeleteProductButton from "./DeleteProductButton";
import EditProductButton from "./EditProductButton";

const Table = ({ data = [], onDelete, onEdit, onAdd }) => {
  const tableColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "description", headerName: "Description", width: 700 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => {
        const { id } = row;

        return (
          <>
            <EditProductButton name="Edit" product={row} onEdit={onEdit} />
            <DeleteProductButton name="Delete" onDelete={() => onDelete(id)} />;
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <AddProductButton name="Add Product" onAdd={onAdd} />
      <DataGrid columns={tableColumns} rows={data} />
    </div>
  );
};

export default Table;
