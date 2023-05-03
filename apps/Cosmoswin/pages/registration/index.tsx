import React, { useRef } from 'react'
import { useRouter } from "next/router";
import { RegistrationForm, Lobby } from 'ui'


type Props = {}
export default function Registration({}: Props){
  const router = useRouter();
  const registrationFormRef = useRef(null);

  const handleOutsideClick = (e: any) => {
    if (registrationFormRef.current && !registrationFormRef.current.contains(e.target)) {
      router.push('/lobby');
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 z-50" onClick={handleOutsideClick}>
        <div ref={registrationFormRef}>
          <RegistrationForm popup={true} closePopup={() => router.push("/lobby")} router={router} mainColor='bg-teal-300' secondaryColor='bg-gray-700'/>
        </div>
      </div>
      <Lobby brand="Cosmoswin"/>
    </>
  )
}