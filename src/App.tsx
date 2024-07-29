import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"

import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className=" bg-indigo-400 py-5">
        <h1 className=" font-black text-center text-4xl">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="  max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem dispatch={dispatch} key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className=" border border-dashed  p-5 border-slate-300 rounded-lg space-y-10 ">
          {state.order.length ? (
            <>
              {" "}
              <OrderContent order={state.order} dispatch={dispatch} />
              <TipPercentageForm tip={state.tip} dispatch={dispatch} />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
