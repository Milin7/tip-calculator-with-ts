import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
      className=" rounded-3xl border-2 border-indigo-400 w-full p-3 flex justify-between hover:bg-indigo-200"
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  )
}
