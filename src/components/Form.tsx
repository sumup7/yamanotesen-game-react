type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Form = ({ handleSubmit, handleChange, name }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={name} />
      <button type="submit">回答する</button>
    </form>
  )
};
export default Form;