import { CiLogout } from "react-icons/ci";
import useLogOut from "../../hooks/useLogOut";
const LogoutButton = () => {
  // eslint-disable-next-line no-unused-vars
  const {loading,logout} = useLogOut()
  return (
    <div className="mt-2 p-2 h-12 text-white fixed -bottom-2">
       {
        !loading ? (
          <CiLogout onClick={logout} className="text-2xl hover:text-gray-400 cursor-pointer"/>
        ) : (
           <span className="loading loading-spinner"></span>
        )
       }
    </div>
  )
}

export default LogoutButton