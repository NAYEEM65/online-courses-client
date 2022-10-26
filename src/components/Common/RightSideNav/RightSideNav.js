import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    console.log(categories);
    return (
        <div className="flex justify-center items-start flex-col">
            {categories.map((category) => (
                <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
            ))}
        </div>
    );
};

export default RightSideNav;
