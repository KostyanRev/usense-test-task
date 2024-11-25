import { PasswordInput } from "./components/PasswordInput/PasswordInput";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h2 className="mb-5 text-xl font-medium">Test your password strength</h2>
      <PasswordInput />
    </div>
  );
}

export default App;
