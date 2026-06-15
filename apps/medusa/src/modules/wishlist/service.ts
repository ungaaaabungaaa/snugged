import { MedusaService } from "@medusajs/framework/utils";
import { Wishlist } from "./models/wishlist.ts";

class WishlistModuleService extends MedusaService({
  Wishlist
}) {}

export default WishlistModuleService;
