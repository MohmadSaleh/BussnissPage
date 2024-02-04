import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subtitleSchema = Joi.object({
  subtitle: Joi.string().min(2).max(256).required(),
});
const descriptionSchema = Joi.object({
  description: Joi.string().min(2).max(1024).required(),
});
const phoneSchema = Joi.object({
  phone: Joi.string()./* pattern(
    new RegExp(/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/)) */
    min(9).max(11).required(),
});
const emailSchema = Joi.object({
  email: Joi.string()/* .pattern(
    new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)).min(5).regex() */.required(),
});
const webSchema = Joi.object({
  web: Joi.string().min(14),
});
const urlSchema = Joi.object({
  url: Joi.string().min(14).required(),
});
const altSchema = Joi.object({
  alt: Joi.string().min(2).required(),
});
const stateSchema = Joi.object({
  state: Joi.string().min(14).required(),
});
const countrySchema = Joi.object({
  country: Joi.string().min(2).required(),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).required(),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).required(),
});
const houseNumberSchema = Joi.object({
  houseNumber: Joi.number().min(1).required(),
});
const zipSchema = Joi.object({
  zip: Joi.number(),
});

const validateTitleSchema = (title) => titleSchema.validate(title);
const validateSubtitleSchema = (subtitle) => subtitleSchema.validate(subtitle);
const validateDescriptionSchema = (description) => descriptionSchema.validate(description);
const validatePhoneSchema = (phone) => phoneSchema.validate(phone);
const validateEmailSchema = (email) => emailSchema.validate(email);
const validateWebSchema = (web) => webSchema.validate(web);
const validateUrlSchema = (url) => urlSchema.validate(url);
const validateAltSchema = (alt) => altSchema.validate(alt);
const validateStateSchema = (state) => stateSchema.validate(state);
const validateCountrySchema = (country) => countrySchema.validate(country);
const validateCitySchema = (city) => citySchema.validate(city);
const validateStreetSchema = (street) => streetSchema.validate(street);
const validateHouseNumberSchema = (houseNumber) => houseNumberSchema.validate(houseNumber);
const validateZipSchema = (zip) => zipSchema.validate(zip);

const validateSchema = {
  title: validateTitleSchema,
  subtitle: validateSubtitleSchema,
  description: validateDescriptionSchema,
  phone: validatePhoneSchema,
  email: validateEmailSchema,
  web: validateWebSchema,
  url: validateUrlSchema,
  alt: validateAltSchema,
  state: validateStateSchema,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validateHouseNumberSchema,
  zip: validateZipSchema,
};

export default validateSchema;
