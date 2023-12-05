"use client"
import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Link from "next/link"

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-8">Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="rounded-lg p-2 border-gray-300 mb-4"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value })
        }}
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="rounded-lg p-2 border-gray-300 mb-4"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value })
        }}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="rounded-lg p-2 border-gray-300 mb-4"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value })
        }}
        placeholder="password"
      />
      <button
        className="pl-4 pr-4 pt-2 pb-2 bg-slate-400 rounded-lg"
        onClick={onSignup}
      >
        Signup
      </button>
      <p>
        <Link className="underline" href="/login">
          Login
        </Link>
        here
      </p>
    </div>
  )
}
