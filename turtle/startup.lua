local myURL = "wss://connect.okunamayanad.com:7071/"
local ws = http.websocket(myURL)
ws.send("Hello!")
local event, url, message
repeat
    event, url, message = os.pullEvent("websocket_message")
until url == myURL
print("Received message from " .. url .. " with contents " .. message)
ws.close()