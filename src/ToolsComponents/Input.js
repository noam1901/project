function Input(props){
    return (
        <div className="single-input">
            <label>{props.label}</label><br></br>
            {!(props.type === 'select')?<input name={props.name} type={props.type} defaultValue={props.value} placeholder={props.placeholder} onBlur={(e)=>props.onBlur(e.target.name, e.target.value)}></input>:
            <select onChange={(e)=>props.onBlur(e.target.name, e.target.value)} name={props.name}>
                {props.values.map(val => <option value={val.value} key={val.value}>{val.name}</option>)}
            </select>}
            <div className="input-error">
               {
                props.errors.map((error, index)=> <p key={index}>{error.value}</p>)
            } 
            </div>
            
        </div>
    )
}
export default Input