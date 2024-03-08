const {default: axios} = require("axios")

const url = "https://api.telegram.org/bot6976639609:AAFAGsPnx3jjp8OjaaqtVS218VpJhSDkzHc/sendMessage?parse_mode=markdown&chat_id=5071502245&text=SCAMMER"

let Message = async() => {
    try {
        while (true){
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200){
                        console.log(response.statusText)
                    }
                })
            
        }
    } catch(error) {
        console.log("API DOWN")
        Message();
    }
}

Message();
Message();
