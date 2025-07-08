import mongoose from 'mongoose';

const addressSchema = {
  country: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  }, 
};

const checkoutSchema = new mongoose.Schema(
  {
    email: {
      type: String, 
      required: true,
    },

    shippingAddress: {
      type: addressSchema, 
      required: true,
    },

    billingAddress: {
      type: addressSchema,
      required: false,
    },

    shippingMethod: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: 'Cash on Delivery (COD)',
    },
     emailbox: {
      type: Boolean,
      required: true,
    },
      saveAddress: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const checkOutModel = mongoose.model('checkoutModel', checkoutSchema);
