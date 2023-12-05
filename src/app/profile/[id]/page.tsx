export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-8xl">Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile page{" "}
        <span className="rounded-md bg-orange-500">{params.id}</span>
      </p>
    </div>
  )
}
