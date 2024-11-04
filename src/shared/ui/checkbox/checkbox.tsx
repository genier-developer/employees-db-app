import {Root, Indicator} from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import s from "./checkbox.module.scss"

export const Checkbox = () => (
  <form>
    <div className={s.checkbox}>
      <Root className="CheckboxRoot" defaultChecked id="c1">
        <Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Indicator>
      </Root>
      <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
);
