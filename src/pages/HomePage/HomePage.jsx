import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import SearchContext from "../../store/searchContext";
import { useContext } from "react"
import LoginContext from "../../store/loginContext";
import { toast } from "react-toastify";
import normalizeHome from "./NormlizeHome";



// const initialDataFromServer = [];

//https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards
const HomePage = () => {
  const { search } = useContext(SearchContext);
  const { login } = useContext(LoginContext);
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);
  const dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

  let result;
  if (search === null || search === '') {
    result = [...dataFromServerFiltered];
  } else {
    result = [...dataFromServerFiltered.filter(card => {
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

  const handleDeleteCard = async (id) => {
    try {
      let { data } = await axios.delete("/cards/" + id, data.bizNumber);
      if (data.user_id == login._id) {
        //the logged in user is the user that created the card
        setDataFromServer((cDataFromServer) => {
          let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
          if (cardIndex >= 0) {
            cDataFromServer[cardIndex] = data;
          }
          return [...cDataFromServer];
        });
      } else {
        navigate(ROUTES.HOME);
        toast.error("you are not authorized to edit this card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.log("error from axios (like)", err);
    }
  }


  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };
  const handleLikeClick = async (id) => {

    try {
      let { data } = await axios.patch("/cards/" + id);
      console.log("data from axios (patch)", data);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
      //update cards from server
    } catch (err) {
      console.log("error from axios (like)", err);
    }
  }

  return (
    <Grid container spacing={2}>
      {result.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"bussniessCard" + index}>
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onlike={handleLikeClick}
            liked={item.liked}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
