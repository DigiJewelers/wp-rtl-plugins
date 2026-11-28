
export default function Home() {
  return (
    <div>
      <main>
        <h2>Hi!</h2>
        <div>{process.env.NEXT_PUBLIC_APP_VERSION}</div>
      </main>
    </div>
  );
}
