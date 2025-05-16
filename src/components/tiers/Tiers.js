import {useEffect, useState} from "react";
import {tierService} from "../../Services/tierService";
import {Tier} from "./Tier";
import {TiersForm} from "./TiersForm";

const Tiers = () => {
    const [tiers, setTiers] = useState([])
    const [trigger, setTrigger] = useState()
    const [tierForUpdate, setTierForUpdate] = useState()



    const changeTrigger = () =>{
        setTrigger(prev => !prev)
    }

    useEffect(() => {
        tierService.getAll().then(({data}) => setTiers(data))
    }, [trigger]);
    return (
        <div>
            <TiersForm setTiers={setTiers} tierForUpdate={tierForUpdate} setTierForUpdate={setTierForUpdate}/>
            {tiers.map(tier => <Tier key={tier.id} tier={tier} changeTrigger={changeTrigger} tierForUpdate={tierForUpdate} setTierForUpdate={setTierForUpdate}/>)}
        </div>
    );
};

export {Tiers};