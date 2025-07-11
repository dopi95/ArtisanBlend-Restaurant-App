import ChatBot from './components/ChatBot';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <Hero />
        {/* <ChatBot /> */}
      </div>
  );
}
