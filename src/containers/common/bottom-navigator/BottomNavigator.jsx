import { useState } from "react"
import BottomNavigatorComponent from "../../../components/common/bottom-navigator/BottomNavigatorComponent"

export default function BottomNavigator() {
  const [value, setValue] = useState(0)

  return <BottomNavigatorComponent value={value} setValue={setValue} />
}
