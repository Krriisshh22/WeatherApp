import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/1296441088/photo/death-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=Adi2flWXyutkjMNeNh5LZd1Z4hG01sjX6QAe7JLhbLo=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvZ2d5fGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             <p> {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon /> : <AcUnitIcon />}</p>
              
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature : {info.temp}&deg;C</div>
              <div>Minimum Temperature : {info.tempMin}&deg;C</div>
              <div>Maximum Temperature : {info.tempMax}&deg;C</div>
              <div>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
