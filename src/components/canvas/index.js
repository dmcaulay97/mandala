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
        const numOfRows = Math.floor(height / size)
        const numOfCols = Math.floor(width / size)
        const numOfBlocks = numOfRows * numOfCols

        const countArray = []
        for (let i = 0; i < numOfBlocks; i++) {
            const blockId = {
                x: i % numOfCols,
                y: Math.floor(i / numOfCols),
                color: "white",
            }

            countArray.push(blockId)
        }

        const canvas = document.getElementsByClassName('canvas')[0];
        canvas.style.height = `${Math.floor(height / size) * size}px`
        canvas.style.width = `${Math.floor(width / size) * size}px`

        // const start = document.getElementsByClassName('start')[0];
        // start.style.display = "none"

        setCountArray(countArray);
    }

    const colorChange = (e) => {
        const block = e.target
        const x = block.getAttribute("x")
        const y = block.getAttribute("y")
        block.style.backgroundColor = "red"
    }

    const changeOnCoords = (x, y) => {

    }


    return (
        <div className="canvas">
            <div className="start" onClick={createGrid}>
                Start
            </div>
            {
                countArray.map((e, index) => {
                    return <Block key={index} x={e.x} y={e.y} color={e.color} size={`${size}px`} colorChange={colorChange} />
                })
            }
        </div>
    )
};

export default Canvas;