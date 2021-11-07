import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import style from "./styles";
import InputAdornment from "@mui/material/InputAdornment";

const SearchComponent = () => {
  return (
    <Box sx={style}>
      <Box className="SearchContainer">
        <TextField
        disabled
          fullWidth
          margin="normal"
          variant="outlined"
          label="Digitar pesquisa"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                disabled
                className="Button">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default SearchComponent;
