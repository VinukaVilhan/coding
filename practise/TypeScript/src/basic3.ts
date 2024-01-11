export class Animal
{
    public name: string;
    public country: string;

    constructor(name: string, country: string)
    {
        this.name = name;
        this.country = country;
    }

    getInfo(): string
    {
        return this.name + " " + this.country;
    }
}
