"use client"
import React from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="">Signup</h1>
      <hr />
    </div>
  )
}
