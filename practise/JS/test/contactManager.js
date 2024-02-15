window.onload = init();
//global variable
var cm;

function init()
{
    cm = new ContactManager();

    cm.addTestData();
    cm.printContactsToConsole();

    cm.displayContactsAsATable('contacts');
}
class Contact {
    constructor(name, email) {
       this.name = name;
       this.email = email;
    }
 }

 class ContactManager{
    constructor()
    {
        //empty list of contacts
        this.listOfContacts = [];
    }

    add(contact)
    {
        this.listOfContacts.push(contact);
    }

    remove(contact)
    {
        for(let i =0; i< this.listOfContacts.length; i++)
        {
            var c = this.listOfContacts[i];

            if (c.email === contact.email)
            {
                this.listOfContacts.splice(i, 1);
                break;
            }
        }
    }

    empty()
    {
        this.listOfContacts = [];
    }

    sort()
    {
        this.listOfContacts.sort(ContactManager.compareByName);
    }

    static compareByName(c1, c2)
    {
        if(c1.name < c2.name)
        {
            return -1;
        }
        else if (c1.name > c2.name)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    printContactsToConsole()
    {
        //check if empty
        if(this.listOfContacts.length === 0)
        {
            console.log("Empty List");
            return;
        }

        this.listOfContacts.forEach(function(c)
        {
            console.log(c.name);
        });
    }

    load()
    {
        if(localStorage.contacts !== undefined)
        {
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }

    save()
    {
        //saving the contacts in the local storage by cpnverting to JSON
        localStorage.contacts = JSON.stringify(this.listOfContacts);
    }

    display
 }

var cm = new ContactManager();
var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
var c3 = new Contact("Angus Young", "angus@acdc.com");
var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

console.log("--- Adding 4 contacts ---")
cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.add(c4);
cm.printContactsToConsole();

console.log("--- Removing the second one! ---");
cm.remove(c2);
cm.printContactsToConsole();

console.log("--- sorting contacts ---");
cm.sort();
cm.printContactsToConsole();

console.log("--- Loading contacts from local storage ---");
cm.load();
cm.printContactsToConsole();
console.log("Do you notice: contacts have all been restored!");
