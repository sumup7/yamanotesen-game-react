type GameareaProps = {
  messages: string[];
}

const Gamearea = ({ messages }: GameareaProps) => {
  return (
    <div>
      {/* メッセージを表示するコンポーネント */}
      {messages.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </div>
  )
};

export default Gamearea;