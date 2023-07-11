//currently not working...

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addMenu } from "../redux/actions"

function MenuGenerator () {

  const idNum = useSelector(state => state.menuNums)
  const dispatch = useDispatch()

  const addMenuOpt = () => {
    dispatch(addMenu())
    setMenuNum({
      ...menuNum,
      [idNum]: inp
    })
  }

  console.log(idNum)
  const inp = <input className="menu-input" id={idNum} placeholder="Menu Item..."></input>
  const [menuNum, setMenuNum] = useState({[idNum]: inp})
  const keys = Object.keys(menuNum)
  console.log(keys)

  return (
    <div className="menu-options-main">
      <div className="header">
        Menu Options <button onClick={addMenuOpt}>+</button>
      </div>
      {}
    </div>
  )
}

export default MenuGenerator