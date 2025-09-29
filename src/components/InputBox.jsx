import React, { useId } from "react";
import Select from "react-select";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  currencyOptions = [],
}) => {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <Select
          className="w-full text-left"
          options={currencyOptions.map((cur) => ({
            value: cur,
            label: cur.toUpperCase(),
          }))}
          value={{ value: selectCurrency, label: selectCurrency.toUpperCase() }}
          onChange={(option) =>
            onCurrencyChange && onCurrencyChange(option.value)
          }
          isDisabled={currencyDisable}
          isSearchable={true} // 🔍 enables typing to search
        />
      </div>
    </div>
  );
};

export default InputBox;
