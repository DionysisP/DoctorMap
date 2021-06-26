import Data from './data/doctors.json';

export default function ShowData(){

    return(
        <div >
        <h1>Show data component</h1>

        {Data.results.map( (postData, index) => {
                return (
                <ul>
                    <li>{postData.first_name}</li>
                    <li>{postData.last_name}</li>
                    <li>{postData.street_address}</li>
                </ul>
                )
            })}
        </div>
       
        
    )
}