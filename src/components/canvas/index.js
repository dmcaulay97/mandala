import "./index.css";
import Block from "../block";

import './index.css';
import { useState, useEffect } from "react";

const Canvas = () => {

    const [size, setSize] = useState(20)
    const [countArray, setCountArray] = useState([])
    const [cols, setCols] = useState(0);
    const [rows, setRows] = useState(0)

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

    const randomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    const createGrid = () => {
        let height = window.innerHeight
        height *= .85;
        const width = window.innerWidth
        const numOfRows = Math.floor(height / size)
        const numOfCols = Math.floor(width / size)
        setCols(numOfCols)
        setRows(numOfRows)
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

    const findPosition = (x, y) => {
        return x + (y * cols)
    }

    const colorChange = (e) => {
        const block = e.target
        const xVal = block.getAttribute("x")
        const yVal = block.getAttribute("y")
        // block.style.backgroundColor = "red"
        changeOnCoords(xVal, yVal, 0)
    }

    const changeOnCoords = (x, y, colorIndex) => {

        const blocks = document.getElementsByClassName('block')
        const xVal = parseInt(x)
        const yVal = parseInt(y)
        const position = findPosition(xVal, yVal)
        const block = blocks[position]
        if (block.style.backgroundColor == 'white') {

            block.style.backgroundColor = colors[colorIndex]
            const xMax = xVal + 1
            const xMin = xVal - 1
            const yMax = yVal + 1
            const yMin = yVal - 1
            for (let i = -1; i <= 1; i++) {
                for (let z = -1; z <= 1; z++) {
                    if (i != 0 || z != 0) {
                        const adjacentX = xVal + z
                        const adjacentY = yVal + i
                        const adjacentPosition = findPosition(adjacentX, adjacentY)
                        if ((adjacentX >= 0) && (adjacentX < cols) && (adjacentY >= 0) && (adjacentY < rows)) {
                            const adjacentBlock = blocks[adjacentPosition]
                            if (adjacentBlock.style.backgroundColor == "white") {
                                setTimeout(() => { changeOnCoords(adjacentX, adjacentY, (colorIndex + 1) % 7) }, 0)
                                // changeOnCoords(adjacentX, adjacentY, (colorIndex + 1) % 7)
                            }
                        }
                    }
                }
            }

        }

        // for (let i = position - cols - 1; i < position + cols + 1; i++) {
        //     const adjacentBlock = blocks[i]
        //     const x = blocks[i].getAttribute('x')
        //     const y = blocks[i].getAttribute('y')

        //     if ((x >= xMin) && (x <= xMax) && (y <= yMax) && (y >= yMin) && ((x != xVal) || (y != yVal))) {
        //         if (adjacentBlock.style.backgroundColor == "white") {
        //             setTimeout(() => { changeOnCoords(x, y) }, 0)
        //         }
        //     }

        // }



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