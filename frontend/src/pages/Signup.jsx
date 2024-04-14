const Signup = () => {
    return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full rounded-lg p-6 shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
          <h1 className="text-3xl font-semibold text-center text-gray-200">
            Signup
            <span className="text-blue-500 ml-2">BaatCheet</span>
          </h1>
          <form action="" className="mt-2">
            <div>
              <label className="label p-1 flex-col items-start">
                <span className="text-base label-text block text-gray-700">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full input input-bordered h-10"
                />
              </label>
            </div>
            <div>
              <label className="label p-1 flex-col items-start">
                <span className="text-base label-text block text-gray-700">Username</span>
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="w-full input input-bordered h-10"
                />
              </label>
            </div>
            <div>
              <label className="label p-1 flex-col items-start">
                <span className="text-base label-text block text-gray-700">Password</span>
                <input
                  type="password"
                  placeholder="Enter a password"
                  className="w-full input input-bordered h-10"
                />
              </label>
            </div>
            <div>
              <label className="label p-1 flex-col items-start">
                <span className="text-base label-text block text-gray-700">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full input input-bordered h-10"
                />
              </label>
            </div>
            <div>
              <label className="label p-1 flex-col items-start">
                <span className="text-base label-text block text-gray-700">Gender</span>
                <select className="w-full input input-bordered h-10">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  
                </select>
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline mt-2 block text-center">{"Already have an account? Login"}</a>
            <div>
              <button className="btn btn-block btn-sm mt-2 h-10 p-2">Signup</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  


  
// incase we get into some trouble while adding the details to database from signup

//   const Signup = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full rounded-lg p-6 shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
//           <h1 className="text-3xl font-semibold text-center text-gray-200">
//             Signup
//             <span className="text-blue-500 ml-2">BaatCheet</span>
//           </h1>
//           <form action="" className="mt-2">
//             <div>
//               <label className="label p-1 flex-col items-start">
//                 <span className="text-base label-text block text-gray-700">Full Name</span>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="w-full input input-bordered h-10"
//                 />
//               </label>
//             </div>
//             <div>
//               <label className="label p-1 flex-col items-start">
//                 <span className="text-base label-text block text-gray-700">Username</span>
//                 <input
//                   type="text"
//                   placeholder="Choose a username"
//                   className="w-full input input-bordered h-10"
//                 />
//               </label>
//             </div>
//             <div>
//               <label className="label p-1 flex-col items-start">
//                 <span className="text-base label-text block text-gray-700">Password</span>
//                 <input
//                   type="password"
//                   placeholder="Enter a password"
//                   className="w-full input input-bordered h-10"
//                 />
//               </label>
//             </div>
//             <div>
//               <label className="label p-1 flex-col items-start">
//                 <span className="text-base label-text block text-gray-700">Confirm Password</span>
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="w-full input input-bordered h-10"
//                 />
//               </label>
//             </div>
//             <div>
//               <label className="label p-1 flex-col items-start">
//                 <span className="text-base label-text block text-gray-700">Gender</span>
//                 <select className="w-full input input-bordered h-10">
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
                  
//                 </select>
//               </label>
//             </div>
//             <a href="#" className="text-blue-500 hover:underline mt-2 block text-center">{"Already have an account? Login"}</a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2 h-10 p-2">Signup</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Signup;
  