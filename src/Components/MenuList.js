import {Container, ListGroup} from "react-bootstrap";
import {createRef, useEffect, useRef, useState} from "react";
import useFetch from "../hooks/useFetch";
import FoodOrSnacks from "./FoodOrSnacks";
import {render} from "react-dom";

function MenuList() {

    const {get, put, post} = useFetch("http://localhost:8081/api/");

    const [foodOnMenu, setFoodOnMenu] = useState([]);
    const [foodNotOnMenu, setFoodNotOnMenu] = useState([]);
    const [snacksOnMenu, setSnacksOnMenu] = useState([]);
    const [snacksNotOnMenu, setSnacksNotOnMenu] = useState([]);

    const [drinkableOnMenu, setDrinkableOnMenu] = useState([]);
    const [drinkableNotOnMenu, setDrinkableNotOnMenu] = useState([]);

    const [drinkableAlcoholicOnMenu, setDrinkableAlcoholicOnMenu] = useState([]);
    const [drinkableAlcoholicNotOnMenu, setDrinkableAlcoholicNotOnMenu] = useState([]);

    const newNameRefs = useRef([]);
    const newPriceRefs = useRef([]);
    const newVolumeRefs = useRef([]);
    const newPercentageRefs = useRef([]);
    const newItemTypeRefs = useRef([]);

    const [newFoodItemName, setNewFoodItemName] = useState("");
    const [newFoodItemPrice, setNewFoodItemPrice] = useState("");
    const [newSnacksItemName, setNewSnacksItemName] = useState("");
    const [newSnacksItemPrice, setNewSnacksItemPrice] = useState("");

    const [newDrinkableItemName, setNewDrinkableItemName] = useState("");
    const [newDrinkableItemPrice, setNewDrinkableItemPrice] = useState("");
    const [newDrinkableItemVolume, setNewDrinkableItemVolume] = useState("");

    const [newDrinkableAlcoholicItemName, setNewDrinkableAlcoholicItemName] = useState("");
    const [newDrinkableAlcoholicItemPrice, setNewDrinkableAlcoholicItemPrice] = useState("");
    const [newDrinkableAlcoholicItemVolume, setNewDrinkableAlcoholicItemVolume] = useState("");
    const [newDrinkableAlcoholicItemPercentage, setNewDrinkableAlcoholicItemPercentage] = useState("");
    const [newDrinkableAlcoholicItemType, setNewDrinkableAlcoholicItemType] = useState("");

    const FoodItem = "FoodItem";
    const SnacksItem = "SnacksItem";
    const DrinkableItem = "DrinkableItem";
    const DrinkableAlcoholicItem = "DrinkableAlcoholicItem";


    useEffect(() => {

            getAll()

    },[]);

    const showFoodOnMenu=()=>{


        get("ShowFoodOnMenu")
            .then((data) => {
                setFoodOnMenu([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }

    const showFoodNotOnMenu=()=>{
        get("ShowFoodNotOnMenu")
            .then((data) => {
                setFoodNotOnMenu([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }

    const showSnacksMenu=()=>{
        get("ShowSnacksOnMenu")
            .then((data) => {
                setSnacksOnMenu([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }

    const showSnacksNotMenu=()=>{
        get("ShowSnacksNotOnMenu")
            .then((data) => {
                setSnacksNotOnMenu([...data])
                console.log(data, " <<<<<")
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }

    const showDrinkableItemsOnMenu=()=>{
        get("ShowDrinkableItemsOnMenu")
            .then((data) => {
                setDrinkableOnMenu([...data])
                console.log(data," showDrinkableItemsOnMenu" )
            })
            .catch((error) => {
                console.log("Error drinkable Items: ", error);
            });
    }

    const showDrinkableItemsNotOnMenu=()=>{
        get("ShowDrinkableItemsNotOnMenu")
            .then((data) => {
                setDrinkableNotOnMenu([...data])
                console.log(data, " showDrinkableItemsNotOnMenu")
            })
            .catch((error) => {
                console.log("Error fetching drinkable Items: ", error);
            });
    }

    const showDrinkableAlcoholicItemsOnMenu=()=>{
        get("ShowDrinkableAlcoholicItemsOnMenu")
            .then((data) => {
                setDrinkableAlcoholicOnMenu([...data])
                console.log(data," showDrinkableItemsOnMenu" )
            })
            .catch((error) => {
                console.log("Error drinkable Items: ", error);
            });
    }

    const showDrinkableAlcoholicItemsNotOnMenu=()=>{
        get("ShowDrinkableAlcoholicItemsNotOnMenu")
            .then((data) => {
                setDrinkableAlcoholicNotOnMenu([...data])
                console.log(data, " showDrinkableItemsNotOnMenu")
            })
            .catch((error) => {
                console.log("Error fetching drinkable Items: ", error);
            });
    }

    const getAll=()=>{
        showFoodOnMenu()
        showFoodNotOnMenu()
        showSnacksMenu()
        showSnacksNotMenu()
        showDrinkableItemsOnMenu()
        showDrinkableItemsNotOnMenu()
        showDrinkableAlcoholicItemsOnMenu()
        showDrinkableAlcoholicItemsNotOnMenu()

        //TODO add new itemCat
    }

    const reloadPage = () => {
        document.location.reload();

    };

    function removeItemFromMenu(item, e) {

        let itemId=e.target.value;
        put("SetOutOfStockSingleItem/" + itemId)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error setting Item out of stock: ", error);
            });
        reloadPage()

        return

    }

    function reInstateItemToMenu(item, e) {

        console.log(item, " x item")
        console.log(e.target.value, " x e")
        let itemId=e.target.value;
        put("SetInStockSingleItem/" + itemId)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error setting Item In stock: ", error);
            });

        reloadPage();
        return
    }

    function changeThePrice(input, item) {
        console.log(" input: ", input, " item: ", item)
        put("ChangeThePriceOfItem/" + item.id + "/" + input)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error changing price: ", error);
            });
        reloadPage()

    }

    function changeTheVolume(input, item) {
        console.log(" input: ", input, " item: ", item)
        put("ChangeTheVolumeOfItem/" + item.id + "/" + input)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error changing volume: ", error);
            });
        reloadPage()

    }

    function changeThePercentage(input, item) {
        console.log(" input: ", input, " item: ", item)
        put("ChangeThePercentageOfItem/" + item.id + "/" + input)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error changing percentage: ", error);
            });
       // reloadPage()

    }

    function changeTheName(input, item) {
        console.log(" input: ", input, " item: ", item)
        put("ChangeTheNameOfItem/" + item.id + "/" + input)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error changing Item name: ", error);
            });
        reloadPage()
    }


    function createNewFoodOrSnacksItem(typeOfItem, newItemName, newItemPrice) {
        console.log(" typeOfItem: ", typeOfItem, " newItemName: ", newItemName, " newItemPrice: ", newItemPrice)
        post("addItemFoodOrSnacks/" + typeOfItem + "/" + newItemName + "/" + newItemPrice)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error Creating new " + typeOfItem + ": ", error);
            });
        reloadPage()
    }

    function createNewDrinkableItem(newItemName, newItemPrice, newItemVolume) {
        console.log(" newItemName: ", newItemName, " newItemPrice: ", newItemPrice)
        post("addItemDrink/"+newItemName+"/"+newItemPrice+"/" + newItemVolume)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error Creating new " + newItemName + ": ", error);
            });
        reloadPage()
    }

    function createNewDrinkableAlcoholicItem(newItemName, newItemPrice,newItemType, newItemVolume, newItemPercantege) {
        console.log(" newItemName: ", newItemName, " newItemPrice: ", newItemPrice)
        post("addItemDrinkAlcoholic/"+newItemName+"/"+newItemPrice+"/" + newItemType+"/"+newItemVolume+"/"+newItemPercantege)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log("Error Creating new " + newItemName + ": ", error);
            });
        reloadPage()
    }




    return (
        <>
            {/*foodItem*/}
            <FoodOrSnacks
                typeItem={FoodItem}
                OnMenu={foodOnMenu}
                NotOnMenu={foodNotOnMenu}
                newItemName={newFoodItemName}
                setNewItemName={setNewFoodItemName}
                newItemPrice={newFoodItemPrice}
                setNewItemPrice={setNewFoodItemPrice}
                removeItemFromMenu={removeItemFromMenu}
                createNewFoodOrSnacksItem={createNewFoodOrSnacksItem}
                changeTheName={changeTheName}
                changeThePrice={changeThePrice}
                reInstateItemToMenu={reInstateItemToMenu}
                newNameRefs={newNameRefs}
                newPriceRefs={newPriceRefs}

            />

            {/*snacksItem*/}
            <FoodOrSnacks
                typeItem={SnacksItem}
                OnMenu={snacksOnMenu}
                NotOnMenu={snacksNotOnMenu}
                newItemName={newSnacksItemName}
                setNewItemName={setNewSnacksItemName}
                newItemPrice={newSnacksItemPrice}
                setNewItemPrice={setNewSnacksItemPrice}
                removeItemFromMenu={removeItemFromMenu}
                createNewFoodOrSnacksItem={createNewFoodOrSnacksItem}
                changeTheName={changeTheName}
                changeThePrice={changeThePrice}
                reInstateItemToMenu={reInstateItemToMenu}
                newNameRefs={newNameRefs}
                newPriceRefs={newPriceRefs}

            />

            {/*DrinkableItem*/}
            <FoodOrSnacks
                typeItem={DrinkableItem}
                OnMenu={drinkableOnMenu}
                NotOnMenu={drinkableNotOnMenu}
                newItemName={newDrinkableItemName}
                setNewItemName={setNewDrinkableItemName}
                newItemPrice={newDrinkableItemPrice}
                newItemVolume={newDrinkableItemVolume}
                setNewItemVolume={setNewDrinkableItemVolume}
                setNewItemPrice={setNewDrinkableItemPrice}
                removeItemFromMenu={removeItemFromMenu}
                createNewFoodOrSnacksItem={createNewDrinkableItem}
                changeTheName={changeTheName}
                changeThePrice={changeThePrice}
                changeTheVolume={changeTheVolume}
                reInstateItemToMenu={reInstateItemToMenu}
                newNameRefs={newNameRefs}
                newPriceRefs={newPriceRefs}
                newVolumeRefs={newVolumeRefs}

            />

            {/*DrinkableAlcoholicItem*/}
            <FoodOrSnacks
                typeItem={DrinkableAlcoholicItem}
                OnMenu={drinkableAlcoholicOnMenu}
                NotOnMenu={drinkableAlcoholicNotOnMenu}
                newItemName={newDrinkableAlcoholicItemName}
                setNewItemName={setNewDrinkableAlcoholicItemName}
                newItemPrice={newDrinkableAlcoholicItemPrice}

                newItemVolume={newDrinkableAlcoholicItemVolume}
                setNewItemVolume={setNewDrinkableAlcoholicItemVolume}
                newItemPercentage={newDrinkableAlcoholicItemPercentage}
                setNewItemPercentage={setNewDrinkableAlcoholicItemPercentage}
                newDrinkableAlcoholicItemType={newDrinkableAlcoholicItemType}
                setNewDrinkableAlcoholicItemType={setNewDrinkableAlcoholicItemType}

                setNewItemPrice={setNewDrinkableAlcoholicItemPrice}
                removeItemFromMenu={removeItemFromMenu}
                createNewFoodOrSnacksItem={createNewDrinkableAlcoholicItem}
                changeTheName={changeTheName}
                changeThePrice={changeThePrice}
                changeTheVolume={changeTheVolume}
                changeThePercentage={changeThePercentage}
                reInstateItemToMenu={reInstateItemToMenu}
                newNameRefs={newNameRefs}
                newPriceRefs={newPriceRefs}
                newVolumeRefs={newVolumeRefs}
                newPercentageRefs={newPercentageRefs}
                newItemTypeRefs={newItemTypeRefs}

            />

            {/*<FoodOrSnacks*/}
            {/*    typeItem={DrinkableItem}*/}
            {/*    OnMenu={drinkableOnMenu}*/}
            {/*    NotOnMenu={drinkableNotOnMenu}*/}
            {/*    newItemName={newDrinkableItemName}*/}
            {/*    setNewItemName={setNewDrinkableItemName()}*/}
            {/*    newItemPrice={newDrinkableItemPrice}*/}
            {/*    setNewItemPrice={setDrinkableItemPrice}*/}
            {/*    removeItemFromMenu={removeItemFromMenu}*/}
            {/*    createNewFoodOrSnacksItem={createNewFoodOrSnacksItem}*/}
            {/*    changeTheName={changeTheName}*/}
            {/*    changeThePrice={changeThePrice}*/}
            {/*    reInstateItemToMenu={reInstateItemToMenu}*/}
            {/*    newNameRefs={newNameRefs}*/}
            {/*    newPriceRefs={newPriceRefs}*/}

            {/*/>*/}
        </>

    )

}

export default MenuList;

// <>
//     <div className="wrapper">
//         <ul id="MenuList--Food">
//             <nav id="MenuList--description">Food Items on Menu</nav>
//             {foodOnMenu.map((item, index) => {
//                 return (
//                     <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
//                         <p>{`${item.nameOfItem}`}</p> <p>{`${item.price} kr`}</p>
//                         <button className="adminBtn" onClick={() => removeItemFromMenu(item)}>Remove {item.nameOfItem}</button>
//                     </li>
//                 )
//             })}
//         </ul>
//         <ul id="MenuList--Food">
//             <nav id="MenuList--description">Food Items NOT on Menu</nav>
//             {foodNotOnMenu.map((item, index) => {
//                 return (
//                     <li className="Menu--listOfItems" id={item.id} key={index} ref={el => newNameRefs.current[index] = el}>
//
//                         <p>{`${item.nameOfItem}`}</p>
//                         <div >
//                             <label>New Name:</label>
//                             <input value={newNameRefs[index]} type="text" onChange={e => newNameRefs[index]=(e.target.value)} placeholder={item.nameOfItem}/>
//                             <button onClick={() => changeTheName(newNameRefs[index], item)}>go</button>
//                         </div>
//                         <div >
//                             <label>New Price:</label>
//                             <input value={newPriceRefs[index]} type="number" onChange={e => newPriceRefs[index]=(e.target.value)} placeholder={item.price}/>
//                             <button onClick={() => changeThePrice(newPriceRefs[index], item)}>go</button>
//                         </div>
//                         <button className="adminBtn" onClick={() => reInstateItemToMenu(item)}>ReInstate {item.nameOfItem}</button>
//                     </li>
//                 )
//             })}
//         </ul>
//     </div>
//     <div className="wrapper">Create new FoodItem
//
//         <div >
//             <label>New Item Name:</label>
//             <input value={newItemName} type="text" onChange={e => setNewItemName(e.target.value)} placeholder={"New item Name"}/>
//             <input value={newItemPrice} type="number" onChange={e => setNewItemPrice(e.target.value)} placeholder={"New item price"}/>
//             <button onClick={() => createNewFoodOrSnacksItem(FoodItem, newItemName, newItemPrice)}>Create</button>
//         </div>
//     </div>
// </>

