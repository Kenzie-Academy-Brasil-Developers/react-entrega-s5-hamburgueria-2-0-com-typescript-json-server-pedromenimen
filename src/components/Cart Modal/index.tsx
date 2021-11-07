import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CartComponent from "../Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@material-ui/core";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "bdbdbd",
  width: "max-content",
  minWidth: 200,
  overflow: "auto",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <ShoppingCartIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CartComponent />
        </Box>
      </Modal>
    </div>
  );
}
