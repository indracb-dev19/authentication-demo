import { UserProfile } from "@clerk/nextjs"

const UserProfilePage = () => {
  return (
    <div className="flex justify-center items-center py-8">
        <UserProfile path="/user-profile" />
    </div>
  )
}

export default UserProfilePage