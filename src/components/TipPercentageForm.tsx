import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
]

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number
}

export default function TipPercentageForm({
  dispatch,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOption => (
          <div className="flex gap-2" key={tipOption.id}>
            <label id={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              onChange={e =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              }
              type="radio"
              name="tip"
              value={tipOption.value}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
