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
                            {/*<p>{`table: ${order.tableNr}`}</p>*/}
                            {/*<p>{`${order.date}`}</p>*/}
                            {/*<p>{`${order.time}`}</p>*/}

                            {/*<ul>*/}
                            {/*    {order.itemsPurchased.map((item, index) => {*/}

                            {/*        return (*/}
                            {/*            <li className="" id="" key={index}>*/}
                            {/*                <p>{`${item.nameOfItem}`} {`${item.price} kr`}</p>*/}
                            {/*            </li>*/}
                            {/*        )*/}
                            {/*    })}*/}
                            {/*</ul>*/}
                            {/*<p>{`total:${order.totalPrice} kr`}</p>*/}
                            {/*<button className="adminBtn">reprint receipt</button>*/}
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        {`table: ${order.tableNr}`}
                                    </div>
                                    <div className="col-2">
                                        {`${order.time}`}
                                    </div>
                                    <div className="col-2">
                                        {`${order.date}`}
                                    </div>
                                    <div className="col-4">
                                        <ul className="ulinorders">
                                            {order.itemsPurchased.map((item, index) => {

                                                return (
                                                    <li className="listinorders" id="" key={index}>
                                                        <p>{`${item.nameOfItem}`} {`${item.price} kr`}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <button className="adminBtn">reprint receipt</button>
                                    </div>
                                </div>
                            </div>

                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
export default ShowReceiptsAsList;