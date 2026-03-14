import { motion } from 'motion/react';
import { Heart, Star, Sparkles, Sun } from 'lucide-react';

const notes = [
  {
    icon: Heart,
    title: 'Chakarakunje, You Make Every Day Brighter',
    message:
      'Your smile is the sunshine that lights up my world. Thank you for being you.',
  },
  {
    icon: Star,
    title: 'Muthumaniye, You Are My Star',
    message:
      'In a sky full of stars, you shine the brightest. You inspire me every single day.',
  },
  {
    icon: Sparkles,
    title: 'Meenukunjee, you are the magic in Every Moment',
    message:
      'With you, every ordinary moment becomes extraordinary. You bring magic to my life.',
  },
  {
    icon: Sun,
    title: 'Ponnukuttiyee, Forever Grateful for you',
    message:
      'I am so blessed to have you in my life. Here\'s to many more birthdays together!',
  },
];

export function LoveNotes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700"
        >
          What You Mean to Me 💝
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {notes.map((note, index) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-pink-200 hover:border-pink-400 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-700 mb-2">
                        {note.title}
                      </h3>
                      <p className="text-gray-700">{note.message}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
