import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {v4 as uuidv4} from "uuid"
import toast from "react-hot-toast";
import Logo from "../Assets/Logo.png" 

const Home = () => {

    const navigate = useNavigate();

    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("")

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Successfully created!');
    }

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error("ROOM ID and USERNAME is required");
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            }
        });
    }

    const handleInputEnter = (e) => {
        if(e.code === 'Enter') {
            joinRoom();
        }
    }

    return (
        <div className="homeWrapper">
            <div className="formWrapper">
                <img className="mainLogo" src={Logo} alt="CODELIVE"/>
                <h4 className="invitation">Paste invitation ROOM ID</h4>
                <div className="inputsBlock">
                    <input 
                        type="text" 
                        placeholder="ROOM ID" 
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        onKeyUp={handleInputEnter}
                    />
                    <input 
                        type="text" 
                        placeholder="USERNAME" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <p className="notInvite">If yout don't have an invite then create <a href="" onClick={createNewRoom} className="newRoom">new room</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home