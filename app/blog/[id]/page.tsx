export default function Post({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <h1>Post</h1>
      <p>Esto es un post {id}</p>
    </div>
  );
}
