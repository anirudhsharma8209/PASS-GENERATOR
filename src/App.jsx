import React, { Fragment, useCallback, useEffect, useState } from 'react'

const App = () => {

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"
        if(numberAllowed) str += "0123456789";
        if(characterAllowed) str += "~`!@#$%^&*()_+-={[}]/";
        for(let i = 0; i < length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, characterAllowed, setPassword]);
    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, characterAllowed, passwordGenerator]);
    return (
    <Fragment>
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className="card col-7">
                <div className="card-header text-center alert fs-4">
                    Password Generator
                </div>
                <div className="card-body">
                    <div className="input-body">
                        <label className='fs-5'>Password</label>
                        <div className="input-container d-flex">
                            <input type="text" className="form-control mt-2 p-2 bg-light" value={password} readOnly placeholder='Your Password ' />
                            <button className='btn btn-dark  mt-2 rounded-0 rounded-end'>Copy</button>
                        </div>
                    </div>
                    <div className="controller mt-3 d-flex justify-content-evenly align-items-center">                                                                        
                        <input type="range"  value={length} min={6} max={100} onChange={(e) => {setLength(e.target.value)}} />
                         Length ({length})
                        <input type="checkbox" class="btn-check btn-sm" id="btncheck1" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btncheck1">Numbers</label>                        
                        <input type="checkbox" class="btn-check btn-sm" id="btncheck1" defaultChecked={characterAllowed} onChange={() => {setCharacterAllowed((prev) => !prev)}} autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btncheck1">Specail</label>                          
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default App