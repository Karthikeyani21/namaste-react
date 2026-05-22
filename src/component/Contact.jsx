const Contact = () => {
    return (
        <>
          <h1 className="text-xl font-bold">Contact page..</h1>
          <form>
              <input type="text" placeholder="name" className="border border-gray-500 p-1 m-2"/>
              <input type="text" placeholder="message" className="border border-gray-500 p-1 m-2"></input>
              <button className="border bg-slate-300 py-1 m-2 rounded-md px-3">Submit</button>
          </form>
 
        </>
    )
}

export default Contact;