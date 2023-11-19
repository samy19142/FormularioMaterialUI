import {
    Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Form = () => {
  return (
    <Container
    component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
    <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <EmailOutlinedIcon sx={{
      fontSize:'50px',
      borderRadius:15,
      background: 'radial-gradient(circle at 87.5% 12.5%, #ff00ff 0, #ff00ff 12.5%, #ff00ff 25%, #f90eff 37.5%, #c81ef3 50%, #9624e3 62.5%, #6428d4 75%, #212ac6 87.5%, #002ab8 100%)'
    }}/>  
 <Box component={'form'} sx={ {width:600,p:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
  
<Grid container spacing={2}>    

    <Grid item xs={12} sm={4}>
      <FormControl>
        <TextField
          id="name"
          label='Nombre'
        />
      </FormControl>
    </Grid>

    <Grid item xs={12} sm={4}>
      <FormControl>
      <TextField
          id="last_name"
          label='Apellido'
        />
      </FormControl>
    </Grid>

    <Grid item xs={12} sm={4}>
      <FormControl>
          <InputLabel htmlFor="age">Edad</InputLabel>
          <Input id="name" type="number" aria-describedby="name-helper" />
          <FormHelperText id="name-helper">Ingresa tú edad</FormHelperText>
      </FormControl>
    </Grid>

    <Grid item  xs={12} sm={6}>
      <FormControl>
          <FormLabel id="gender">Género</FormLabel>
          <RadioGroup
              aria-labelledby="gender"
              defaultValue={'Female'}
              name="gender-group"
          >
          <FormControlLabel value={'female'} control={<Radio/>} label='Femenino'/>
          <FormControlLabel value={'male'} control={<Radio/>} label='Masculino'/>
          </RadioGroup>
      </FormControl>
    </Grid>

    <Grid item  xs={12} sm={6}>
      <FormControl sx={{m:1,minWidth:190}}>
          <InputLabel id='level'>Nivel de estudios</InputLabel>
          <Select
              labelId="level"
              id="level"
              label='Seleccione'
          >
              <MenuItem value=''><em>Ninguno</em></MenuItem>
              <MenuItem value='level1'>Primaria</MenuItem>
              <MenuItem value='level2'>Básicos</MenuItem>
              <MenuItem value='level3'>Diversificado</MenuItem>
          </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12} sm={6}>
      <FormControl>
        <TextField
          id="user"
          label='Usuario'
        />
      </FormControl>
    </Grid>

    <Grid item xs={12} sm={6}>
      <FormControl>
        <TextField
        fullWidth
          id="password"
          label='Contraseña'
          type="password"
        />
      </FormControl>
    </Grid>

    <Button variant="contained" color="primary" fullWidth>
          Iniciar Sesión
        </Button>
  
</Grid>
</Box>
</Paper>
    </Container>
   
  );
};

export default Form;
