const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=>{
    clients.push(newClient);
    newClient.send("Добро пожаловать в компанию!");

    newClient.on("message", (message)=> {
        console.log(message);
    });

    clients.forEach(client => {
        if(client !== newClient){
            client.send("У нас новый член команды")
        }
    });
    // console.log("Новое подключение с фронтенда")
});