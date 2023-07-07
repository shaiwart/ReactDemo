import {Avatar} from './Avatar'; 

export default function Profile() {
    return (
        <div>
            <Avatar person={ {name: 'Desert', imageId: 0} } size={300}  /> <br/> 
            <Avatar person={ {name: 'Koala', imageId: 1} } size={300}  /> <br/> 
            <Avatar person={ {name: 'Panguin', imageId: 2} } size={300}  /> <br/> 
        </div>
    )
}