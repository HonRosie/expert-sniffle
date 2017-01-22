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

interface AddPartsProps {onAddPartPropertyChange:(property:keyof PartInfo, value:any)=>void}

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

function eventDispatch(action:string, args:any) {
    var shouldDraw = true;
    switch(action){
        case "ship":
            ship(args)
            break;
        case "refund":
            refund(args)
            break;
        case "emailCust":
            emailCust(args)
            break;
        case "emailChina":
            emailChina(args)
            break;
    }
    if (shouldDraw){
        draw()
    }
}

function ship(args:any){
    var contentString = "action taken: " + args.content
    activityHistory.push({kind: ActivityKind.Ship, date: new Date(), content: contentString})
}

function refund(args:any){
    var contentString = "action taken: " + args.content
    activityHistory.push({kind: ActivityKind.Refund, date: new Date(), content: contentString})
}
function emailCust(args:any){
    var contentString = "action taken: " + args.content
    activityHistory.push({kind: ActivityKind.EmailChina, date: new Date(), content: contentString})
}
function emailChina(args:any){
    var contentString = "action taken: " + args.content
    activityHistory.push({kind: ActivityKind.EmailCust, date: new Date(), content: contentString})
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
                
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

////////////////////////////////////////////////
// Activity Section
// Activity obj = {date: "", content: ""}
////////////////////////////////////////////////
enum ActivityKind {
    Ship,
    Refund,
    EmailChina,
    EmailCust
}

interface ActivityData {
    kind: ActivityKind
    date: Date,
    content: any
}

let activityHistory:ActivityData[] = []
//Renders list of completed actions
class ActivityList extends React.Component<ActivityListProps, {}> {
    render() {
        var activities = activityHistory.map(function(activity:ActivityData){
            if (activity.kind === ActivityKind.Ship) {
                return (
                    <div>
                        <ShipActivity activityData={activity} />
                    </div>
                )
            } else if (activity.kind === ActivityKind.Refund) {
                return (
                    <div>
                        <RefundActivity activityData={activity} />
                    </div>
                )
            } else if (activity.kind === ActivityKind.EmailChina) {
                return (
                    <div>
                        <EmailChinaActivity activityData={activity} />
                    </div>
                )
            } else if (activity.kind === ActivityKind.EmailCust) {
                return (
                    <div>
                        <EmailCustActivity activityData={activity} />
                    </div>
                )
            }
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

class ShipActivity extends React.Component<ActivityProps, {}> {
    render() {
        return (
            <div>
                <div>
                    {this.props.activityData.date.getSeconds()}
                    {this.props.activityData.content}
                </div>
            </div>
        )
    }
}

class RefundActivity extends React.Component<ActivityProps, {}> {
    render() {
        return (
            <div>
                <div>
                    {this.props.activityData.date.getSeconds()}
                    {this.props.activityData.content}
                </div>
            </div>
        )
    }
}

class EmailChinaActivity extends React.Component<ActivityProps, {}> {
    render() {
        return (
            <div>
                <div>
                    {this.props.activityData.date.getSeconds()}
                    {this.props.activityData.content}
                </div>
            </div>
        )
    }
}

class EmailCustActivity extends React.Component<ActivityProps, {}> {
    render() {
        return (
            <div>
                <div>
                    {this.props.activityData.date.getSeconds()}
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
        super(props)
        console.log("resetting newaction state")
        this.state={
            action:""
        }
        this.handleShip = this.handleShip.bind(this)
        this.handleRefund = this.handleRefund.bind(this)
        this.handleEmailChina = this.handleEmailChina.bind(this)
        this.handleEmailCust = this.handleEmailCust.bind(this)
    }
    handleShip = () => {
        console.log("setting state ship")
        this.setState({
            action: "ship"
        })
    }
    handleRefund = () => {
        console.log("setting state refund")
        this.setState({
            action: "refund"
        })
    }
    handleEmailChina = () => {
        console.log("setting state china")
        this.setState({
            action: "emailChina"
        })
    }
    handleEmailCust = () => {
        console.log("setting state cust")
        this.setState({
            action: "emailCust"
        })
    }
    render() {
        var newAction: any
        if (this.state.action == "ship"){
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
interface ShipPartsState {
    custInfo: CustomerInfo,
    partsInfo: PartInfo,
    partsToShip: any
}

interface CustomerInfo {
    firstName: string
}

interface PartInfo {
    id: number,
    model:string,
    part:string,
}

class ShipParts extends React.Component<ShipPartsProps, ShipPartsState> {

    constructor(props:ShipPartsProps) {
        super(props);
        this.state = {
            custInfo: {"firstName": null},
            partsInfo: {"id": null, "model": "1", "part": "1"},
            partsToShip: []
        };
    }

    onAddPartPropertyChange = (property:keyof PartInfo, value:any) => {
        console.log("onAddPart");

        var partsInfo = this.state.partsInfo
        partsInfo[property] = value;
    }

    handleAddPart = () => {
        console.log("save Add Part", this.state.partsInfo);
        var partsInfo = this.state.partsInfo;
        var newPart = {id: this.state.partsToShip.length, model: partsInfo.model, part: partsInfo.part};
        this.state.partsToShip.push(newPart);
        this.setState({
            custInfo: {"firstName": null},
            partsInfo: {"id": null, "model": "1", "part": "1"},
            partsToShip: this.state.partsToShip
        });
    }

    handleSubmit = () => {
        eventDispatch("ship", {content: this.state.partsToShip})
    }

    handleInput = (event:any) => {
        debugger;
        console.log(event)
    }

    render() {
        var parts = this.state.partsToShip.map(function(part:any){
            return (
            <div>
                <p>
                    {part.id}
                    {part.model}
                    {part.part}
                </p>
            </div>
            )
        })


        return (
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input id="firstName" type="text" onInput={this.handleInput}/>
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
                <div>
                    <button
                        name="Add Part"
                        onClick={this.handleAddPart}>
                        Add Part
                    </button>
                    <button
                        name="Submit"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
                <AddParts onAddPartPropertyChange={this.onAddPartPropertyChange} />
                {parts}
            </div>
        )
    }
}

class AddParts extends React.Component<AddPartsProps, {}> {
    constructor(props:AddPartsProps) {
        super(props);

        this.handleModelChange = this.handleModelChange.bind(this);
        this.handlePartChange = this.handlePartChange.bind(this);
    }

    handleModelChange = (event:any) => {
        this.props.onAddPartPropertyChange("model", event.target.value);
    }

    handlePartChange = (event:any) => {
        this.props.onAddPartPropertyChange("part", event.target.value);
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
            <form>
                <label htmlFor="models">Models: </label>
                <select name="models" id="models" onChange={this.handleModelChange}>
                    {models}
                </select>
                <label htmlFor="parts">Parts: </label>
                <select name="parts" id="parts" onChange={this.handlePartChange}>
                    {models}
                </select>
                <label htmlFor="quantity">Quantity: </label>
                <input id="quantity" type="text"/>
            </form>
        )
    }
}

class Refund extends React.Component<RefundProps, {}> {
    handleSubmitRefund(event:any){
        console.log("handling submit refund")
        eventDispatch("refund", {content: "refund"})
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
        eventDispatch("emailChina", {content:"email China"})
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
        eventDispatch("emailCust", {content:"email Customer"})
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