const prompt = require("prompt-sync")();
class Contact{
    //constructor
    constructor(...params)
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }
    
    checkName(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if (nameRegex.test(name)) {
            return true
        }
        else{
            return false
        } 
    }
    
    //gettters and setters
    get firstName(){ return this._firstName}
    set firstName(firstName){ 
        if (this.checkName(firstName))
        {
            this._firstName = firstName
        }
        else{
            throw "First name is incorrect"
        }
    }
    
    get lastName(){ return this._lastName}
    set lastName(lastName){ 
        if (this.checkName(lastName))
        {
            this._lastName = lastName
        }
        else{
            throw "Last name is incorrect"
        }
    }
    
    checkaddress(address){ 
        let addressRegex = RegExp("^[A-z0-9]{4,}$")
        if (addressRegex.test(address)) {
            return true
        }
        else{
            return false
        } 
    }

    get address(){ return this._address}
    set address(address){ 
        if (this.checkaddress(address))
        {
            this._address = address
        }
        else{
            throw "Address is incorrect"
        }
    }
    
    get city(){ return this._city}
    set city(city){ 
        if (this.checkaddress(city))
        {
            this._city = city
        }
        else{
            throw "City is incorrect"
        }
    }
    
    get state(){ return this._state}
    set state(state){ 
        if (this.checkaddress(state))
        {
            this._state = state
        }
        else{
            throw "State is incorrect"
        }
    }
    
    get zip(){ return this._zip}
    set zip(zip){ 
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$")
        if (zipRegex.test(zip)) {
            this._zip=zip
        }
        else{
            throw "zip is incorrect"
        }
    }
    
    get phoneNumber(){ return this._phoneNumber}
    set phoneNumber(phoneNumber){ 
        let phoneNumberRegex = RegExp("^[0-9]{2}[ ][0-9]{10}$")
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber
        }
        else{
            throw "Phone number is incorrect"
        }
    }
    
    get email(){ return this._email}
    set email(email){ 
        let emailRegex = RegExp("^[0-9a-zA-Z]+([.,+,_,-]{1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2})?")
        if (emailRegex.test(email)) {
            this._email=email
        }
        else{
            throw "email is incorrect"
        }
    }
    
    //to string method 
    toString(){
        return `Name: ${this.firstName} ${this.lastName} Address: ${this.address} ${this.city} ${this.state} ${this.zip} phone number: ${this.phoneNumber} email: ${this.email}`
    }
}

//function to create contact
function createContatct() {
    let firstName = prompt("Enter First Name ");
    let lastName = prompt("Enter last Name ");
    let address = prompt("Enter Address ");
    let city = prompt("Enter City ");
    let state = prompt("Enter State ");
    let zip = prompt("Enter Zip ");
    let phoneNumber = prompt("Enter phone number ");
    let email = prompt("Enter Email address ");
    return new Contact(firstName,lastName,address,city,state,zip,phoneNumber,email)
}

// Main method 
let addressBook  = new Array()
console.log("Welcome to address book");
let isExit = false
while (!isExit) {
    console.log("1 Add Contact");
    console.log("2 Display Contact");
    console.log("3 Exit");
    let choice = prompt("Enter your choice ")
    switch (choice) {
        case "1":
            try{
            addressBook.push(createContatct())
            } 
            catch (error) {
            console.log(error);
            }
            break;
        case "2":
            console.log(addressBook);
            break;
        case "3":
            isExit = true
            break
        default:
            console.log("Invalid Option");
            break;
    }
    
}

