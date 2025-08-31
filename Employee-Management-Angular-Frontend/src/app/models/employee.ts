export class Employee {
    id!: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;

    constructor(id?: number, firstName?: string, lastName?: string, emailId?: string) {
        if (id !== undefined) this.id = id;
        if (firstName !== undefined) this.firstName = firstName;
        if (lastName !== undefined) this.lastName = lastName;
        if (emailId !== undefined) this.emailId = emailId;
    }
}
