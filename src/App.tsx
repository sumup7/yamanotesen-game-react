import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Gamearea from './components/Gamearea';

function App() {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState([
    'JavaScript',
    'Node.js',
    'Scala',
    'Python',
    'Golang',
    'Swift',
    'Kotlin'
  ]);
  const [messages, setMessages] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isCorrectAnswer = isCorrect(name);
    if (isCorrectAnswer) {
      removeAnswer(name);
    }
    checkAnswer();
  };
  
  const isCorrect = (name: string) => {
    if (language.includes(name)) {
      const message =  `正解です${name}は答えの中にあります。`
      setMessages((prevMessages) => [...prevMessages, message]);
      return true;
    } else {
      const message =  `${name}は答えの中にありません。`
      setMessages((prevMessages) => [...prevMessages, message]);;
      return false;
    }
  };
  
  const checkAnswer = () => {
    if(language.length === 0){
      const message =`もう、答えはありません。あなたの勝ちです。`
      setMessages((prevMessages) => [...prevMessages, message]);
      setName('')
    } else {
      const b = createNpcAnswer();
      removeNpcAnswer(b);
      const message =`NPCの答え:${b}です。あなたの番です。また、フォームの答えを入力してください。`;
      setMessages((prevMessages) => [...prevMessages, message]);
      setName('')
    }
  };
  
  
  const removeAnswer = (name: string) => {
    language.some((v, i) => {
      if (v === name) {
        language.splice(i, 1);
      }
    });
  }
  const removeNpcAnswer = (npcAnswer: string) => {
    language.some((v, i) => {
      if (v === npcAnswer) {
        language.splice(i, 1);
      }
    });
  }
  const createNpcAnswer = () => {
    const n:number = Math.floor(Math.random() * 100);
    const index:number = n % language.length;
    const npcAnswer:string = language[index];
    return npcAnswer;
  }
  // const checkAnswer = () => {
  //   if(language.length === 0){setResults(`もう、答えはありません。あなたの勝ちです。`)}
  //   else{const b =createNpcAnswer();removeNpcAnswer(b);setResults(`NPCの答え:${b}です。あなたの番です。また、フォームの答えを入力してください。`)}
  // }
  return (
    <div className="App">
      <div>
        <Title />
        <Form handleSubmit={handleSubmit} handleChange={handleChange} name={name}/>
        <Gamearea messages={messages}/>
    </div></div>
  )
}
export default App;