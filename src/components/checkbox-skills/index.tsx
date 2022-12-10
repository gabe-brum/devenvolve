import { Checkbox } from "./styles";
import { CheckboxSkillProps } from "./types";

export default function CheckboxSkill({ name, id, onChecked }: CheckboxSkillProps) {
  return (
    <Checkbox htmlFor={id}>{name}
      <input onChange={onChecked} type="checkbox" id={id}/>
      <span className="checkmark"></span>
    </Checkbox>
  )
}