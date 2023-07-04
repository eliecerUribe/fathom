import { useState } from "react";
import { Button } from "@mui/material";
import FormProductModal from "./FormProductModal";

const EditProductButton = ({ name, product, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onClick = () => setIsOpen(true);

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={onClick}>
        {name}
      </Button>
      <FormProductModal
        open={isOpen}
        onClose={onClose}
        onAddProduct={onEdit}
        selectedProduct={product}
        isEditMode
      />
    </>
  );
};

export default EditProductButton;
