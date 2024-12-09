interface userInterface  {
    email: string,
    password: string
}

interface userResponseInterface  {
    uid: string,
    email: string | undefined,
    emailVerified: boolean,
}

export { userInterface, userResponseInterface }