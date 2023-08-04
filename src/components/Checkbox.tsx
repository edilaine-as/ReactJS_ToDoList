import { CheckCircle, Circle } from "phosphor-react";
import { useState } from "react";

interface Check{
    isChecked: boolean;
    onChangeCheckbox: () => void;
}

export function Checkbox({isChecked, onChangeCheckbox}:Check){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <div 
            onClick={onChangeCheckbox} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}>
            {isChecked ? (
                <CheckCircle size={22} color={isHovered? "var(--purple-300)" : "var(--purple-500)"} weight="fill" />
                ) : (
                <Circle size={22} color="var(--blue-300)" weight={isHovered? "duotone" : "thin"} />
            )}
        </div>
    )
}