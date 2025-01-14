import React from 'react'

function page() {
  return (
    <div className=" bg-black text-white">
    <div className="pt-28 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950">
    <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">FAQ</h1>
    <div className="grid gap-6">
      {[
        {
          question: "What services do you provide?",
          answer: "We offer a comprehensive range of digital solutions including custom app development, website creation, LMS integration, and digital marketing tools specifically designed for educational institutions."
        },
        {
          question: "How long does it take to develop a website?",
          answer: "A basic website typically takes 2-4 weeks to complete. More complex projects with custom features may take 6-12 weeks depending on the requirements."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer continuous technical support and maintenance services to ensure your digital platform runs smoothly and stays up-to-date."
        }
      ].map((faq, index) => (
        <div key={index} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
    </div>

  )
}

export default page