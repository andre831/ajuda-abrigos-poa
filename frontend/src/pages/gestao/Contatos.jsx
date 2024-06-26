import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Contatos = () => {
  const styles = {
    fontSize: "10px",
    textAlign: "center",
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" p={3} fontWeight={200}>
        Contatos

      </Typography>
    </Box>
  );
};

export default Contatos;
