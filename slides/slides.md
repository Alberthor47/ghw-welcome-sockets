---
marp: true
theme: default
paginate: true
footer: "Welcome to Sockets | Major League Hacking"
size: 16:9
---

# 🚀 Welcome to WebSockets

### Real-time Communication Made Easy!

**Author:** Alberto Camarena  
**Date:** 11/03/25  

---

## 📌 Agenda

1. What are WebSockets?
2. How WebSockets Work 🛜
3. WebSockets vs. HTTP 📡
4. Setting Up a WebSocket Server ⚙️
5. Implementing a WebSocket Client 🖥️
6. Real-World Use Cases 🌍
7. Summary & Q&A ❓

---

## 🔍 What are WebSockets?

- A communication protocol for **full-duplex, real-time** data exchange.
- Unlike HTTP, WebSockets keep a **persistent connection**.
- Used in chat apps, live notifications, stock updates, etc.

```mermaid\sequenceDiagram
participant Client
participant Server
Client->>Server: WebSocket Handshake
Server-->>Client: Connection Established ✅
Client->>Server: Data Transmission ↔️
Server->>Client: Continuous Data Flow 🔄
```

---

## 🛜 How WebSockets Work

| Step | Description |
|------|------------|
| 1️⃣ | Client initiates a WebSocket handshake via HTTP(S). |
| 2️⃣ | Server responds with a **Switching Protocols (101)** status. |
| 3️⃣ | Connection remains open for **bidirectional** communication. |
| 4️⃣ | Messages are exchanged efficiently without re-establishing connections. |

---

## 📡 WebSockets vs. HTTP

| Feature | WebSockets | HTTP |
|---------|-----------|------|
| **Connection** | Persistent | Stateless |
| **Data Flow** | Bidirectional 🔄 | Request-Response 🔁 |
| **Latency** | Low | Higher |
| **Use Cases** | Real-time Apps ⚡ | Standard Web Requests 🌐 |

---

## ⚙️ Setting Up a WebSocket Server (Socket.io)

```javascript
const { Server } = require('socket.io');
const io = new Server(8080, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('Client connected!');
  socket.emit('message', 'Welcome to WebSockets!');

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    socket.emit('message', `Echo: ${message}`);
  });
});
```

---

## 🖥️ Implementing a WebSocket Client (Socket.io)

```javascript
const socket = io('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to WebSocket server!');
  socket.emit('message', 'Hello Server!');
});

socket.on('message', (data) => {
  console.log(`Message from server: ${data}`);
});
```

---

## 🌍 Real-World Use Cases

✔️ Live Chat & Messaging Apps 💬  
✔️ Multiplayer Online Games 🎮  
✔️ Stock Market Updates 📈  
✔️ Live Streaming & Video Calls 📹  
✔️ IoT & Real-time Dashboards 📊

---

## 📝 Summary

- WebSockets enable **real-time, bidirectional communication**.
- They are **faster and more efficient** than traditional HTTP requests.
- Ideal for **chat apps, gaming, stock updates**, and more.
- Easy to implement using **Node.js and browser APIs**.

---

## ❓ Q&A Time!

💡 Have any questions? Let's discuss! 🚀
