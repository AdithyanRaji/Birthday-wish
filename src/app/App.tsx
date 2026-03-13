import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { BirthdayMessage } from './components/BirthdayMessage';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveNotes } from './components/LoveNotes';
import { MusicPlayer } from './components/MusicPlayer';
import { CelebrationButton } from './components/CelebrationButton';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after initial animation
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Hero />
      {showContent && (
        <>
          <MusicPlayer />
          <BirthdayMessage />
          <PhotoGallery />
          <LoveNotes />
          <CelebrationButton />
        </>
      )}
    </div>
  );
}