import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    // const photoUrl ="https://newjams-images.scdn.co/v2/discover-weekly/IQtw7Xo5g3eMyfdReawR9IXLh4P0IqGfh-vduTLSmOx3pnVyWu_y2KCHaxBNuXZr5ozyr8DJigxCCpwjC7V0zirVCdyOa_IxJ2dNcAISiyzuO6DI6cQflGA0LhgiYndJYZoHP0Mh175DgkjiUIuodTKKmu6l43E86ffYWzMIVpmALX_P_sPr915_2dG9D_gahbzGK0tuhPk_GF_n2B3rCQ==/NTE6MzU6NDBUMDMtMDEtMA==/default"
    
    return (
        <div className="body">
            <Header spotify={spotify} />
            
            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="bodyInfoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="bodySongs">
                <div className="bodyIcons">
                    <PlayCircleFilledIcon className="bodyShuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
