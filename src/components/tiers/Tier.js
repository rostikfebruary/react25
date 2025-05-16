import {tierService} from "../../Services/tierService";
import css from "./tierStyle.module.css"

const Tier = ({tier, changeTrigger, setTierForUpdate}) => {
    const {id, brand_name, radius, price, season, stock} = tier

    const deleteTier =() =>{
        tierService.delete(id)
        changeTrigger()
    }

    return (
        <div className={css.tierBlock}>
            <div>id: {id}</div>
            <div>brand_name: {brand_name}</div>
            <div>season: {season}</div>
            <div>radius: {radius}</div>
            <div>stock: {stock}</div>
            <div>price: {price}</div>
            <button className={css.tierUpdate} onClick={() => setTierForUpdate(tier)}>Update</button>
            <button className={css.tierDelete} onClick={deleteTier}>Delete</button>
        </div>
    );
};

export {Tier};