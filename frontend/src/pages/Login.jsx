const Login = () => {
    return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
          <h1 className="text-3xl font-semibold text-center text-gray-200">
            Login
            <span className="text-blue-500 ml-2">BaatCheet</span>
          </h1>
          <form action="" className="">
            <div >
              <label className="label p-2 flex-col items-start">
                <span className="text-base label-text block">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full  input input-bordered h-10"
                />
              </label>
            </div>
            <div>
              <label className="label p-2 flex-col items-start">
                <span className="text-base label-text block">Password</span>
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="w-full input input-bordered h-10"
                />
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline mt-2 block text-center">{"Don't"} have an account?</a>
        <div>
            <button className="btn btn-block btn-sm mt-2 h-10 p-2">Login</button>
        </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  




  
  // const Login = () => {
    //     return (
    //       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    //         <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
    //           <h1 className="text-3xl font-semibold text-center text-gray-200">
    //             Login
    //             <span className="text-blue-500 ml-2">BaatCheet</span>
    //           </h1>
    //           <form action="" className="">
    //             <div >
    //               <label className="label p-2 flex-col items-start">
    //                 <span className="text-base label-text block">Username</span>
    //                 <input
    //                   type="text"
    //                   placeholder="Enter your username"
    //                   className="w-full  input input-bordered h-10"
    //                 />
    //               </label>
    //             </div>
    //             <div>
    //               <label className="label p-2 flex-col items-start">
    //                 <span className="text-base label-text block">Password</span>
    //                 <input
    //                   type="text"
    //                   placeholder="Enter your Password"
    //                   className="w-full input input-bordered h-10"
    //                 />
    //               </label>
    //             </div>
    //             <a href="#" className="text-blue-500 hover:underline mt-2 block text-center">{"Don't"} have an account?</a>
    //         <div>
    //             <button className="btn btn-block btn-sm mt-2 h-10 p-2">Login</button>
    //         </div>
    //           </form>
    //         </div>
    //       </div>
    //     );
    //   };
      
    //   export default Login;
      