import {Button, Col, Row} from "react-bootstrap";
import useFetch from "../hooks/useFetch";

function ButtonsWithFunctions(props) {

    const { get, loading } = useFetch("http://localhost:8081/api/");

    function connectToBackend(props) {
        console.log("connectToBackend")
        get(props)
            .then((data) => {
                console.log("inside then "+props+" "+data)
            })
            .catch((error) => {
                console.log("Error fetching inside : "+props+" "+ error);
            });
    }


    function closeTheKitchen() {
        console.log(" close the kitchen")
        connectToBackend("CloseTheKitchen")
        props.update()
    }

    function removeAlcoholicBeverages() {
        console.log(" removeAlcoholicBeverages ")
        connectToBackend("RemoveAlcoholFromMenu")
        props.update()
    }

    function removeAllItemsFromMenu() {
        console.log(" RemoveAllItemsFromMenu ")
        connectToBackend("RemoveAllItemsFromMenu")
        props.update()
    }

    function openTheKitchen() {
        console.log(" openTheKitchen ")
        connectToBackend("OpenTheKitchen")
        props.update()
    }

    function reInstateAlcoholicBeverages() {
        console.log(" reInstateAlcoholicBeverages ")
        connectToBackend("ReinstateAlcoholToMenu")
        props.update()
    }

    function reInstateAlItems() {
        console.log(" reInstateAlItems ")
        connectToBackend("ReInstateAllItemsFromMenu")
        props.update()
    }

    return (
        <div id="ButtonsWithFunctions-btns">
            <Row className="mx-0">
                <Button onClick={closeTheKitchen} className="adminBtn" as={Col} variant="danger">Close kitchen</Button>
                <Button onClick={removeAlcoholicBeverages} className="adminBtn" as={Col} variant="danger">Remove all alcoholic beverages</Button>
                <Button onClick={removeAllItemsFromMenu}className="adminBtn" as={Col} variant="danger">Remove all items from menu</Button>
            </Row>
            <Row className="mx-0">
                <Button onClick={openTheKitchen} className="adminBtn" as={Col} variant="dark">Open the kitchen</Button>
                <Button onClick={reInstateAlcoholicBeverages} className="adminBtn" as={Col} variant="dark">Reinstate all alcoholic beverages</Button>
                <Button onClick={reInstateAlItems} className="adminBtn" as={Col} variant="dark">Reinstate all products on menu</Button>
            </Row>
            
        </div>
    )
}

export default ButtonsWithFunctions;