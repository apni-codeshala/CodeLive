import { useEffect } from "react";
// import { Codemirror } from 'codemirror'
// import 'codemirror/mo'

const Editor = () => {

    useEffect(() => {
        // async function init(){
        //     Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
        //         mode: {name: 'javascript', json: true},

        //     })
        // }
        // init();
    }, [])

    return (
        <textarea id="realtimeEditor"></textarea>
    )
}

export default Editor;