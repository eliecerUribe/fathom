import { useState } from "react";
import { Button } from "@mui/material";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const DeleteProductButton = ({ name, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onClick = () => setIsOpen(true);

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={onClick}>
        {name}
      </Button>
      <ConfirmDeleteModal
        open={isOpen}
        onClose={onClose}
        onConfirm={onDelete}
      />
    </>
  );
};

export default DeleteProductButton;
