import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const FormProductModal = ({
  open,
  onClose,
  onAddProduct,
  selectedProduct = null,
  isEditMode = false,
}) => {
  const [product, setProduct] = useState(
    isEditMode && selectedProduct
      ? { ...selectedProduct }
      : {
          title: "",
          price: 0,
          description: "",
        }
  );
  const [errors, setErrors] = useState({});
  const modalTitle = isEditMode ? "Edit Product" : "Add New Product";
  const submitName = isEditMode ? "Save" : "Add";

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};

      if (product.title.trim() === "") {
        newErrors.title = "Title is required";
      }

      if (product.price === 0) {
        newErrors.price = "Price must be greater than zero";
      }

      if (product.description.trim() === "") {
        newErrors.description = "Description is required";
      }

      setErrors(newErrors);
    };

    validateForm();
  }, [product]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    const newProduct = {
      ...product,
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    };

    if (isEditMode) {
      onAddProduct(product.id, newProduct);
    } else {
      onAddProduct(newProduct);
    }
    onClose();
    setProduct({
      title: "",
      price: 0,
      description: "",
    });
    setErrors({});
  };

  const handleOnClose = () => {
    onClose();
    setProduct({
      title: "",
      price: 0,
      description: "",
    });
    setErrors({});
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>
        <TextField
          name="title"
          autoFocus
          margin="dense"
          label="Title"
          value={product.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
          fullWidth
        />
        <TextField
          name="price"
          margin="dense"
          label="Price"
          value={product.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          fullWidth
        />
        <TextField
          name="description"
          margin="dense"
          label="Description"
          value={product.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          multiline
          rows={3}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button
          onClick={handleAddProduct}
          disabled={Object.keys(errors).length > 0}
        >
          {submitName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormProductModal;
