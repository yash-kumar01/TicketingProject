# TicketingProject
**Design and development of a mobile application for ticketing on blockchain**
This project presents the development of a peer-to-peer (P2P) ticketing platform leveraging blockchain technology. The project aims to create a decentralized marketplace where users can create, buy, and trade event tickets securely and transparently, eliminating common issues such as fraud, scalping, and excessive fees.

**Overview:**
The platform utilizes blockchain to ensure the authenticity and ownership of tickets, providing a secure environment for peer-to-peer transactions. By decentralizing the ticketing process, the system gives control back to users, allowing them to interact directly without the need for intermediaries. Smart contracts govern transactions, ensuring that tickets are only transferred upon payment and that all parties adhere to the agreed terms.

**Objective:**
The primary objective of this project is to develop a decentralized platform that addresses the limitations of traditional ticketing systems, such as high fees, fraud, and lack of transparency. By enabling peer-to-peer transactions and leveraging blockchain technology, the platform seeks to create a fairer and more efficient ticketing ecosystem. 

**Workflow**
The mobile app is built using React-Native and JavaScript. As react-native does not support an actual wallet intergration in a mobile app, AsynStorage was used to save the user credentials for saving private key needed to create user account using *Algosdk*. User can navigate through three screens: Home, Create, Metrics. The Home-screen consists allows the user to explore and search for different ticket available in the market based on the selected event and other parameters. The user can see the details of these tickets and directly buy them. In Create Screen user can create new event or new ticket by providing the deatails. Metrics screen allows user to see the transactions history or user profile (this part of the project is still in development). 
