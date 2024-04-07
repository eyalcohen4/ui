import { useState } from "react"

import { ColorPicker } from "@/registry/new-york/ui/color-picker"

export default function ColorPickerExample() {
  const [color, setColor] = useState("#FF6900")

  return <ColorPicker color={color} onChange={setColor} />
}
