export default function TargetForm({onSubmit}) {

  return (
    <form  action="/api/targets/crud" method= "POST" onSubmit={onSubmit}>
      <button type="submit">Submit</button>
    </form>
    
  );
}
