import { Fragment, useEffect, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import LoginContext from "../store/loginContext";
const ProfilePage = () => {
  const { login } = useContext(LoginContext);
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards/my-cards")
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

  const handleDeleteCard = (id) => {
    console.log("father: card to delete", id);
    /*    setDataFromServer((currentDataFromServer) =>
         currentDataFromServer.filter((card) => card._id !== id)
       ); */
    if (dataFromServer.user_id === login._id) {
      console.log("login:", login._id);
      console.log("data:", dataFromServer.user_id);
      axios.delete("/cards/" + id).then(() => {
        toast.success("card deleted successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
    else {
      console.log("login:", id);
      console.log("data:", dataFromServer.user_id);
      toast.error("you are not authorized to delete this card", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
  }

  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };
  return (
    <Fragment>
      <h1>Profile Page</h1>
      <Grid container spacing={2}>
        {dataFromServer.map((item, index) => (
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
    </Fragment>)
};


export default ProfilePage;
