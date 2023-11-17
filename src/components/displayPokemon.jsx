import CharmanderJson from "../charmander.json"
import CharizardJson from "../charizard.json"
const Charmander = CharmanderJson
const Charizard = CharizardJson

function Charmander(props) 
{
    return (
        <div>imc src={props.sprites.front_default} /> 
        <h1>{props.name}</h1>
        </div>
    )
}

function Charizard(props) 
{
    return (
        <div>imc src={props.sprites.front_default} /> 
        <h1>{props.name}</h1>
        <h2>Type 1: {props.types[0].type.name}</h2>
        <h2>Type 2: {props.types[1].type.name}</h2>
        </div>
    )
}

//export default function Charizard
//export default function Charmander