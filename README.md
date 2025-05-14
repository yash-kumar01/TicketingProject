# P2P Ticketing Platform 📱 [front-end]
**Design and development of a mobile application for ticketing on blockchain**
![image alt](https://github.com/yash-kumar01/TicketingProject/blob/31e6193bc788ce3fba4d6822f3a38505ad953732/finalappdesign.png)

This project presents the development of a peer-to-peer (P2P) ticketing platform leveraging blockchain technology. The project aims to create a decentralized marketplace. Built with [React-native](https://reactnative.dev/), JavaScript and the official [Algorand SDK](https://developer.algorand.org/docs/sdks/javascript/), the app makes it convenient for users to create, buy, and trade event tickets securely and transparently, eliminating common issues such as fraud, scalping, and excessive fees.

**📗 Overview:**
The platform utilizes [Algorand blockchain](https://algorandtechnologies.com/) to ensure the authenticity and ownership of tickets, providing a secure environment for peer-to-peer transactions. By decentralizing the ticketing process, the system gives control back to users, allowing them to interact directly without the need for intermediaries. Smart contracts govern transactions, ensuring that tickets are only transferred upon payment and that all parties adhere to the agreed terms. 

# ✨ Key Features:

- **Decentralized Marketplace:** Users can buy and sell tickets directly without relying on a central authority
- **Blockchain-Backed Ticketing:** Tickets are issued as non-fungible tokens (NFTs) on the blockchain, ensuring that they are unique, traceable, and impossible to counterfeit.
- **Smart Contracts:** Transactions are automated through smart contracts, which handle payments and ticket transfers, ensuring that all parties fulfill their obligations.
- **Fraud Prevention:** The use of blockchain technology prevents ticket duplication and fraud, providing users with confidence in the authenticity of their purchases.

# 🎯 Objective:
The primary objective of this project is to develop front-end for a decentralized platform that addresses the limitations of traditional ticketing systems, such as high fees, fraud, and lack of transparency. By enabling peer-to-peer transactions and leveraging blockchain technology, the platform seeks to create a fairer and more efficient ticketing ecosystem. The main focus of this project is in providing the user a friendly interface to navigate through various funtionalities of the app.

# 📁 Repository Structure:
- **Account/:** Handling the account, transactions operations and asset transfers.
- **Create/:** UI for event and ticket creation.
- **Navigation/:** Three main screens: Home, Create and Metrics
- **exploreResult/:** Displays the tickets list to the user
- **home/:** Contains various pickers that are used in HomeScreen for user input
- **navStyles/** Stylesheets for tha app
- **DataBase/:** Ticket data used to display on screen 
- **NavBar.js:** Handles the navigation between the screens
- **App.js:** The main App component

# 🛠️ Built with
- ReactNative
- JavaScript
- Algorand SDK

# ⚙️ Setup requirement:
- **Emulator:** Android studio emulator API 34 or 35. with internet connection enabled.
- **Lora:** *[Lora]*(lora.algokit.io) provides UI to visualie transaction operations using localnet.
- **Localnet connection:** both for macOS and Windows - git, python, pipx, VSCode are necessary. On MacOS addiional requirement for HomeBrew and docker. 

**📡 Localnet Connection** 
 - to establish connection: 'algokit localnet start'
 - to start App: 'npm start'

#🔍 Walkthrough:
App interface allows the user to navigate through three main screens: Home, Create, Metrics. The Home-screen allows the user to explore and search for different tickets available in the market based on the selected event and other parameters. The user can see the details of these tickets and directly buy them. In Create Screen user can create new event or new ticket by filling the form. Metrics screen allows user to see his transaction history. It displays the details of transcations made and assets held my the account.

**⏳ Future works:** The main focus of this project is to develop front-end that provide the UI for performing all the operations, the data input that user gets shown while creating or buying ticket or event is currently hardcoded as it requires backend integration.
