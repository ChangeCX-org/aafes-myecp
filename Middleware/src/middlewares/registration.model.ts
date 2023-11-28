class User {
    userId: string;
    password: string;

    constructor(userId: string, password: string) {
        this.userId = userId;
        this.password = password;
    }

    static findByUserId(userId: string, users: User[]): User | undefined {
        return users.find(user => user.userId === userId);
    }
}

export default User;