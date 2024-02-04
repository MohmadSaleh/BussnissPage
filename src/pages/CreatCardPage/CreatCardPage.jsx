import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import TextInputComponent from "../../components/TextInputComponent";
import validateSchema from "../../validation/cardValidation";
import LoginContext from "../../store/loginContext";
import normalizeCreateCard from "./normalizeCreatCard";
import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
/* import { fromServer } from "./normalizeEdit"; */

const CreatCardPage = () => {
    const navigate = useNavigate();
    const [inputsValue, setInputsValue] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });
    const [errors, setErrors] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
    });

    const { login } = useContext(LoginContext);

    let keysArray = Object.keys(inputsValue); //['title','subTitle', 'description', 'phone', 'email', 'web', 'url', 'alt','state', 'country', 'city','street', 'houseNumber', 'zip']

    const handleInputsChange = (e) => {
        setInputsValue((cInputsValue) => ({
            ...cInputsValue,
            [e.target.id]: e.target.value,
        }));
    };

    const handleInputsBlur = (e) => {
        const { error } = validateSchema[e.target.id]({
            [e.target.id]: inputsValue[e.target.id],
        });
        console.log({ error });
        if (error) {
            setErrors((cErrors) => ({
                ...cErrors,
                [e.target.id]: error.details[0].message,
            }));
        } else {
            setErrors((cErrors) => {
                delete cErrors[e.target.id];
                return { ...cErrors };
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/cards", normalizeCreateCard(inputsValue));
            toast.success("🦄 Card Created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate(ROUTES.HOME);

        } catch (err) {
            console.log("error from axios", err);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}

        >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Create New Card
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {keysArray.map((keyName) => (
                        <TextInputComponent
                            key={"inputs" + keyName}
                            id={keyName}
                            label={keyName}
                            value={inputsValue[keyName]}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                            errors={errors[keyName]}
                        />
                    ))}
                </Grid>
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={Object.keys(errors).length > 0}

            >
                Submit
            </Button>
        </Box>
    );
};
export default CreatCardPage;
