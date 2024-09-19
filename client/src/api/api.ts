import axios from "axios";
import { Products } from "./types";

export const getProducts = async (): Promise<Products> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Faild to fetching products", error);
  }
};
