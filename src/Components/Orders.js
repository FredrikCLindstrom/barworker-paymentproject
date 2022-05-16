import MainNavbar from "./MainNavbar";
import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";

function Orders(){

    const [todaysDate, setTodaysDate]= useState("")
    const [yesterdaysDate, setYesterdaysDate]= useState("")
    const { get } = useFetch("http://localhost:8081/api/");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        get("getTodaysReceipts")
            .then((data) => {
                setOrders([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
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
            <>orders go here</>
            <div className="wrapper">
                <ul id="MenuList--Food">
                    <nav id="MenuList--description">Todays Receipts {`${todaysDate}`} {`${yesterdaysDate}`}</nav>
                    {orders.map((order, index) => {
                        return (
                            <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                                <p>{`table: ${order.tableNr}`}</p>
                                <p>{`${order.date}`}</p>
                                <p>{`${order.time}`}</p>

                                {order.itemsPurchased.map((item, index) => {
                                return(
                                    <li className="" id="" key={index}>
                                        <p>{`${item.nameOfItem}`}</p>
                                    </li>
                                )
                    })}
                                <p>{`total:${order.totalPrice} kr`}</p>

                            </li>
                        )
                    })}

                </ul>
            </div>
            </>

    )
}
export default Orders;
