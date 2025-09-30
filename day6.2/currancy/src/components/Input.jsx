import {React ,useId}  from 'react'


function Input({
    label,
    ammount,
    on_ammount_change,
    on_currency_change,
    currency_options = [],
    select_currency = "usd",
    ammountdisable = false,
    currency_disable = false,

    
    className = "",
}) {
   
const Ammount_Input_Id = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={Ammount_Input_Id} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={Ammount_Input_Id}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {ammountdisable}
                    value={ammount}
                    onChange={(e)=>on_ammount_change && on_ammount_change(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={select_currency}
                    onChange={(e)=>on_currency_change && on_currency_change(e.target.value)}
                    disabled = {currency_disable}
                >
                    
                        {currency_options.map((currency)=>(
                            <option key={currency}
                             value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default Input;
