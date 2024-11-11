import { forwardRef, ReactNode, useId } from 'react';

import { Indicator, Root } from '@radix-ui/react-checkbox';

import s from './checkbox.module.scss';

import {CheckIcon} from "@radix-ui/react-icons";

type CheckboxProps = {
  onChangeChecked?: (checked: boolean) => void;
  isArchive?: boolean;
  label?: ReactNode | string;
};
export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  ({onChangeChecked, isArchive = false}, ref) => {
    const generatedId = useId();

    const handleCheckedChange = (): void => {
      if (onChangeChecked) {
        onChangeChecked(!isArchive);
      }
    };

    return (
      <div className={s.checkbox} ref={ref}>
        <Root
          onCheckedChange={handleCheckedChange}
          checked={isArchive}
          className={s.root}
          id={generatedId}
          name="checkbox"
        >
          <Indicator className={s.indicator}>
            <CheckIcon />
          </Indicator>
        </Root>
        <label className={s.label} htmlFor={generatedId}>
          Archive
        </label>
      </div>
    );
  },
);
