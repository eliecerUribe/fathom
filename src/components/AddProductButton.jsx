import { useState } from "react";
import { Button } from "@mui/material";
import FormProductModal from "./FormProductModal";

const AddProductButton = ({ name, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onClick = () => setIsOpen(true);

  return (
    <>
      <Button onClick={onClick}>{name}</Button>
      <FormProductModal open={isOpen} onClose={onClose} onAddProduct={onAdd} />
    </>
  );
};

export default AddProductButton;
