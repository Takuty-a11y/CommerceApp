import CartProduct from 'components/organisms/CartProduct'
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext'
import { useShoppingCartContext } from 'contexts/ShoppingCartContext'
import purchase from 'services/purchases/purchase'
import { ApiContext } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

/**
 * カートコンテナ
 */
const CartContainer = () => {
  const { cart, removeProductFromCart } = useShoppingCartContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  // 購入ボタンを押した時、商品を購入
  const handleBuyButtonClick = async (id: number) => {
    try {
      setGlobalSpinner(true)
      await purchase(context, { productId: id })
      window.alert('購入しました')
      // 商品購入後はカートから商品を削除する
      removeProductFromCart(id)
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(error.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }
  // 削除ボタンを押した時、商品を削除
  const handleRemoveButtonClick = (id: number) => {
    removeProductFromCart(id)
  }

  return (
    <>
      {cart.map((p) => (
        <CartProduct
          key={p.id}
          id={p.id}
          imageUrl={p.imageUrl}
          title={p.title}
          price={p.price}
          onBuyButtonClick={handleBuyButtonClick}
          onRemoveButtonClick={handleRemoveButtonClick}
        />
      ))}
    </>
  )
}

export default CartContainer
