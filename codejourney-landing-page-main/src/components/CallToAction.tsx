import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-3xl p-12 md:p-16 shadow-glow"
        >
          <Rocket className="w-16 h-16 text-white mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your CodeJourney Today 🚀
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners building real projects, earning verified
            credentials, and landing their dream tech jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white hover:bg-white/90 text-primary"
            >
              Join the Beta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-white text-white hover:bg-white/10"
            >
              Start Free
            </Button>
          </div>

          <p className="text-sm text-white/80 mt-6">
            No credit card required • Free forever plan available
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
