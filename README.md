# Ticketing Platform 📱 [front-end]
**Design and development of a mobile application for ticketing on blockchain**
![image alt](https://github.com/yash-kumar01/TicketingProject/blob/d11aa00eba69abf382f87bc32f04b99d4538ea24/demoApp.png)

This project presents the development of a peer-to-peer (P2P) ticketing platform leveraging blockchain technology. The project aims to create a decentralized marketplace where users can create, buy, and trade event tickets securely and transparently, eliminating common issues such as fraud, scalping, and excessive fees.

# Overview:
The platform utilizes blockchain to ensure the authenticity and ownership of tickets, providing a secure environment for peer-to-peer transactions. By decentralizing the ticketing process, the system gives control back to users, allowing them to interact directly without the need for intermediaries. Smart contracts govern transactions, ensuring that tickets are only transferred upon payment and that all parties adhere to the agreed terms.

# Objective:
The primary objective of this project is to develop front-end for a decentralized platform that addresses the limitations of traditional ticketing systems, such as high fees, fraud, and lack of transparency. By enabling peer-to-peer transactions and leveraging blockchain technology, the platform seeks to create a fairer and more efficient ticketing ecosystem. The main focus of this project is in proving the user a friendly interface to navigate through various funtionalities of the app.

# Workflow:
The mobile app is built using React-Native and JavaScript. As react-native does not support an actual wallet intergration in a mobile app, AsynStorage was used to resemble it for saving private key that user needs to sign his transactions. *Algosdk* library served for creating user account and handling all the operations regarding whether its creating, buying ASA assets or making transaction paymets. To see the results of various operations performed "Lora" from algokit was used, as it has a solid UI for working on localnet. App interface allows te user to navigate through three main screens: Home, Create, Metrics. The Home-screen allows the user to explore and search for different ticket available in the market based on the selected event and other parameters. The user can see the details of these tickets and directly Buy them. In Create Screen user can create new event or new ticket by filling the form. Metrics screen allows user to see the transactions history or user profile (this part of the project is still in development). 
