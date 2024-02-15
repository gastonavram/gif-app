export const Search = ({onSubmit, valorInput, onChange}) => {
  return (
    <form className="form-search" onSubmit={onSubmit} action="">
      <input className="search" value={valorInput} onChange={onChange} placeholder="Escriba aquí..." />
    </form>
  );
};
