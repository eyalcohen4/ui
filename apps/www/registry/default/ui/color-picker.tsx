import { Pipette } from "lucide-react"
import { HexColorPicker } from "react-colorful"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

const defaultColors = [
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#0693E3",
  "#ABB8C3",
  "#EB144C",
]

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string
  onChange: (color: string) => void
}) => (
  <div className="flex items-center gap-4">
    <Popover>
      <PopoverTrigger>
        <Color color={color} wrapper />
      </PopoverTrigger>
      <PopoverContent className="flex h-14 items-center justify-center px-4 py-0">
        <div className="flex w-full items-center gap-2 p-0">
          {defaultColors.map((color) => (
            <Color key={color} color={color} onClick={() => onChange(color)} />
          ))}
        </div>
        <div>
          <Popover>
            <PopoverTrigger className="flex items-center">
              <div className="flex size-6 items-center justify-cetner rounded-md border p-1">
                <Pipette className="text-lg" />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <HexColorPicker onChange={onChange} color={color} />
            </PopoverContent>
          </Popover>
        </div>
      </PopoverContent>
    </Popover>
  </div>
)

export const Color = ({
  color,
  onClick,
  wrapper,
}: {
  wrapper?: boolean
  color: string
  onClick?: () => void
}) =>
  wrapper ? (
    <div
      className="flex size-8 items-center justify-center rounded-md border"
      onClick={onClick}
    >
      <div className="size-4 rounded-full" style={{ background: color }} />
    </div>
  ) : (
    <div
      className="size-4 rounded-full hover:scale-110"
      style={{ background: color }}
      onClick={onClick}
    />
  )
