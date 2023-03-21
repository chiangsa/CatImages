import React, { useState, useEffect } from "react";

const CatImage = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await fetch("https://api.thecatapi.com/v1/images/search");
                const data = await response.json();
                setImageUrl(data[0].url);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCatImage();
    }, []);

    const handleNextImage = async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            setImageUrl(data[0].url);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container center">
            <img class="ss" src={imageUrl} alt="cat" className="cat-image" />
            <div><button class="bb" onClick={handleNextImage} className="next-button">
                Next
            </button></div>

        </div>
    );
};

export default CatImage;
