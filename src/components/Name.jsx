export const Name = ({ name, setName, setDisplayName }) => {
  const handleChange = (e) => setName(e.target.value);
  const handleSubmitClick = () => {
    setDisplayName(name);
    setName("");
  };
  return (
    <>
      <input
        value={name}
        onChange={(e) => handleChange(e)}
        placeholder="Enter name..."
      />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  );
};
