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
  return (
    <Card square raised>
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
        </Box>
      </CardContent>
    </Card>



  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
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
/* 
import React, { useState } from 'react';
import './CardDisplay.css'; // Import your CSS file for styling

const cardsData = [
  { id: 1, title: 'Card 1', content: 'Content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Content for Card 3' },
  // Add more cards as needed
];

const CardDisplay = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-display">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedCard === card.id ? 'selected' : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}

      {selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <h2>{cardsData.find((card) => card.id === selectedCard).title}</h2>
            <p>{cardsData.find((card) => card.id === selectedCard).content}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
 */

