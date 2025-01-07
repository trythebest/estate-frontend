import React, { useState } from 'react';
import { backendUrl } from '../../../../config';
import styles from "./Add.module.css";

const Add = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
        price: '',
        location: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${backendUrl}/item/create`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (response.ok) {
                alert('Item added successfully!');
                setFormData({
                    title: '',
                    image: '',
                    description: '',
                    price: '',
                    location: '',
                });
            } else {
                alert('Failed to add item. Please try again.');
            }
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to add item. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form className={styles.itemform} onSubmit={handleSubmit}>
            <div>
                <label className={styles.label}>
                    Type:
                    <input
                        type="text"
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Property Type or Name'
                    />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Image:
                    <input
                        type="text"
                        name='image'
                        value={formData.image}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Image URL'
                    />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Price:
                    <input
                        type="text"
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Price'
                    />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Location:
                    <input
                        type="text"
                        name='location'
                        value={formData.location}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Location'
                    />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Description:
                    <textarea
                        style={{ width: "100%", height: "100px" }}
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Description'
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Add;