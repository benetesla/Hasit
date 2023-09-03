import React from "react";
import { IDinamycs } from "../../interfaces/IDinamycs";
import "../Products/ClientsStyle.css";
const ProductsData: React.FC<IDinamycs> = (props) => {
    return (
        <div className="first-des">
            <div className="desc-text">
                <h2>{props.heading}</h2>
                <p>
                    {props.text}
                </p>
            </div>
            <div className="desc-img">
                <img src={props.img2} alt="João da Silva" />
                <img src={props.img1} alt="João da Silva" />
            </div>
        </div>
    );
};

export default ProductsData;
