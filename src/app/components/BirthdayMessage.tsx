import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BirthdayMessage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
              A Special Day for a Special Person- Celebrating Meenu today! 🎉
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Today is all about celebrating YOU – your kindness, your
                laughter, your beautiful spirit that lights up my world every
                single day.
              </p>
              <p>
                Every moment with you is a gift, and I'm so grateful to
                celebrate this moment of your amazing life along with you. You deserve all
                the happiness, love, and joy that this world has to offer.
              </p>
              <p>
                Here's to you, to us, and to all the wonderful memories we've
                created together. May this year bring you everything your heart
                desires! 💕
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                //src="https://images.unsplash.com/photo-1616964524979-c08f6d87c7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjYW5kbGVzfGVufDF8fHx8MTc3MzM2Mjg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                src = "/statics/pics/PHOTO 5.jpeg"
                alt="Birthday cake with candles"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
