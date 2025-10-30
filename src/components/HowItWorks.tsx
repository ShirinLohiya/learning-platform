import { motion } from "framer-motion";
import { BookOpen, Rocket, Share2 } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn Through Real Challenges",
    description:
      "Engage with interactive coding challenges designed to build practical skills. No more boring tutorials—jump straight into real-world problems.",
    number: "01",
  },
  {
    icon: Rocket,
    title: "Build and Deploy Live Projects",
    description:
      "Every project you complete gets automatically deployed to your personal portfolio. Watch your skills transform into tangible, shareable work.",
    number: "02",
  },
  {
    icon: Share2,
    title: "Share Your Verified Portfolio",
    description:
      "Send your verified portfolio to recruiters. Show them your growth journey, code quality, and real projects—not just claims on a resume.",
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CodeJourney
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your coding skills and career
            prospects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                {index % 2 === 0 ? (
                  <>
                    {/* Content left */}
                    <div className="space-y-4">
                      <div className="text-6xl font-bold text-primary/20">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon right */}
                    <div className="flex justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Icon left */}
                    <div className="flex justify-center md:order-1">
                      <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="w-24 h-24 text-white" />
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="space-y-4 md:order-2">
                      <div className="text-6xl font-bold text-primary/20">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent -bottom-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
