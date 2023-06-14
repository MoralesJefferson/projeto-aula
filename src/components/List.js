//slr
import './List.css'
const list = ({items}) => {
    return (
    <div className='listContainer'>
        {items.map(item=>(<p>{item}</p>))}
    </div>
    );
}

export default list;