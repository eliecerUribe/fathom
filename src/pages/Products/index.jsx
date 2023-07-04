import { Box, Grid } from "@mui/material";
import Table from "../../components/Table";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const { products, onDelete, onEdit, onAdd } = useProducts();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container>
        <Grid item xs={10}>
          <Table
            data={products}
            onDelete={onDelete}
            onEdit={onEdit}
            onAdd={onAdd}
          />
          ;
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
