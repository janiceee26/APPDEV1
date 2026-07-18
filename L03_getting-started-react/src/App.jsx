function App() {
  return (
    <div className="min-h-screen bg-[#5C94FC] flex items-center justify-center p-6 font-mono">
      <div className="bg-[#C6C6C6] border-[6px] border-[#373737] shadow-[inset_-6px_-6px_0_#8B8B8B,inset_6px_6px_0_#FFFFFF] max-w-xl w-full p-6">

        <h1 className="bg-[#3B8526] text-white text-2xl text-center p-3 border-4 border-[#1F4A14] mb-5"
            style={{ textShadow: '2px 2px 0 rgb(224, 119, 206)' }}>
          About Me
        </h1>

        <div className="flex flex-col gap-4">
          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Full Name</h2>
            <p className="text-white text-base">Janice V. Agnote</p>
          </div>

          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Course and Year</h2>
            <p className="text-white text-base">BSIS 3</p>
          </div>

          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Fun Fact</h2>
            <p className="text-white text-base">My imagination deserves its own TV series</p>
          </div>

          <div className="bg-[#5B5B5B] border-4 border-[#2E2E2E] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-2">Reflection</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              So far in this application development course, I am slowly getting better at analyzing code and understanding how different commands work. 
              I learned the discovery process of web development, including how to listen carefully to instructions and debug errors step by step. 
              Aside from learning how to code, this subject has also taught me how to be patient, work hard, cooperate with others, and stay disciplined. 
              Most importantly, I learned how to manage my time well and value every hour spent working on my tasks. All of these technical skills and 
              life lessons will truly help me reach my future goals in Information Systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App