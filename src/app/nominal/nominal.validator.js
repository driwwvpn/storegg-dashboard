import { checkSchema } from "express-validator";

const nominalValidation = checkSchema({
  coin_quantity: {
    trim: true,
    notEmpty: {
      errorMessage: "Nominal tidak boleh kosong",
    },
  },
  coin_name: {
    trim: true,
    notEmpty: {
      errorMessage: "Nama Koin tidak boleh kosong",
    },
  },
  price: {
    trim: true,
    notEmpty: {
      errorMessage: "Harga tidak boleh kosong",
    },
  },
});

export default nominalValidation;