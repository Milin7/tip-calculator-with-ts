import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[]
  dispatch: Dispatch<OrderActions>
}
export default function OrderContent({ order, dispatch }: OrderContentProps) {
  return (
    <div>
      <h2 className=" font-black text-4xl ">Consumo</h2>
      <div className=" space-y-3 mt-10">
        {order.map(item => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5  items-center"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className=" font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              onClick={() =>
                dispatch({ type: "remove-item", payload: { id: item.id } })
              }
              className=" bg-blue-950 h-8 w-8 rounded-full font-black text-white hover:bg-red-600"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
