import {useForm} from "react-hook-form";
import {tierService} from "../../Services/tierService";
import {useEffect} from "react";
import css from "./tierStyle.module.css"
import {joiResolver} from "@hookform/resolvers/joi";
import {tierValidator} from "../../validators/tierValidator";

const TiersForm = ({setTiers, tierForUpdate, setTierForUpdate}) => {
    const {reset, setValue, register, handleSubmit, formState:{isValid, errors}} = useForm({
        mode:'all',
        resolver: joiResolver(tierValidator)
    })


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
            <input className={css.tierBrand} type="number" placeholder={'Brand'} {...register('brand')}/>
            {errors.brand && <div>{errors.brand.message}</div>}
            <input className={css.tierSeason} type="text" placeholder={'Season'} {...register('season')}/>
            {errors.season && <div>{errors.season.message}</div>}
            <input className={css.tierRadius} type="number" placeholder={'Radius'} {...register('radius')}/>
            {errors.radius && <div>{errors.radius.message}</div>}
            <input className={css.tierStock} type="number" placeholder={'Stock'} {...register('stock')}/>
            {errors.stock && <div>{errors.stock.message}</div>}
            <input className={css.tierPrice} type="number" placeholder={'Price'} {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
            <button className={css.tierBtn} disabled={!isValid}>{tierForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {TiersForm};