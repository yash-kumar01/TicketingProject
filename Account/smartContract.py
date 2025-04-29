# Account 1 -> Seller of asset:
#     ➔ createTicket()
#       ➔ AppCall ("create_ticket")
#       ➔ Contract creates Ticket ASA

# Account 2 buyer of asset:
#     ➔ buyTicket()
#       ➔ Payment to contract
#       ➔ AppCall ("buy_ticket")
#       ➔ Contract checks + sends Ticket

# this code is not functional, will be occupied by the backend,
# but the logic is the same as described above

from ast import Assert, Bytes
from flask import app

@create_ticket
def create_ticket():
    # Contract creates a new ASA
    InnerTxnBuilder.Begin()
    InnerTxnBuilder.SetFields({
        TxnField.type_enum: TxnType.AssetConfig,
        TxnField.config_asset_total: Int(1),
        TxnField.config_asset_decimals: Int(0),
        TxnField.config_asset_unit_name: Bytes("TCKT"),
        TxnField.config_asset_name: Bytes("Event Ticket"),
    })
    InnerTxnBuilder.Submit()

    # Save the ASA ID
    app.globalPut(Bytes("ticket_asa_id"), InnerTxn.created_asset_id())

@buy_ticket
def buy_ticket():
    Assert(
        Gtxn[0].type_enum() == TxnType.Payment,
        Gtxn[1].application_id() == Global.current_application_id(),
        Gtxn[0].receiver() == Global.current_application_address()
    )
    
    # Transfer the ticket ASA
    InnerTxnBuilder.Begin()
    InnerTxnBuilder.SetFields({
        TxnField.type_enum: TxnType.AssetTransfer,
        TxnField.xfer_asset: App.globalGet(Bytes("ticket_asa_id")),
        TxnField.asset_receiver: Txn.sender(),
        TxnField.asset_amount: Int(1),
    })
    InnerTxnBuilder.Submit()







