export interface Chat {
  id: string
  user: {
    name: string
    profilePicture: string
  }
  lastMessage: {
    text: string
    createdAt: string
    senderID: string
  }
}
