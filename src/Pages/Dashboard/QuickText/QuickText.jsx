const QuickText = () => {
    return (
      <div className="mx-auto max-w-screen-xl px-2 py-3 sm:px-6 lg:px-6 bg-teal-400">
        <h1 className="text-white">Quick SMS</h1>
        <p className="text-white">Send instant message quickly</p>
        <div className="grid grid-cols-1 gap-y-8">
          <div className="rounded-lg bg-teal-400 p-4 shadow-lg">
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="recipient">
                Recipient
              </label>
              <input
                className="w-full rounded-lg text-white border-white border outline-0 p-3 text-sm bg-teal-400"
                placeholder="Number"
                type="number"
                id="recipient"
              />
            </div>
  
            <div className="mt-3">
              <label className="block text-sm font-medium text-white" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg text-white border-white border outline-0 p-3 text-sm bg-teal-400"
                placeholder="Your Message"
                rows="2"
                id="message"
              ></textarea>
            </div>
  
            <div className="mt-3">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-teal-400 border-white border-2 px-5 py-3 font-medium text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuickText;
  