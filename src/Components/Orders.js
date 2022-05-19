import MainNavbar from "./MainNavbar";
import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

function Orders(){

    const [todaysDate, setTodaysDate]= useState("")
    const [yesterdaysDate, setYesterdaysDate]= useState("")
    const { get } = useFetch("http://localhost:8081/api/");
    const [todaysOrders, setTodaysOrders] = useState([]);
    const [yesterdaysOrders, setYesterdaysOrders] = useState([]);

    useEffect(() => {
        get("getTodaysReceipts")
            .then((data) => {
                setTodaysOrders([...data])
            })
            .catch((error) => {
                console.log("Error fetching todays orders: ", error);
            });
    }, []);

    useEffect(() => {
        get("getYesterdayReceipts")
            .then((data) => {
                setYesterdaysOrders([...data])
            })
            .catch((error) => {
                console.log("Error fetching yesterdays orders: ", error);
            });
    }, []);

    useEffect(() => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        setTodaysDate(date)
    }, []);

    useEffect(() => {
        const current = new Date();
        const date = `${current.getDate()-1}/${current.getMonth()+1}/${current.getFullYear()}`;
        setYesterdaysDate(date)
    }, []);

    return(
        <>
            <MainNavbar/>
            <div className="wrapper">
                <ul id="MenuList--Food">
                    <nav id="MenuList--description">Todays Receipts {`${todaysDate}`}</nav>
                    {todaysOrders.map((order, index) => {
                        return (
                            <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                                <p>{`table: ${order.tableNr}`}</p>
                                <p>{`${order.date}`}</p>
                                <p>{`${order.time}`}</p>

                                <ul>
                                {order.itemsPurchased.map((item, index) => {
                                return(
                                    <li className="" id="" key={index}>
                                        <p>{`${item.nameOfItem}`} {`${item.price} kr`}</p>
                                    </li>
                                )
                    })}
                                </ul>
                                <p>{`total:${order.totalPrice} kr`}</p>
                                <button className="adminBtn">reprint receipt</button>

                            </li>
                        )
                    })}

                </ul>
            </div>
            <div className="wrapper">
                <ul id="MenuList--Food">
                    <nav id="MenuList--description">Yesterdays Receipts {`${yesterdaysDate}`}</nav>
                    {yesterdaysOrders.map((order, index) => {
                        return (
                            <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                                <p>{`table: ${order.tableNr}`}</p>
                                <p>{`${order.date}`}</p>
                                <p>{`${order.time}`}</p>

                                <ul>
                                    {order.itemsPurchased.map((item, index) => {
                                        return(
                                            <li className="" id="" key={index}>
                                                <p>{`${item.nameOfItem}`} {`${item.price} kr`}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p>{`total:${order.totalPrice} kr`}</p>
                                <button className="adminBtn">reprint receipt</button>

                            </li>
                        )
                    })}

                </ul>
            </div>
            </>

    )
}
export default Orders;
