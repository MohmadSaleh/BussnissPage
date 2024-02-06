import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useState } from "react";
import "./componetsCss/popupstyle.css";
import Map from "./mapComponent";
/**
 * title -> title
 * subtitle -> subheader
 */
const CardComponent = ({
  title,
  subtitle,
  img,
  phone,
  address,
  cardNumber,
  id,
  onDelete,
  onEdit,
}) => {
  const handleDeleteClick = () => {
    console.log("Clicked on delete", id);
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
  };




  const [popup, setPopup] = useState(false);

  const handleCardClick = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add('active-popup')
  } else {
    document.body.classList.remove('active-popup')
  }


  return (
    <Card square raised
      onClick={handleCardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="american massle car"
          height={200}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        {/*  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <ModeIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box> */}
      </CardContent>
      {popup && (
        <div className="popup">
          <div onClick={handleCardClick} className="overlay"></div>
          <div className="popup-content">
            <h2>Hello popup</h2>
            <CardActionArea
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={img}
                alt="business card image"
                height={300}
              />
              <CardHeader title={title} subheader={subtitle} ></CardHeader>
              <Map cityName={address.city} />
            </CardActionArea>

            <Divider></Divider>
            <CardContent>
              <Typography>
                <Typography component="span" fontWeight={700}>
                  Phone:
                </Typography>
                {phone}
              </Typography>
              <Typography>
                <Typography component="span" fontWeight={700}>
                  Address:
                </Typography>
                <Typography component="div" fontWeight={500}>
                  City:{address.country}
                </Typography>
                <Typography component="div" fontWeight={500}>
                  City:{address.city}
                </Typography>
                <Typography component="div" fontWeight={500} >
                  Street:{address.street}
                </Typography>
              </Typography>

            </CardContent>
            <button className="close-popup" onClick={handleCardClick}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </Card>



  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
};

CardComponent.defaultProps = {
  img: "/assets/imgs/car 1.jpg",
  subtitle: "subtitle default",
};

export default CardComponent;

