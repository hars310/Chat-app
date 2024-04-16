import MessageContainer from "../components/MessageContainer/MessageContainer"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[530px] rounded-lg overflow-hidden bg-gray-600 border-[0.2px] border-zinc-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home






// import MessageContainer from "../components/MessageContainer/MessageContainer"
// import Sidebar from "../components/Sidebar/Sidebar"

// const Home = () => {
//   return (
//     <div className="flex sm:h-[450px] md:h-[520px] rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
//       <Sidebar />
//       <MessageContainer />
//     </div>
//   )
// }

// export default Home