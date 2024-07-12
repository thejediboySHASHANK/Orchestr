# OrchestrAI - A no-code Automation tool to automate your business

[![Watch the video](https://img.youtube.com/vi/yX6paB1F_5U/maxresdefault.jpg)](https://www.youtube.com/watch?v=yX6paB1F_5U)

## Table of Contents
- [Motivation and Need of the project](#motivation-and-need-of-the-project)
- [Overview](#overview)
- [Demo](#demo)
- [How to Run](#how-to-run)
- [Contributing](#contributing)

## Overview

**OrchestrAI**  is a cutting-edge no-code automation tool designed to streamline and simplify complex workflows through seamless AI integration. It empowers users to create sophisticated automation systems with ease, merging AI technologies like GPT and Gemini to enhance efficiency and productivity across various applications.

### Key Features

- **No-Code Tool**: Easily create complex automations without writing a single line of code.
- **AI Integration**: Seamlessly integrate with AI technologies to enhance functionality.
- **Customizable Workflows**: Tailor workflows to meet the specific needs of your processes.
- **User-Friendly Interface**: A clean, intuitive interface that makes automation accessible to everyone.

### How It Works

OrchestrAI leverages Google Drive as an action trigger (for now, click here to see future integrations being developed) to initiate workflows that integrate seamlessly with other applications like Discord, Slack, and Notion. 
When a specified event occurs in Google Drive, such as a new file upload or update, 
OrchestrAI activates the designated actions in the connected services to facilitate real-time responses and automate tasks efficiently.

### Setting Up Your First Workflow

1. **Define the Trigger**:
   Configure Google Drive as the trigger. Specify the events within Google Drive that should start the workflow.

2. **Configure the Actions**:
   Choose and set up the actions that should be executed in Discord, Slack, or Notion once the trigger event occurs.

3. **Test and Deploy**:
   Test the workflow thoroughly to ensure that it functions as intended. Once confirmed, deploy it to automate your tasks without further manual intervention.

### Current Integrations

<div align="center">

| Integration  | Type        | Status           | Description                                                  |
|--------------|-------------|------------------|--------------------------------------------------------------|
| Google Drive | Trigger     | Active           | Listens for any changes and initiates workflows.             |
| Discord      | Listener    | Active           | Receives notifications and automates responses.              |
| Slack        | Listener    | Active           | Automates notifications and task-related workflows.          |
| Notion       | Listener    | Planned          | Future integration for document and knowledge management.    |
| ChatGPT      | Listener    | Planned          | Planned for enhancing interactive and automated responses.   |
| Google Sheets| Listener    | Planned          | Planned for automating data-driven tasks and analysis.       |
| Gmail        | Listener    | Planned          | Planned for automating email-based workflows and alerts.     |
| WhatsApp     | Listener    | Planned          | Planned for messaging and notifications automation.          |
| Telegram     | Listener    | Planned          | Planned for secure messaging and automation of communications.|

</div>

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

