import {forEach} from "react-bootstrap/ElementChildren";
import {useState} from "react";

function ShowReceiptsAsList(props){




    return(
        <div className="wrapper">
            <ul id="MenuList--Food">
                <nav id="MenuList--description">{`${props.todaysOrYesterdaysReceipts}`} {`${props.todaysOrYesterdaysDate}`}</nav>
                {props.todaysOrYesterdaysOrders.map((order, index) => {
                    return (
                        <li className="Menu--listOfItems" id="Menu--listOn" key={index}>
                            <p>{`table: ${order.tableNr}`}</p>
                            <p>{`${order.date}`}</p>
                            <p>{`${order.time}`}</p>

                            <ul>
                                {order.itemsPurchased.map((item, index) => {

                                    return (
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
    )
}
export default ShowReceiptsAsList;