import * as React from "react"
import * as ReactDOM from "react-dom"

////////////////////////////////////////////////
// Props
////////////////////////////////////////////////

interface TicketPageProps {}

interface CustInfoProps {}

interface ActivityListProps {}

interface ActivityProps {activityData:any}

interface NewActionProps {}

interface ShipPartsProps {}

interface AddPartsProps {}

interface RefundProps {}

interface EmailChinaProps {}

interface EmailCustProps {}

interface TicketProps {}

interface TicketListProps {}

interface NavProps {}

interface HomeProps {}

////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////

function getModelOptions() {
    return [1,2,3]
}

function getPartOptions(model: string) {
    return ["a", "b", "c"]
}

////////////////////////////////////////////////
// Ticket Page
////////////////////////////////////////////////

class TicketPage extends React.Component<TicketProps, {}> {

}

////////////////////////////////////////////////
// Customer Info Section
////////////////////////////////////////////////


class CustInfo extends React.Component<CustInfoProps, {}> {
    render() {
        var modelOptions = getModelOptions()
        var models = modelOptions.map(function(model){
            return <option value="model" key={model}>{model}</option>
        })

        // TODO pass in model number here
        var partOptions = getPartOptions("foo")
        var parts = partOptions.map(function(part){
            return <option value="part" key={part}>{part}</option>
        })

        return ( 
            <form action="" method="POST">
                <label htmlFor="firstName">First Name: </label>
                <input id="firstName" type="text"/>
                <label htmlFor="lastName">Last Name: </label>
                <input id="lastName" type="text"/>

                <label htmlFor="address">Address 1: </label>
                <input id="address" type="text"/>
                <label htmlFor="address">Address 2: </label>
                <input id="address" type="text"/>
                <label htmlFor="city">City: </label>
                <input id="city" type="text"/>
                <label htmlFor="zipCode">Zip Code: </label>
                <input id="zipCode" type="text"/>

                <label htmlFor="email">Email: </label>
                <input id="email" type="text"/>
                <label htmlFor="phone">Phone: </label>
                <input id="phone" type="text"/>

                <label htmlFor="models">Models: </label>
                <select name="models" id="models">
                    {models}
                </select>
                
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

////////////////////////////////////////////////
// Activity Section
// Activity obj = {date: "", content: ""}
////////////////////////////////////////////////
let activityHistory:any = []

//////////////////
//Utilities
/////////////////
function eventDispatch(action:string, args:any) {
    switch(action){
        case "ship":
            ship(args)
            break;
        case "refund":
            console.log("here")
            refund(args)
            break;
        case "emailCust":
            emailCust(args)
            break;
        case "emailChina":
            emailChina(args)
            break;
    }
    draw()
}

function ship(args:any){
    var contentString = "action taken: " + args.value.content
    activityHistory.push({content: contentString})
    partsToShip.push({"model": args.value.model, "part": args.value.part})
}

function refund(args:any){
    var contentString = "action taken: " + args.value.content
    activityHistory.push({content: contentString})
}
function emailCust(args:any){
    var contentString = "action taken: " + args.value.content
    activityHistory.push({content: contentString})
}
function emailChina(args:any){
    var contentString = "action taken: " + args.value.content
    activityHistory.push({content: contentString})
}

//Renders list of completed actions
class ActivityList extends React.Component<ActivityListProps, {}> {
    render() {
        var activities = activityHistory.map(function(activity:any){
            return (
                <div>
                    <Activity activityData={activity} />
                </div>
            )
        })
        return (
            <div>
                <ul>
                    {activities}
                </ul>
                <NewAction />
            </div>
        )
    }
}

class Activity extends React.Component<ActivityProps, {}> {
    render() {
        return (
            <div>
                <div>
                    {this.props.activityData.content}
                </div>
            </div>
        )
    }
}

interface ActionState {
    action: string
}
class NewAction extends React.Component<NewActionProps, ActionState> {
    constructor(props:NewActionProps){
        console.log("resetting newaction state")
        super(props)
        this.state={
            action:""
        }
        this.handleShip = this.handleShip.bind(this)
        this.handleRefund = this.handleRefund.bind(this)
        this.handleEmailChina = this.handleEmailChina.bind(this)
        this.handleEmailCust = this.handleEmailCust.bind(this)
    }
    handleShip() {
        console.log("setting state ship")
        this.setState({
            action: "ship"
        })
    }
    handleRefund() {
        console.log("setting state refund")
        this.setState({
            action: "refund"
        })
    }
    handleEmailChina() {
        console.log("setting state china")
        this.setState({
            action: "emailChina"
        })
    }
    handleEmailCust() {
        console.log("setting state cust")
        this.setState({
            action: "emailCust"
        })
    }
    render() {
        var newAction: any
        if (this.state.action == "ship"){
            console.log("rendering ship")
            this.state.action = ""
            newAction = <ShipParts />;
        } else if (this.state.action == "refund") {
            this.state.action = ""
            newAction = <Refund />;
        } else if (this.state.action == "emailChina") {
            this.state.action = ""
            newAction = <EmailChina />;
        } else if (this.state.action == "emailCust") {
            this.state.action = ""
            newAction = <EmailCust />;
        }
        return (
            <div>
                <button
                    name="ship"
                    onClick={this.handleShip}>
                    Ship
                </button>
                <button
                    name="refund"
                    onClick={this.handleRefund}>
                    Refund
                </button>
                <button
                    name="emailChina"
                    onClick={this.handleEmailChina}>
                    EmailChina
                </button>
                <button
                    name="emailCust"
                    onClick={this.handleEmailCust}>
                    EmailCust
                </button>
                {newAction}
            </div>
        )
    }
}

//partsObject = {model: "", part: ""}
let partsToShip:any = []
class ShipParts extends React.Component<ShipPartsProps, {}> {
    render() {
        var parts = partsToShip.map(function(part:any){
            return (
            <div>
                <p>
                    part.model
                </p>
                <p>
                    part.part
                </p>
            </div>
            )
        })
        return (
            <div>
                {parts}
                <AddParts />
                Ship Parts
            </div>
        )
    }
}

interface AddPartsState {
    model: string,
    part: string
}
class AddParts extends React.Component<AddPartsProps, AddPartsState> {
    constructor(props:AddPartsProps) {
        super(props);
        this.state = {model: '1', part:'1'};

        this.handleModelChange = this.handleModelChange.bind(this);
        this.handlePartChange = this.handlePartChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModelChange(event:any) {
        console.log(event.target.value)
        this.setState({model: event.target.value, part: this.state.part});
    }

    handlePartChange(event:any) {
        this.setState({model: this.state.model, part: event.target.value});
    }

    handleSubmit(event:any){
        debugger;
        console.log(this.state)
        eventDispatch("renderActivity", {"value": {"model":this.state.model, "part":this.state.part}})
        event.preventDefault()
    }
    render() {
        var modelOptions = getModelOptions()
        var models = modelOptions.map(function(model){
            return <option value={model} key={model}>{model}</option>
        })

        // TODO pass in model number here
        var partOptions = getPartOptions("foo")
        var parts = partOptions.map(function(part){
            return <option value={part} key={part}>{part}</option>
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="models">Models: </label>
                <select name="models" id="models" value={this.state.model} onChange={this.handleModelChange}>
                    {models}
                </select>
                <label htmlFor="parts">Parts: </label>
                <select name="parts" id="parts" value={this.state.part} onChange={this.handlePartChange}>
                    {models}
                </select>
                <label htmlFor="quantity">Quantity: </label>
                <input id="quantity" type="text"/>
                
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Refund extends React.Component<RefundProps, {}> {
    handleSubmitRefund(event:any){
        console.log("handling submit refund")
        eventDispatch("refund", {value: {content: "refund"}})
    }

    render() {
        return (
            <div>
                Refund
                <button
                    name="submitRefund"
                    onClick={this.handleSubmitRefund}>
                    Submit
                </button>
            </div>
        )
    }
}

class EmailChina extends React.Component<EmailChinaProps, {}> {
    handleEmailChinaSubmit(event:any){
        console.log("handling submit emailChina")
        eventDispatch("emailChina", {value:{content:"email China"}})
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleEmailChinaSubmit}>
                <label htmlFor="email">Email Body: </label>
                <textarea id="email"/>
                
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class EmailCust extends React.Component<EmailCustProps, {}> {
    handleEmailCustSubmit(event:any){
        console.log("handling submit emailCust")
        eventDispatch("emailCust", {value:{content:"email Customer"}})
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleEmailCustSubmit}>
                <label htmlFor="email">Email Body Cust: </label>
                <textarea id="email"/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

////////////////////////////////////////////////
// Ticket List
////////////////////////////////////////////////

/*
Gets list of all open email. Parses out relevant information and passes it to Ticket
*/
class TicketList extends React.Component<TicketListProps, {}> {

}

class Ticket extends React.Component<TicketProps, {}> {

}

////////////////////////////////////////////////
// Shared components
////////////////////////////////////////////////

class Nav extends React.Component<NavProps, {}> {

}

class Home extends React.Component<HomeProps, {}> {
    render() {
        return <div>
            Hello yo yo
            <CustInfo />
            <ActivityList/>
        </div>
    }
}

function draw(){
    console.log("new draw")
    ReactDOM.render(<Home />, document.getElementById("root"))
}

draw();