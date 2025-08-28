import { Hero } from './components/Hero';
import { CardSection } from './components/CardSection';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Hero />
      <CardSection />
      <Gallery />
      <Benefits />
      <Footer />
      <Chatbot />
    </div>;
}