import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Cake, Heart, X, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CelebrationButton() {
  const [hasClicked, setHasClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCelebrate = () => {
    setHasClicked(true);
    setShowPopup(true);

    // Fire confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ff6ec7', '#ffc0cb', '#dda0dd'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ff6ec7', '#ffc0cb', '#dda0dd'],
      });
    }, 250);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-pink-100/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
            Ready to Celebrate? 🎊
          </h2>

          {!hasClicked ? (
            <motion.button
              onClick={handleCelebrate}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              <Cake className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold">Click to Celebrate!</span>
              <Cake className="w-8 h-8 group-hover:-rotate-12 transition-transform" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 0, -10] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: i * 0.1,
                    }}
                  >
                    <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
                  </motion.div>
                ))}
              </div>
              <p className="text-3xl font-bold text-purple-700">
                Happy Birthday, My Love! 💕
              </p>
              <p className="text-xl text-gray-700">
                May all your wishes come true! 🌟
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-12 text-gray-600"
          >
            <p className="text-lg italic">
              "In you, I've found the love of my life and my closest, truest
              friend."
            </p>
            <p className="mt-8 text-2xl">
              With all my love,
              <br />
              <span className="font-bold text-purple-600">
                Forever Yours ❤️
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Popup Photo Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            {/* Floating hearts around popup */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `${50 + Math.cos((i * Math.PI) / 6) * 40}vw`,
                  y: `${50 + Math.sin((i * Math.PI) / 6) * 40}vh`,
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>
            ))}

            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${20 + Math.floor(i / 4) * 60}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </motion.div>
            ))}

            {/* Photo container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPopup(false)}
                className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-purple-600 hover:bg-pink-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Photo frame with cute effects */}
              <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-pink-200 p-4 rounded-3xl shadow-2xl">
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-pink-400 rounded-tl-xl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-pink-400 rounded-tr-xl" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-pink-400 rounded-bl-xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-pink-400 rounded-br-xl" />

                {/* Photo */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(168, 85, 247, 0.5)',
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1766910700596-f223aace45c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY291cGxlJTIwc2VsZmllJTIwaGFwcHl8ZW58MXx8fHwxNzczNDI1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Special birthday photo"
                    className="w-full h-auto"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-900/30" />
                </motion.div>

                {/* Message below photo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-center"
                >
                  <p className="text-2xl font-bold text-purple-700 mb-2">
                    You Make Every Day Special! 💖
                  </p>
                  <p className="text-gray-700">
                    Here's to all our beautiful memories and many more to come!
                  </p>
                </motion.div>
              </div>

              {/* Floating mini hearts */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`mini-heart-${i}`}
                  className="absolute"
                  style={{
                    left: `${10 + i * 15}%`,
                    bottom: -20,
                  }}
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}