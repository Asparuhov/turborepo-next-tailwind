import React from 'react'
import { RegistrationForm } from 'ui'
import { useRouter } from "next/router";

type Props = {}

export default function Registration({}: Props) {
  const router = useRouter()
  return (
    <RegistrationForm popup={false} router={router} mainColor='bg-yellow-400' secondaryColor='bg-gray-800'/>
  )
}