const { getMaxListeners } = require("process")

console.log("Welcome to Address Book")

class Contact {
    constructor(...params){
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }
    toString(){
        return `Name: ${this.firstName}${this.lastName} Address: ${this.address}${this.city}${this.state}${this.zip} Phone Number : ${this.phoneNumber} Email: ${this.email}`
    }
}
let contact = new Contact("Om", "C", "vashi", "Mumbai", "Maharashtraa", 123456, 9087654321, "om@gmail.com")
console.log(contact.toString());