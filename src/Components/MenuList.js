import {Container, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

function MenuList(){

    const { get, put } = useFetch("http://localhost:8081/api/");
    const [foodOnMenu, setFoodOnMenu] = useState([]);
    const [foodNotOnMenu, setFoodNotOnMenu] = useState([]);

    useEffect(() => {
        get("ShowFoodOnMenu")
            .then((data) => {
                setFoodOnMenu([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }, [update()]);

    useEffect(() => {
        get("ShowFoodNotOnMenu")
            .then((data) => {
                setFoodNotOnMenu([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }, [update()]);

    function update(){//useEffect is updated when this runs
        console.log("TODO fix spamming failed to fetch")
        return
    }

    function removeItemFromMenu(item) {
        put("SetOutOfStockSingleItem/"+item.id)
            .then((data) => {
               console.log(data)
            })
            .catch((error) => {
            console.log("Error setting Item out of stock: ", error);
        });

        update();
    }

    function reInstateItemToMenu(item) {

        put("SetInStockSingleItem/"+item.id)
            .then((data) => {
                console.log( data)
            })
            .catch((error) => {
                console.log("Error setting Item In stock: ", error);
            });

        update();
    }

    function changeName(item) {
        console.log("change name of item TODO backend", item.nameOfItem)
    }

    function changePrice(item) {
        console.log("change price of item TODO backend", item.price)
    }

    return (
        <div className="wrapper">
            <ul id="MenuList--Food">
                <nav id="MenuList--description">Food Items on Menu</nav>
                {foodOnMenu.map((item, index) => {
                    return (
                        <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                            <p>{`${item.nameOfItem}`}</p> <p>{`${item.price} kr`}</p>
                            <button className="adminBtn" onClick={() => removeItemFromMenu(item)}>Remove {item.nameOfItem}</button>
                        </li>
                    )
                })}
            </ul>
            <ul id="MenuList--Food">
                <nav id="MenuList--description">Food Items NOT on Menu</nav>
                {foodNotOnMenu.map((item, index) => {
                    return (
                        <li className="Menu--listOfItems" id="Menu--listOff" key={index}>
                            <p>{`${item.nameOfItem}`}</p>
                            <button className="adminBtn" onClick={() => changeName(item)}>change Name</button>
                            <button className="adminBtn" onClick={() => changePrice(item)}>change price {item.price} kr</button>
                            <button className="adminBtn" onClick={() => reInstateItemToMenu(item)}>ReInstate {item.nameOfItem}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
export default MenuList;
