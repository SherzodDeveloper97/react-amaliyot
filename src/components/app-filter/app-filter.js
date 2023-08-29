import "./app-filter.scss";

const AppFilter = ({updateFilterHandler, filter}) => {
    return (
        <div className="btn-group">
            {btnArray.map((item) => (
                <button key={item.name} onClick={() => updateFilterHandler(item.name)} className={`btn ${filter === item.name ? "btn-dark" : "btn-outline-dark"}`}>{item.label}</button>
            ))}
            {/* <button className="btn btn-dark">Barcha kinolar</button>
            <button className="btn btn-outline-dark">Mashhur kinolar</button>
            <button className="btn btn-outline-dark">Eng ko'p ko'rilgan kinolar</button> */}
        </div>
    )
}

const btnArray = [
    {name:"all", label:"Barcha kinolar"},
    {name:"popular", label:"Mashhur kinolar"},
    {name:"mostViewer", label:"Eng ko'p ko'rilgan kinolar"},
]
export default AppFilter;