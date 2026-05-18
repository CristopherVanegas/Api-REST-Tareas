export function TaskCard({ task }) {
  return (
    <div>
      <hr />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}
