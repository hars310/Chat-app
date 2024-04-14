import { CiLogout } from "react-icons/ci";
const LogoutButton = () => {
  return (
    <div className="mt-2 p-2 h-12 text-white fixed -bottom-2">
        <CiLogout className="text-2xl hover:text-gray-400 cursor-pointer"/>
    </div>
  )
}

export default LogoutButton