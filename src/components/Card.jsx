export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-info">
                    <img src={`${props.img}`} className="card-image" />
                    <p key={props.id} className="card-name">{props.name}</p>
                </div>
            </div>
        </>
    )

}
