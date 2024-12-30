import * as React from "react";
import { EyeIcon, EyeOffIcon, Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn(
          "peer h-full w-full rounded-[7px] border border-gray-600 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-600 placeholder-shown:border-t-gray-600 focus:border-2 focus:border-t-0 focus:border-gray-400 focus:border-t-transparent focus:outline-0 focus-visible:ring-0 disabled:border-0 disabled:bg-gray-700",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-600 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-200 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-400 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = InputProps & { label?: string };

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

type InputFieldProps = {
  label: string;
  placeholder?: string;
  size?: "medium" | "large";
  id: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  size,
  id,
  ...props
}) => {
  return (
    <div
      className={`relative w-full min-w-[200px] ${
        size === "large" ? "h-11" : "h-10"
      }`}
    >
      <Input
        id={id}
        className="peer h-full w-full rounded-[7px] border border-gray-600 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-600 placeholder-shown:border-t-gray-600 focus:border-2 focus:border-t-0 focus:border-gray-400 focus:border-t-transparent focus:outline-0 focus-visible:ring-0 disabled:border-0 disabled:bg-gray-700"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-600 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-200 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-400 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    { className, value, min = 0, max = 100, step = 1, onValueChange, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<number>(
      value ?? 0
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleIncrement = () => {
      const newValue = Math.min(internalValue + step, max);
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    const handleDecrement = () => {
      const newValue = Math.max(internalValue - step, min);
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value.replace(/^0+(?=\d)/, "");
      newValue = Math.min(Math.max(Number(newValue), min), max).toString();
      setInternalValue(Number(newValue));
      onValueChange?.(Number(newValue));
    };

    return (
      <div className={cn("flex max-w-xs items-center", className)}>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          disabled={internalValue <= min}
          className="rounded-r-none"
          aria-label="Decrease value"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          ref={ref}
          value={internalValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className="min-h-10 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          {...props}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          disabled={internalValue >= max}
          className="rounded-l-none"
          aria-label="Increase value"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  }
);

InputNumber.displayName = "InputNumber";

export {
  Input,
  FloatingInput,
  FloatingLabel,
  FloatingLabelInput,
  InputField,
  PasswordInput,
  InputNumber,
};
