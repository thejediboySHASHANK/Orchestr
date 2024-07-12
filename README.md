# OrchestrAI - A no-code Automation tool to automate your business



## Table of Contents
- [Motivation and Need of the project](#motivation-and-need-of-the-project)
- [Overview](#overview)
- [Demo](#demo)
- [How to Run](#how-to-run)
- [Contributing](#contributing)

## Features

- **No-Code Tool**: Easily create complex automations without writing a single line of code.
- **AI Integration**: Seamlessly integrate with AI technologies to enhance functionality.
- **Customizable Workflows**: Tailor workflows to meet the specific needs of your processes.
- **User-Friendly Interface**: A clean, intuitive interface that makes automation accessible to everyone.

## Overview

**WebServerLRU** is a robust, multi-threaded web proxy server implemented in C. It leverages the POSIX threads (pthreads) library to manage multiple client requests concurrently, ensuring efficient handling of network traffic. The server integrates key concepts from operating systems such as semaphores and mutexes to securely manage concurrent access to shared resources.

### Key Features

- **Multi-Threading**: Utilizes the pthreads library to enable simultaneous processing of multiple client requests.
- **Concurrency Control**: Employs mutexes and semaphores to ensure safe access to shared resources among threads.
- **HTTP Request Handling**: Each incoming connection triggers the creation of a new thread that processes the client's HTTP request using the `proxy_parse.h` library, and forwards it to the intended remote server.
- **Response Caching**: Implements an LRU (Least Recently Used) caching mechanism to optimize response times. The server checks this cache before forwarding requests to the remote server, reducing latency and network load.
- **Socket Programming**: Uses standard socket programming functions such as `socket()`, `bind()`, `listen()`, and `accept()` for server setup. Data transmission is handled through `send()` and `recv()` functions.
- **DNS Resolution**: Incorporates `gethostbyname()` to resolve hostnames to IP addresses, facilitating the handling of HTTP requests to various domains.

### How It Works

Upon launching, the server begins listening for incoming TCP connections. When a connection is established, it accepts the connection and spins off a new thread dedicated to handling that specific client. Each thread performs the following tasks:
- Parses the client’s HTTP request.
- Checks the cache for a stored response.
- If cached, returns the response directly to the client.
- If not cached, forwards the request to the designated remote server, retrieves the response, sends it back to the client, and stores it in the cache.

This architecture not only enhances the responsiveness of the proxy server but also significantly reduces unnecessary network traffic by serving repeated requests directly from the cache.


## Demo

![cache1](https://github.com/thejediboySHASHANK/WebServerLRU/assets/95047201/a4b89400-fa83-4a22-b4ec-0b8d04db2462)
![cache2](https://github.com/thejediboySHASHANK/WebServerLRU/assets/95047201/b0273da1-947c-4b4d-8df8-1d6dfed511d6)

- When website is opened for the first time `(url not found)` then cache will be missed.
- Then if you again open that website again then `Data is retrieved from the cache` will be printed.

## How to Run

```
$ git clone https://github.com/thejediboySHASHANK/WebServerLRU.git
$ cd WebServerLRU
$ make all
$ ./proxy <port no.>
```

- This code can only be ran in a Linux Machine or in WSL.
- Please disable your browser cache.

## Contributing

Liked my project? Please feel free to star, raise a PR or fork to extend this project! 🚀

