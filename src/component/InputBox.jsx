import React, {useId} from 'react'

function InputBox({
 label,
 className="",
 amount,
 onAmountChange,
 amountDisable,
 currencyDisable,
 selectCurrency,
 onCurrencyChange,
 currencOptions=[]
}) {
   
const amountInputId=useId()
    return (
        <div className={`bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Amount Input Section */}
                <div className="flex-1">
                    <label  htmlFor={amountInputId} className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-2 block">
                        {label}
                    </label>
                    <input
                         id={amountInputId}
                        className="outline-none w-full bg-white/20 backdrop-blur-sm text-white text-2xl font-bold py-3 px-4 rounded-xl border border-white/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all placeholder-white/40"
                        type="number"
                        placeholder="0.00"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}}
                    />
                </div>
                
                {/* Currency Selector Section */}
                <div className="sm:w-40">
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-2">Currency</p>
                    <select
                        className="w-full rounded-xl px-4 py-3 bg-white/90 text-gray-800 font-bold text-base cursor-pointer outline-none border-2 border-white/50 hover:border-purple-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/50 transition-all shadow-md uppercase"
                        value={selectCurrency}
                        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                        disabled={currencyDisable}
                    >
                           
                      {currencOptions.map((currency)=>(
                        <option key={currency } 
                          value={currency}>
                            {currency}
                        </option>
                      ))}
                </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;