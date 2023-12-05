import User from "../models/registration.model";

export const users: User[] = [
    new User(1, "admin@changecx.com", "Password@123", "admin"),
    new User(2, "customer@changecx.com", "Password@123", "customer"),
    new User(3, "guest@changecx.com", "Password@123", "guest")
];