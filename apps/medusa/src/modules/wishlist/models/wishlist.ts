import { model } from "@medusajs/framework/utils";

export const Wishlist = model.define("wishlist", {
  id: model.id().primaryKey(),
  customer_id: model.text(),
  product_id: model.text(),
  variant_id: model.text().nullable(),
  title: model.text(),
  handle: model.text(),
  thumbnail: model.text().nullable(),
  price: model.number().nullable()
});
