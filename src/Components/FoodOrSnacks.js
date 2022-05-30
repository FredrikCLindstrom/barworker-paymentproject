import {Button} from "react-bootstrap";

function FoodOrSnacks(props){
    //This is FoodItem
    //Todo have To fix input on change price and change name

    return(

        <>
            <div className="wrapper">
                <ul className="showMenu">
                    <nav id="MenuListOn--description">{`${props.typeItem} on Menu`}</nav>
                    {props.OnMenu.map((item, index) => {
                        return (
                            <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                                <p className="printToMenu">{`${item.nameOfItem}`}</p>

                                {item.price != undefined &&
                                <p className="printToMenu">{`${item.price} kr`}</p>}

                                {item.volume != undefined &&
                                <p className="printToMenu">{`${item.volume} cl`}</p>}

                                {item.type != undefined &&
                                    <p className="printToMenu">{`${item.type}`}</p>}

                                {item.percentageAlcohol != undefined &&
                                    <p className="printToMenu">{`${item.percentageAlcohol} %`}</p>}

                                <button type="button" className="btn btn-warning" value={item.id}  onClick={(e) => {props.removeItemFromMenu(item,e)}}>Remove {item.nameOfItem}</button>
                            </li>
                        )
                    })}
                </ul>
                <ul className="showMenu">
                    <nav id="MenuListOff--description">{`${props.typeItem} NOT on Menu`}</nav>
                    {props.NotOnMenu.map((item, index) => {
                        return (
                            <li className="Menu--listOfItems" id={item.id} key={index} ref={el => props.newNameRefs.current[index] = el}>

                                <span className="nameOfItem" id="idName">{`${item.nameOfItem}`}</span>
                                <span className="nameOfItem">
                                    <label className="smallerText">New Name:</label>
                                    <input className="inputAreaNormal" value={props.newNameRefs[index]} type="text" onChange={e => props.newNameRefs[index]=(e.target.value)} placeholder={item.nameOfItem}/>
                                    <button onClick={() => props.changeTheName(props.newNameRefs[index], item)}>go</button>
                                </span>
                                <span className="nameOfItem">
                                    <label className="smallerText">New Price:</label>
                                    <input className="inputAreaSmaller" value={props.newPriceRefs[index]} type="number" onChange={e => props.newPriceRefs[index]=(e.target.value)} placeholder={item.price}/>
                                    <button className="right" onClick={() => props.changeThePrice(props.newPriceRefs[index], item)}>go</button>
                                </span>
                                {((props.typeItem == "DrinkableItem") || (props.typeItem == "DrinkableAlcoholicItem"))  && <span className="nameOfItem">


                                    <label className="smallerText">New Volume:</label>
                                    <input className="inputAreaSmaller" value={props.newVolumeRefs[index]} type="number" onChange={e => props.newVolumeRefs[index]=(e.target.value)} placeholder={item.volume}/>
                                    <button onClick={() => props.changeTheVolume(props.newVolumeRefs[index], item)}>go</button>


                                    </span>}

                                {props.typeItem == "DrinkableAlcoholicItem"  && <span className="nameOfItem">

                                    <label className="smallerText">New Percentage:</label>
                                    <input className="inputAreaSmaller" value={props.newPercentageRefs[index]} type="number" onChange={e => props.newPercentageRefs[index]=(e.target.value)} placeholder={item.percentageAlcohol}/>
                                    <button onClick={() => props.changeThePercentage(props.newPercentageRefs[index], item)}>go</button>

                                    </span>}


                                {props.typeItem == "DrinkableAlcoholicItem"  && <span className="nameOfItem">
                                    <label className="smallerText">New type:</label>
                                    <input className="inputAreaNormal" value={props.newItemTypeRefs[index]} type="text" onChange={e => props.newItemTypeRefs[index]=(e.target.value)} placeholder={item.type}/>
                                    <button onClick={() => props.changeTheItemType(props.newItemTypeRefs[index], item)}>go</button>

                                    </span>}


                                <button type="button" className="btn btn-success" value={item.id} onClick={(e) => props.reInstateItemToMenu(item,e)}>ReInstate {item.nameOfItem}</button>

                                <button type="button" className="btn btn-danger" value={item.id} onClick={(e) => props.deleteItemForever(item,e)}>Delete {item.nameOfItem}</button>


                            </li>
                        )
                    })}
                </ul>
                <div className="createNewItem">
                <nav id="MenuList--description">{`Create New ${props.typeItem}`}</nav>

                <div >

                    <label>New Item Name:</label>
                    <input value={props.newItemName} type="text" onChange={e => props.setNewItemName(e.target.value)} placeholder={"New item Name"}/>
                    <input value={props.newItemPrice} type="number" onChange={e => props.setNewItemPrice(e.target.value)} placeholder={"New item price"}/>
                    {props.typeItem == "DrinkableItem"  && <input value={props.newItemVolume} type="number" onChange={e => props.setNewItemVolume(e.target.value)} placeholder={"New item Volume"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem"  && <input value={props.newDrinkableAlcoholicItemType} type="text" onChange={e => props.setNewDrinkableAlcoholicItemType(e.target.value)} placeholder={"New item type"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem"  && <input value={props.newItemVolume} type="number" onChange={e => props.setNewItemVolume(e.target.value)} placeholder={"New item Volume"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem" && <input value={props.newItemPercentage} type="number" onChange={e => props.setNewItemPercentage(e.target.value)} placeholder={"New item Percentage"}/>}


                    {((props.typeItem == "FoodItem")|| (props.typeItem == "SnacksItem")) &&
                        <button onClick={() => props.createNewFoodOrSnacksItem(props.typeItem, props.newItemName, props.newItemPrice)}>Create</button>}

                    {props.typeItem == "DrinkableItem" &&
                        <button onClick={() => props.createNewFoodOrSnacksItem(props.newItemName, props.newItemPrice, props.newItemVolume)}>Create</button>}
                    {props.typeItem == "DrinkableAlcoholicItem" &&
                    <button onClick={() => props.createNewFoodOrSnacksItem(props.newItemName, props.newItemPrice, props.newDrinkableAlcoholicItemType, props.newItemVolume, props.newItemPercentage)}>Create</button>}

                </div>
                </div>
            </div>



        </>
    )
}
export default FoodOrSnacks;

// <button type="button" className="btn btn-primary">Primary</button>
// <button type="button" className="btn btn-secondary">Secondary</button>
// <button type="button" className="btn btn-success">Success</button>
// <button type="button" className="btn btn-danger">Danger</button>
// <button type="button" className="btn btn-warning">Warning</button>
// <button type="button" className="btn btn-info">Info</button>
// <button type="button" className="btn btn-light">Light</button>
// <button type="button" className="btn btn-dark">Dark</button>