function FoodOrSnacks(props){
    //This is FoodItem

    return(

        <>
            <div className="wrapper">
                <ul id="">
                    <nav id="MenuList--description">{`${props.typeItem} on Menu`}</nav>
                    {props.OnMenu.map((item, index) => {
                        return (
                            <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                                <p>{`${item.nameOfItem}`}</p>

                                {item.price != undefined &&
                                <p>{`${item.price} kr`}</p>}

                                {item.volume != undefined &&
                                <p>{`${item.volume} vol`}</p>}

                                {item.type != undefined &&
                                    <p>{`${item.type} type`}</p>}

                                {item.percentageAlcohol != undefined &&
                                    <p>{`${item.percentageAlcohol} alc vol`}</p>}

                                <button value={item.id} className="adminBtn" onClick={(e) => props.removeItemFromMenu(item,e)}>Remove {item.nameOfItem}</button>
                            </li>
                        )
                    })}
                </ul>
                <ul id="">
                    <nav id="MenuList--description">{`${props.typeItem} NOT on Menu`}</nav>
                    {props.NotOnMenu.map((item, index) => {
                        return (
                            <li className="Menu--listOfItems" id={item.id} key={index} ref={el => props.newNameRefs.current[index] = el}>

                                <p>{`${item.nameOfItem}`}</p>
                                <div >
                                    <label>New Name:</label>
                                    <input value={props.newNameRefs[index]} type="text" onChange={e => props.newNameRefs[index]=(e.target.value)} placeholder={item.nameOfItem}/>
                                    <button onClick={() => props.changeTheName(props.newNameRefs[index], item)}>go</button>
                                </div>
                                <div >
                                    <label>New Price:</label>
                                    <input value={props.newPriceRefs[index]} type="number" onChange={e => props.newPriceRefs[index]=(e.target.value)} placeholder={item.price}/>
                                    <button onClick={() => props.changeThePrice(props.newPriceRefs[index], item)}>go</button>
                                </div>
                                {((props.typeItem == "DrinkableItem") || (props.typeItem == "DrinkableAlcoholicItem"))  && <div>
                                    <label>New Volume:</label>
                                    <input value={props.newVolumeRefs[index]} type="number" onChange={e => props.newVolumeRefs[index]=(e.target.value)} placeholder={item.volume}/>
                                    <button onClick={() => props.changeTheVolume(props.newVolumeRefs[index], item)}>go</button></div>}

                                {props.typeItem == "DrinkableAlcoholicItem"  && <div>
                                    <label>New Percentage:</label>
                                    <input value={props.newPercentageRefs[index]} type="number" onChange={e => props.newPercentageRefs[index]=(e.target.value)} placeholder={item.percentageAlcohol}/>

                                    <label>New type:</label>
                                    <input value={props.newItemTypeRefs[index]} type="text" onChange={e => props.newItemTypeRefs[index]=(e.target.value)} placeholder={item.type}/>
                                    <button onClick={() => props.changeThePercentage(props.newItemTypeRefs[index], item)}>go</button></div>}


                                <button value={item.id} className="adminBtn" onClick={(e) => props.reInstateItemToMenu(item,e)}>ReInstate {item.nameOfItem}</button>

                            </li>
                        )
                    })}
                </ul>
                <nav id="MenuList--description">{`Create New ${props.typeItem}`}</nav>

                <div >
                    <label>New Item Name:</label>
                    <input value={props.newItemName} type="text" onChange={e => props.setNewItemName(e.target.value)} placeholder={"New item Name"}/>
                    <input value={props.newItemPrice} type="number" onChange={e => props.setNewItemPrice(e.target.value)} placeholder={"New item price"}/>
                    {props.typeItem == "DrinkableItem"  && <input value={props.newItemVolume} type="number" onChange={e => props.setNewItemVolume(e.target.value)} placeholder={"New item Volume"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem"  && <input value={props.newItemType} type="text" onChange={e => props.setNewItemType(e.target.value)} placeholder={"New item type"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem"  && <input value={props.newItemVolume} type="number" onChange={e => props.setNewItemVolume(e.target.value)} placeholder={"New item Volume"}/>}
                    {props.typeItem == "DrinkableAlcoholicItem" && <input value={props.newItemPercentage} type="number" onChange={e => props.setNewItemPercentage(e.target.value)} placeholder={"New item Percentage"}/>}
                    <button onClick={() => props.createNewFoodOrSnacksItem(props.newItemName, props.newItemPrice, props.newItemType, props.newItemVolume, props.newItemPercentage)}>Create</button>
                </div>
            </div>



        </>
    )
}
export default FoodOrSnacks;