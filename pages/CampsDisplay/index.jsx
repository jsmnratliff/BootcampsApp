import './index.css';

const CampsDisplay = () => {
    return (


        

        <div>
            {CampsDisplay.map((camp) => {
                return <div>{camp.name}</div>
            })}
        </div>
    )
}

export default Campsdisplay;