export const connectToChat = (chatID: string): WebSocket => {
  return new WebSocket(`ws://localhost:8081/connect/${chatID}`)
}
