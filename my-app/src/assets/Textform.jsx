export default function Textform(props) {
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for ="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
            <h1>Textform</h1>
        </div>
        </div>
    )
}