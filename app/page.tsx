import CodeEditor from "@/components/CodeEditor";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="code-editor-ref">
        <CodeEditor/>
      </div>
    </main>
  );
}
