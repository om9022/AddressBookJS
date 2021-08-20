console.log("Welcome to address book");
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
        let addressRegex = RegExp("^[A-z]{4,}$")
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

try {
    
    let contact = new Contact("Max","Well","Panvel","Mumbai","Maha","123 432","91 9876543210","abc@gmail.com")
    console.log(contact.toString());
} catch (error) {
    console.log(error);
}