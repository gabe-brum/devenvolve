import { Checkbox } from "./styles";
import { CheckboxSkillProps } from "./types";

export default function CheckboxSkill({ name, id }: CheckboxSkillProps) {
  return (
    <Checkbox htmlFor={id}>{name}
      <input type="checkbox" id={id}/>
      <span className="checkmark"></span>
    </Checkbox>
  )
}