// Code Keypad Component Here

function Keypad (){
    return (
        <input onChange={()=>console.log('Entering password...')} type="password"/>
    )
}

export default Keypad;