import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function HorizontalField({ placeholder, ispassword, text }) {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleUpdateValue(e) {
        e.preventDefault();
        setValue(e.target.value);
    }

    function togglePasswordVisibility() {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <div className="my-2 w-[450px]">
            <p className="text-lg py-1">{text}</p>
            <div className="relative w-[100%]">
                <input
                    type={ispassword && !showPassword ? "password" : "text"}
                    value={value}
                    onChange={(e) => handleUpdateValue(e)}
                    className="w-[100%] p-[5px] pr-[35px] text-black bg-white border rounded-lg"
                    placeholder={placeholder}
                />
                {ispassword && (
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute top-[50%] right-[10px] transform -translate-y-[50%] cursor-pointer text-gray-600"
                    >
                        {showPassword ? (
                             <EyeIcon className="w-5 h-5" />
                        ) : (
                            <EyeSlashIcon className="w-5 h-5" />
                        )}
                    </span>
                )}
            </div>
        </div>
    );
}

export default HorizontalField;
