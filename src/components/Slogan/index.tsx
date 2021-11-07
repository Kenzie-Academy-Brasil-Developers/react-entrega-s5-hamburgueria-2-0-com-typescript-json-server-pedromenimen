import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import style from "./styles";

const Slogan = () => {
  return (
    <Box sx={style}>
      <Box className="LocalMallOutlinedIconContainer">
        <LocalMallOutlinedIcon  />
      </Box>
      <Box className="SloganContainer">
        <Typography>
          A vida é como um sanduíche, é preciso recheá-la com os
          <strong> melhores </strong>
          ingredientes.
        </Typography>
      </Box>
    </Box>
  );
};

export default Slogan;
