import { ApiContext, Product } from "types";
import { fetcher } from "utils";

export type GetProductParams = {
  /**
   * 取得する商品
   */
  id: number;
};

const getProduct = async (
  context: ApiContext,
  props: GetProductParams
): Promise<Product> => {
  const { id } = props;
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getProduct;
