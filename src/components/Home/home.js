import React from 'react'
import Recomen from '../../views/Recomended/recomen'
import Jointview from '../../views/Joint/jointview';
import './home.scss';
import Hotitem from '../../views/Hotitem/hotitem';
import Tvchanel from '../../views/TVchannels/tvchanel';
import Comedy from '../../views/Comedy/comedy';
import Collection from '../../views/Collections/collection';
import Tvseries from '../../views/TVseries/tvseries';
import Service from '../../views/Services/service';
import Uzfilm from '../../views/Uzfilm/uzfilm';
import Instal from '../../views/Install/instal';
import Slider from '../../views/slider/slider';
function home() {
    return (
        <div className="home">
                <Slider/>
                <Recomen/>
                <Jointview/>
                <Hotitem/>
                <Tvchanel/>
                <Comedy/>
                <Collection/>
                <Tvseries/>
                <Service/>
                <Uzfilm/>
                <Instal/>
        </div>
    )
}

export default home
