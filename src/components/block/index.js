import './index.css';

const Block = ({ color, size, x, y, colorChange }) => {

    const style = {
        backgroundColor: color,
        height: size,
    }

    return (
        <div className='block' style={style} x={x} y={y} onClick={(event) => { colorChange(event) }}>

        </div>
    )
};

export default Block;