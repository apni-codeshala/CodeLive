import { useState } from "react";
import Logo from "../Assets/Logo.png"
import Client from "../Components/Client"
import Editor from "../Components/Editor"

const EditorPage = () => {

    const [clients, setClients] = useState([
        {socketId: 1, username: 'Abhi V'},
        {socketId: 2, username: 'Adarsh A'},
        {socketId: 3, username: 'Aakash S'}
    ])

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img src={Logo} alt="CODELIVE" className="logoImage"/>
                    </div>
                    <h3>Connected</h3>
                    <div className="clientLists">
                        {
                            clients.map((client) => (
                                <Client key={client.socketId} username={client.username} />
                            ))
                        }
                    </div>
                </div>
                <button className="btn copyBtn">Copy ROOM ID</button>
                <button className="btn leaveBtn">Leave</button>
            </div>
            <div className="editorWrap">
                <Editor />
            </div>
        </div>
    )
}

export default EditorPage;