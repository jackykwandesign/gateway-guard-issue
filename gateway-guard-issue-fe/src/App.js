import { Manager } from "socket.io-client"
import { useEffect, useState } from "react"
function App() {
	const [socket, setSocket] = useState(null)
	useEffect(() => {
    const manager = new Manager("ws://localhost:3000", {
      reconnectionDelayMax: 10000,
      transports: ["websocket"],
    })
    console.log("manager", manager)
		const socket = manager.socket("/")
    socket.on("connect",() =>{
      console.log("connect")
    })
    console.log("socket", socket)
    setSocket(socket)
	}, [])

	return <div className="App">
    <button
      onClick={()=> {
        try {
          socket.emit("message")
        } catch (error) {
          console.error("error", error)
        }
      }}
    >Test Message</button>
  </div>
}

export default App
