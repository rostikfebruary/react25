import {useForm} from "react-hook-form";
import {tierService} from "../../Services/tierService";
import {useEffect} from "react";
import css from "./tierStyle.module.css"

const TiersForm = ({setTiers, tierForUpdate, setTierForUpdate}) => {
    const {reset, setValue, register, handleSubmit, formState:{isValid}} = useForm()


    useEffect(() => {
        if (tierForUpdate){
            setValue('brand', tierForUpdate.brand)
            setValue('season', tierForUpdate.season)
            setValue('radius', tierForUpdate.radius)
            setValue('stock', tierForUpdate.stock)
            setValue('price', tierForUpdate.price)
        }
    }, [tierForUpdate, setValue]);

    const save =(tier) =>{
        tierService.create(tier).then(({data}) => setTiers(prev => [...prev, data]))
        reset()
    }

    const update = (tier) =>{
        tierService.update(tierForUpdate.id, tier)
        setTierForUpdate(null)
        reset()
    }


    return (
        <form className={css.tierStyle} onSubmit={handleSubmit(tierForUpdate ? update : save)}>
            <input className={css.tierBrand} type="text" placeholder={'Brand'} {...register('brand')}/>
            <input className={css.tierSeason} type="text" placeholder={'Season'} {...register('season')}/>
            <input className={css.tierRadius} type="number" placeholder={'Radius'} {...register('radius')}/>
            <input className={css.tierStock} type="number" placeholder={'Stock'} {...register('stock')}/>
            <input className={css.tierPrice} type="number" placeholder={'Price'} {...register('price')}/>
            <button className={css.tierBtn} disabled={!isValid}>{tierForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {TiersForm};