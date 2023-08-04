import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'
import { useState } from 'react';

export function Task(){

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return(
        <div className={styles.task}>
            <Checkbox isChecked={isChecked} onChangeCheckbox={handleCheckboxChange} />
            <label className={styles.taskDescription}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            <button className={styles.deleteTask}>
                <Trash className={styles.iconDeleteTask}/>  
            </button>
        </div>
    )
}