import Joi from "joi"

const addReservedTrip = {
  params: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    tripId: Joi.number().required(),
  }),
}

export const reservationValidation = {
  addReservedTrip,
}
