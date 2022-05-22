import ButtonsWithFunctions from "./ButtonsWithFunctions";

import MainNavbar from "./MainNavbar";
import MenuList from "./MenuList";
import {useState} from "react";

function Menu(){

    const [updateItem,setUpdateItem]=useState(1)
    function update(){
        setUpdateItem(updateItem+1)
    }

    return(
        <>
            <MainNavbar/>
            <ButtonsWithFunctions update={update}/>
            <MenuList update={update} updateItem={updateItem}/>
        </>
    )
}
export default Menu;
