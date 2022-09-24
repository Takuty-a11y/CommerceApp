import { ApiContext } from 'types'
import { fetcher } from 'utils'

export type PurchaseParams = {
  /**
   * 購入する商品ID
   */
  productId: number
}

const purchase = async (
  context: ApiContext,
  props: PurchaseParams,
): Promise<{ message: string }> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/purchases`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(props),
  })
}

export default purchase
