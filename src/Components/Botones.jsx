import { Button, Typography } from "@mui/material/";
const Botones = () => {
  return (
    <>
    


      <Typography
        variant="h3"
        component={"div"}
        color={"primary"}
        mt={2}
        mb={5}
        align="center"
      >
        Estilos de Botones MUI
      </Typography>
      <div>
        <Button variant="text">Text</Button>
      </div>
      
    </>
  );
};

export default Botones;
