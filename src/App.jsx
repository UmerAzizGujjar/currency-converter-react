import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { InputBox } from "./component";
import { useState } from "react";

function App() {
  const [amount,setAmount]=useState("")
  const [to,setTo]=useState("usd")
  const [from,setFrom]=useState("pkr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const currencyOptions=Object.keys(currencyInfo)

  const swap=()=>{
    setTo(from)
    setFrom(to)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
    
  }
   
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
      <div
        className="w-full min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
    >
        <div className="w-full max-w-lg">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    💱 Currency Converter
                </h1>
                <p className="text-purple-200 text-sm md:text-base">
                    Fast & Accurate Exchange Rates
                </p>
            </div>

            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                    className="space-y-6"
                >
                    {/* From Input */}
                    <div className="space-y-2">
                        <InputBox
                           label="From"
                           amount={amount}
                           onCurrencyChange={(currency) => setFrom(currency)} 
                           currencOptions={currencyOptions}
                           selectCurrency={from}
                          onAmountChange={(value) => setAmount(value)}  
                        />
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center -my-3">
                        <button
                            type="button"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 shadow-lg transform hover:scale-110 hover:rotate-180 transition-all duration-300 border-4 border-white/20"
                            onClick={swap}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                        </button>
                    </div>

                    {/* To Input */}
                    <div className="space-y-2">
                        <InputBox
                           label="To"
                           amount={convertedAmount}
                           onCurrencyChange={(currency)=>{
                            setTo(currency)
                           }}
                           currencOptions={currencyOptions}
                           selectCurrency={to}
                           amountDisable
                        />
                    </div>

                    {/* Convert Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 border border-white/30"
                    >
                       Convert {from.toUpperCase()} → {to.toUpperCase()}
                    </button>
                </form>

                {/* Footer Info */}
                <div className="mt-6 text-center">
                    <p className="text-white/60 text-xs">
                        💡 Real-time exchange rates updated daily
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}

export default App
