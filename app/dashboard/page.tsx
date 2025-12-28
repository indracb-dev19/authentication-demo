// import { useAuth, useUser } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server'

const DashboardPage = async () => {
    // we can use auth and currentUser function for server action
    const authObj = await auth()
    const currentUserObj = await currentUser();

    // we also can use hook if we want to load auth object and user object to client component. This is the example of the implementation
    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    // const {isLoaded, isSignedIn, user} = useUser()


  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage