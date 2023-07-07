import { GetImg } from "./Util";

export function Avatar( {person, size=200} ) {
    const imgUrl = GetImg(person.imageId);  
    const imgSrc = 'Images/'+imgUrl+'.jpeg'; 
    console.log(person.imageId + " " + person.name); 

    return (
        <>
            <img
                className = 'avatar'
                src = {imgSrc}
                alt = {person.name} 
                width = {size+200} 
                height = {size}
            /> 
            <h3> {person.name} </h3>
        </>
    )
}