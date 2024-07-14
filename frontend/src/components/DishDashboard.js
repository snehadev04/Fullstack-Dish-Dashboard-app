import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishDashboard = () => {
    // State to hold the list of dishes
    const [dishes, setDishes] = useState([]);

    // Fetch dishes from the backend when component mounts
    useEffect(() => {
        fetchDishes();
    }, []);

    // Function to fetch dishes from the backend
    const fetchDishes = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/dishes');
            setDishes(response.data);
        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    // Function to toggle the publish status of a dish
    const togglePublish = async (dishId) => {
        try {
            await axios.post(`http://127.0.0.1:5000/api/dishes/${dishId}/toggle`);
            fetchDishes();
        } catch (error) {
            console.error('Error toggling publish status:', error);
        }
    };

    // Render the Dish Dashboard UI
    return (
        <div>
            <h1>Dish Dashboard</h1>
            <ul>
                {dishes.map(dish => (
                    <li key={dish.dishId}>
                        <img src={dish.imageUrl} alt={dish.dishName} width="100" />
                        <h2>{dish.dishName}</h2>
                        <p>Published: {dish.isPublished ? 'Yes' : 'No'}</p>
                        <button onClick={() => togglePublish(dish.dishId)}>
                            Toggle Publish Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishDashboard;


