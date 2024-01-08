import React, { useRef, useState } from "react";
import "./CustomForm";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Password } from 'primereact/password';

let CustomForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let handleLogin = () => {
        console.log("Button pressed");
        console.log({name});
        console.log({password});
    }
  return (
    <div className="grid m-4">
      <div className="col-offset-4 ">
        <div className="card p-7 shadow-8 bg-blue-50 mt-8">
          <div className="m-2">
            <label htmlFor="userName" className="text-100 block">
              User Name:
            </label>
            <InputText id="userName" className="block" value={name} onChange={(e) => setName(e.target.value)}></InputText>
          </div>

          <div className="m-2">
            <label htmlFor="password" className="text-100 block">
              Password:
            </label>
            <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={true}  />
          </div>
          <div className="pt-2 pl-7 m-2 justify-content-center">
            <Button onClick={handleLogin} label="Submit"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
