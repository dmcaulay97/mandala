import './index.css';

const Block = ({ color, size }) => {

    const style = {
        backgroundColor: color,
        height: size,
    }


    return (
        <div className='block' style={style}>

        </div>
    )
};

export default Block;