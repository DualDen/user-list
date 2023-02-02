export interface User {
    id: number,
    createDate: string,
    avatar?: string,
    firstName: string,
    lastName: string,
    patronymic?: string,
    email: string,
    about?: string,
}