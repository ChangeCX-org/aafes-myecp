class User {
    userId: number;
    email: string;
    password: string;
    role: string;

    constructor(userId: number, email: string, password: string, role: string) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static findByUserId(userId: number, users: User[]): User | undefined {
        return users.find(user => user.userId === userId);
    }
}

export default User;