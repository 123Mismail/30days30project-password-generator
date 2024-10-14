"use client"
import React, { useState } from "react";
 

function page() {
const [uppercaseAllow,setUpperCaseallowed]=useState(false);
const [lowercaseAllow,setLowerCaseAllowed]=useState(false);
const [numberAllow,setNumberAllow]=useState(false);
const [symbolsAllow,setSymbolaloow]=useState(false);
const [passwordLength,setPAsswordLength]=useState(0);
const [password,setPassword]=useState(" ")



   const generatePasswor=()=>{
    let password="";
    let str="";
    if(uppercaseAllow) str +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercaseAllow) str +="abcdefghijklmnopqrstuvwxyz";
    if(numberAllow) str +="0123456789";
    if(symbolsAllow) str +="!@#$%^&*()_+-={}[]|\:;'<>,.?/";

    for(let i=1 ; i<= passwordLength; i++){

      let char=Math.floor(Math.random()*str.length +1);
      password+= str.charAt(char);
    }

return password

   }

const onClickGeneratePassword=()=>{
  const password=generatePasswor();
  setPassword(password);
  console.log(password);
  console.log(passwordLength,"length of password")
};

const handlePassworCopy=()=>{

     navigator.clipboard.writeText(password);
     alert("password is copied on clipboard");
      setPassword("")
}


  return (
    <div className="mx-auto  lg:mt-[10vh]   items-center lg:max-h-[500px] h-screen   max-w-[500px] w-full bg-gradient-to-b from-blue-600 to-green-600 p-6 text-xl rounded-xl">
      <div className="pt-2 ">
        <h1 className="text-center text-3xl font-medium text-white">
          Password Generator
        </h1>
        <p className="pt-2 text-lg ">
          Create a secure password with just a few clicks.
        </p>
      </div>
      <div className="pt-1 pb-1 w-full">
        <label className="block pb-1 font-medium" htmlFor="#">
          length{" "}
        </label>
        <input className="w-full p-1 rounded-xl outline-none " type="number"
        onChange={(e:React.ChangeEvent<HTMLElement>)=>setPAsswordLength(e.target.value)}
        />
      </div>
      <div>
        <h2 className="tex-xl font-medium pt-1 pb-1">Includes:</h2>

        <input type="checkbox" className=" rounded-full"
        onClick={()=>setNumberAllow(!numberAllow)}
        />
        <label className="font-medium text-lg pl-1 ">Numbers</label>
        <br></br>
        <input type="checkbox" 
          onClick={()=>setUpperCaseallowed(!uppercaseAllow)}
        />
        <label className="font-medium text-lg pl-1 " htmlFor="#">
          Uppercase
        </label>
        <br></br>
        <input type="checkbox"
        onClick={()=>setLowerCaseAllowed(!lowercaseAllow)}
        />
        <label className="font-medium text-lg pl-1 " htmlFor="#">
          Lowercase
        </label>
        <br></br>
        <input type="checkbox" 
        onClick={()=>setSymbolaloow(!symbolsAllow)}
        />
        <label className="font-medium text-lg pl-1 " htmlFor="#">
          Symbols
        </label>
        <br></br>
      </div>
      <div className="mx-auto text-center text-lg pt-1 pb-1">
        <button className="px-10 py-1 w-full rounded-xl bg-black text-white font-medium  hover:opacity-80 "
        onClick={onClickGeneratePassword}
        >
          Generate Password
        </button>
      </div>
      <label className="block pt-1 pb-1 text-lg" htmlFor="#">
        Generated password{" "}
      </label>
      <input
      readOnly
        type="text"
        className={`rounded-xl p-1   outline-none  bg-white  lg:max-w-2/3 w-full `}
        value={password}
      />
      <button className="rounded-xl mt-3 w-full  hover:opacity-80    text-lg font-medium  py-1 bg-black text-white" 
      onClick={handlePassworCopy}
      >
        Copy Password
      </button>
    </div>
  );
}

export default page;
