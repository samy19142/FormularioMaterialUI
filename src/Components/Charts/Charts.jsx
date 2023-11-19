import Chart from "react-google-charts";
import { options, Productos ,optionsPie} from "./data";
import { Grid } from "@mui/material";

const Charts = () => {

  const data =[
    ['Producto','Precio'],
    ...Productos.map((item)=>[item.nombre,item.precio])
  ]
  console.log(data)
  

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={6} md={6}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} >
        <Chart
          chartType="PieChart"
          data={data}
          options={optionsPie}
          width={"100%"}
          height={"400px"}
        />
      </Grid>
    </Grid>
  );
};

export default Charts;
