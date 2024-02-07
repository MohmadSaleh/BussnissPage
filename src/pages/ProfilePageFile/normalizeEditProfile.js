const profileFromServer = (dataFromServer) => {
    return {
        first: dataFromServer.first,
        middle: dataFromServer.middle,
        last: dataFromServer.last,
        phone: dataFromServer.phone,
        url: dataFromServer.image.url,
        alt: dataFromServer.image.alt,
        state: dataFromServer.address.state,
        country: dataFromServer.address.country,
        city: dataFromServer.address.city,
        street: dataFromServer.address.street,
        houseNumber: dataFromServer.address.houseNumber,
        zip: dataFromServer.address.zip,
    };
};
export { profileFromServer };