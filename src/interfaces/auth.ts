//use interface login to send data to backend in register api
export interface Login {
    email: string;
    password: string;
}

export interface Register {
    email: string;
    password: string;
    reTypePassword: string;
}