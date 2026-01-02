// src/App.tsx
import { Header } from "./components/Header";
import { OmniInput } from "./components/OmniInput";
import { AppLayout } from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <Header />
      <OmniInput />
      
      {/* Placeholder for Timeline (we will build this next) */}
      <div className="flex-1 bg-gray-50 p-4 text-center text-gray-400 text-sm">
        Timeline will load here...
      </div>
    </AppLayout>
  );
}

export default App;