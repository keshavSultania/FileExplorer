import "./styles.css";
import FileViewer from "./components/FileViewer";

export default function App() {
  return (
    <div className="App">
      <h1>Code Sandbox File Explorer</h1>
      <FileViewer />
    </div>
  );
}
