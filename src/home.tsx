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
        </div>
    }
}

function draw(){
    console.log("new draw")
    ReactDOM.render(<Home />, document.getElementById("root"))
}

draw();