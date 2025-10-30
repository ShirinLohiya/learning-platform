import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const codeSnippet = `function calculateProgress(tasks) {
  const completed = tasks.filter(t => t.done);
  return (completed.length / tasks.length) * 100;
}`;

const DemoPreview = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Your Progress in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your learning journey with interactive dashboards and live
            code previews.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden shadow-glow border-2">
            <div className="bg-gradient-to-r from-primary to-accent p-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-sm font-medium text-white ml-4">
                student-dashboard.js
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Code editor */}
              <div className="bg-slate-900 p-6">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{displayedCode}</code>
                  <span className="animate-pulse">|</span>
                </pre>
              </div>

              {/* Stats preview */}
              <div className="bg-card p-6 border-l border-border">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Projects Completed
                    </div>
                    <div className="text-3xl font-bold text-primary">12</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Skills Verified
                    </div>
                    <div className="text-3xl font-bold text-accent">8</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Learning Streak
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      15 days 🔥
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPreview;
