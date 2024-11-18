/* eslint-disable react/prop-types */
function Button (props) {
    /* properties supported by the component*/
    const {
        children,
        onClick,
        type="primary",
        size="medium",
        className="",
        rounded = false,
        fullWidth = false, // pass to set the button to use full width of it's parent
        disabled = false,
    } = props;
    const types = {
        primary: "bg-yellow-500 text-white hover:bg-yellow-700 transition-colors focus:ring-red-500",
        login: "bg-[#2D2170] text-white hover:bg-[#251B60] transition-colors foucs:ring-[#35268B]",
    };

    const sizes = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
        
    };
    const customSize = sizes[size] || size;
    const classes = [
        types[type],
        customSize,
        rounded ? "rounded-lg": "",
        fullWidth ? "full-width" : "",
        className,
        disabled ? 'opacity-50 cursor-not-allowed' : "",
    ].join(" ");
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>{children}</button>
    )
}
export default Button;