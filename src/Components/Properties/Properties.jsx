import React, { useState, useEffect } from 'react';
import { backendUrl } from '../../../config';
import Prostyle from "../Properties/Proparties.module.css"
import { Link } from 'react-router-dom';
const Properties = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/item/getall`);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching items:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
            <div className={Prostyle.nav}>
                    <div className={Prostyle.title}>
                        <i className="fa fa-home" aria-hidden="true"><b style={{ marginLeft: "10px" }}>Realestate</b></i>
                    </div>
                    <div className={Prostyle.navlink}>
                        <Link to="/items/home">Home</Link>
                        <Link to="/items/properties">Properties</Link>
                        <Link to="/items/add">Add</Link>

                    </div>
                    <div className={Prostyle.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true"><b style={{ marginLeft: "10px" }}>SignUp</b></i>
                    </div>
                </div>
                <h2>Proparties</h2>
                <div className={Prostyle.wholecart}>
                    {items.map(product => (
                        <div className={Prostyle.card} key={product.id}>
                            <div>
                                <div className={Prostyle.right}>
                                    <img src={product.image} />
                                </div>
                                <div className={Prostyle.left}>
                                    <div>{product.title}</div>
                                    <div>{product.price}</div>
                                    <div>{product.location}</div>
                                    <div className={Prostyle.button}>
                                        <button >description</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Properties;