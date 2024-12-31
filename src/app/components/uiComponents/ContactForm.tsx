import React from 'react'

function ContactForm() {
  return (
    <div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-10">
                  <form action="https://formspree.io/f/mgvvnvwb" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>
        
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-lg font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="subject"
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
        
                    <div className="flex flex-col mb-6">
                      <label htmlFor="message" className="text-lg font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={5}
                        required
                      ></textarea>
                    </div>
        
                    <div className="text-center">
                      <button
                        type="submit"
                        className="py-3 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-indigo-700 hover:to-purple-700 transition duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
    </div>
  )
}

export default ContactForm