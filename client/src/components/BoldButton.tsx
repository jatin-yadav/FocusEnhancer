import { ReactElement } from "react"

interface BoldButtonProps {
    text: string
    variant?: "primary" | "secondary" | "tertiary"
    onClick?: () => void
    startIcon?: ReactElement
    endIcon?: ReactElement
    loading?: boolean
}


const variantClasses = {
    primary: "bg-orange-100 text-white text-xl border-2 rounded-full uppercase px-6 py-4",
    secondary: "bg-orange-100 text-white text-purple-600 ",
    tertiary: "bg-purple-100 text-orange-100 text-purple-600 ",
}

const defaultStyles = "px-4 py-2 rounded-full font-[500] flex gap-2 items-center justify-center "


export const BoldButton = ({ variant = "primary", text, startIcon, onClick, loading, endIcon }: BoldButtonProps) => {
    return (
        <button className={`${defaultStyles} ${variantClasses[variant]} ${loading ? "opacity-60" : ""}`} disabled={loading} onClick={onClick}>
            {startIcon && <span className="icon">{startIcon}</span>}
            {loading ? "Loading..." : text}
            {endIcon && <span className="icon">{endIcon}</span>}
        </button>
    )
}
