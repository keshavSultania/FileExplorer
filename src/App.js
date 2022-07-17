import "./styles.css";
import FileViewer from "./components/FileViewer";

export default function App() {
  console.log("render main app");
  return (
    <div className="App">
      <h1>Code Sandbox File Viewer</h1>
      <FileViewer />
    </div>
  );
}
