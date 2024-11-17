import HorizontalField from "./components/HorizontalField"

function App() {
  return (
    <div className="w-[450px] mx-auto mt-96">
      <HorizontalField text="Email" ispassword={false} placeholder="Enter your email here" />
      <HorizontalField text="Name" ispassword={false} placeholder="Enter your name here" />
      <HorizontalField text="Password" ispassword={true} placeholder="Enter your password here" />
    </div>
  )
}

export default App
