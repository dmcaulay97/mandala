import "./index.css";
import Block from "../block";

import './index.css';
import { useState, useEffect } from "react";

const Canvas = () => {

    const [size, setSize] = useState(100)
    const [countArray, setCountArray] = useState([])

    const createGrid = () => {
        let height = window.innerHeight
        height *= .85;
        const width = window.innerWidth
        const numOfBlocks = Math.floor(height / size) * Math.floor(width / size)
        const countArray = []
        for (let i = 0; i < numOfBlocks; i++) {
            countArray.push(i)
        }

        const canvas = document.getElementsByClassName('canvas')[0];
        canvas.style.height = `${Math.floor(height / size) * size}px`
        canvas.style.width = `${Math.floor(width / size) * size}px`

        const start = document.getElementsByClassName('start')[0];
        start.style.display = "none"

        setCountArray(countArray);
    }


    return (
        <div className="canvas">
            <div className="start" onClick={createGrid}>
                Start
            </div>
            {
                countArray.map((e, index) => (<Block key={index} color="white" size={`${size}px`} />))
            }
        </div>
    )
};

export default Canvas;