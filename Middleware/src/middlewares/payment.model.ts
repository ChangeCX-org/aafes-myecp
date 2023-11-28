class Payment {
    Id: number;
    amount: number;
    description: string;

    constructor(Id: number, amount: number, description: string) {
        this.Id = Id;
        this.amount = amount;
        this.description = description;
    }
}

export default Payment;