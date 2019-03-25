import * as mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  gallons_requested: Number,
  delivery_address: String,
  delivery_date: String,
  suggested_price: Number,
  total_amount: Number

});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
