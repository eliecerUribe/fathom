import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ConfirmDeleteModal = ({ open, onClose, onConfirm }) => {
  const handleDelete = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this product?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
