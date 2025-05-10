# P2P Ticketing Platform 📱 [front-end]
**Design and development of a mobile application for ticketing on blockchain**
![image alt](https://github.com/yash-kumar01/TicketingProject/blob/31e6193bc788ce3fba4d6822f3a38505ad953732/finalappdesign.png)

This project presents the development of a peer-to-peer (P2P) ticketing platform leveraging blockchain technology. The project aims to create a decentralized marketplace where users can create, buy, and trade event tickets securely and transparently, eliminating common issues such as fraud, scalping, and excessive fees.

# Overview:
The platform utilizes blockchain to ensure the authenticity and ownership of tickets, providing a secure environment for peer-to-peer transactions. By decentralizing the ticketing process, the system gives control back to users, allowing them to interact directly without the need for intermediaries. Smart contracts govern transactions, ensuring that tickets are only transferred upon payment and that all parties adhere to the agreed terms.

# Objective:
The primary objective of this project is to develop front-end for a decentralized platform that addresses the limitations of traditional ticketing systems, such as high fees, fraud, and lack of transparency. By enabling peer-to-peer transactions and leveraging blockchain technology, the platform seeks to create a fairer and more efficient ticketing ecosystem. The main focus of this project is in proving the user a friendly interface to navigate through various funtionalities of the app.

# Workflow:
The mobile app is built using React-Native and JavaScript. As react-native does not support an actual wallet intergration in a mobile app, AsynStorage was used to resemble it for saving private key that user needs to sign his transactions. *Algosdk* library served for creating user account and handling all the operations regarding whether its creating, buying ASA assets or making transaction paymets. To see the results of various operations performed "Lora" from algokit was used, as it has a solid UI for working on localnet. App interface allows te user to navigate through three main screens: Home, Create, Metrics. The Home-screen allows the user to explore and search for different ticket available in the market based on the selected event and other parameters. The user can see the details of these tickets and directly Buy them. In Create Screen user can create new event or new ticket by filling the form. Metrics screen allows user to see his transaction history. It displays the details of transcations made and assets held my the account.  

# Walkthrough
This App need to run on Android Studio using emulator with API 34 or 35. The emulator needs to have internet connection enabled. To perform the operations regarding buying, creating tickets or visualizing the transactions performed on the app, *lora.algokit.io* is necessary. Lora is used to connect the app the localnet, this connection requires some additional applications to be installed that depends the OS. As this app was developed on MacOS, it needed Homebrew and Docker as pre-requirement to connect with localnet. For windows 
