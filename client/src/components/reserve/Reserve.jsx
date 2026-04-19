import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Reserve = ({setOpen , hotelId})=>{
    const { data , loading , error } = useFetch( `/hotels/rooms/${hotelId}`)
    const [ selectedRooms , setSelectedRooms ] = useState([])
    const {dates} = useContext(SearchContext)

    const getDatesInRange = (startDate,endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start)

        let list = [];

        while (date <= end) {
            list.push( date.getTime());
            date.setDate(date.getDate()+1);
            
        }
        return list;
    }
    const alldates =  getDatesInRange(dates[0].startDate , dates[0].endDate);
    const handleSelect = (e)=>{
        const checked = e.target.checked
        const value = e.target.value;
        setSelectedRooms(
            checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item)=>item !== value )
        )
    } 

    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon 
                    icon={faCircleXmark} 
                    className="rClose" 
                    onClick={()=>setOpen(false)}/>
            </div>
            <span key={data._id} >Select your rooms: </span>
            {data.map((item)=>(
                <div className="rItem" key={item._id}>
                    <div className="rItemInfo"> 
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max people :<b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>

                    {item.roomNumbers.map((roomNumber)=>
                        (
                            <div className="room">
                                <label>{roomNumber.number}xxxx</label>
                                <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                            </div>
                        ))
                    }
                    
                </div>
                ))
            }
            <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    )
}
export default Reserve