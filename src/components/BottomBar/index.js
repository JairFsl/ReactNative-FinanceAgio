import React, { useState } from "react";

const BottomBar = () => {

    const [value, setValue] = useState({value});

    const HandleChange = (event, newValue) => {
        setValue(newValue)
    }

    


    return (
            <Material.BottomNavigation sx={{ width: 500 }} value={value} onChange={HandleChange}>
                <Material.BottomNavigationAction 
                    label="Home"
                    value="home"
                />

                <Material.BottomNavigationAction 
                    label="Settings"
                    value="setting"
                />
            </Material.BottomNavigation>
    )
}

export default BottomBar;