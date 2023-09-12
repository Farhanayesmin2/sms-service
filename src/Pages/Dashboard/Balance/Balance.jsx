

const Balance = () => {
    return (
        <>
             <div className="bg-white p-5 rounded-lg shadow-md w-full mx-auto">
            <div className="text-lg font-bold mb-4">Available Balance</div>
            <hr></hr>
            <div className="text-base mb-5">
              
            <br />
              <h1 className="text-2xl font-bold text-center">    BDT 2.50  </h1>
           
              <br />
              <h1  className="text-xl  text-center"> Valid till: 10 Nov 2023</h1>
             
            </div>
            <hr></hr>
            <div className="flex justify-between mt-4">
              <button className="px-1 py-1 bg-sky-500 text-white rounded hover:bg-blue-700">
                SMS Rate
              </button>
              <button className="px-1 py-1 bg-sky-500 text-white rounded hover:bg-blue-700">
                Recharge
              </button>
            </div>
           
           
          </div>
        </>
    );
};

export default Balance;