import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import SearchContext from "../../store/searchContext";
import { useContext } from "react"
import { toast } from "react-toastify";



// const initialDataFromServer = [];

//https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards
const HomePage = () => {
  const { search } = useContext(SearchContext);
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);
  if (!dataFromServer || !dataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }

  let result;
  if (search === null || search === '') {
    result = [...dataFromServer];
  } else {
    result = [...dataFromServer.filter(card => {
      return card.title.includes(search.toLowerCase()) || card.subtitle.includes(search.toLowerCase())
    })];
    /*  result = [...dataFromServer.filter(card => {
       const sres = card.title.toLowerCase(); // Convert to lowercase
       return sres.includes(search.toLowerCase()); // Convert s term to lowercase
     })]; */

    if (result.length === 0) {
      toast.error("no matching card found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleDeleteCard = (id) => {
    console.log("father: card to delete", id);
    setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card._id !== id)
    );
  };

  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {result.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
