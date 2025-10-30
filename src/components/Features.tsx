import { motion } from "framer-motion";
import { Code, Briefcase, Shield, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Build While You Learn",
    description:
      "Work on real mini-projects that automatically deploy to your portfolio. Every project you complete becomes a live showcase of your skills.",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    title: "Career Simulation Mode",
    description:
      "Experience realistic tasks from AI-based project managers. Build the same skills top developers use in their daily work.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "AI-Verified Skills",
    description:
      "Get proof of your code quality and progress with AI-powered verification. Show employers you're ready with validated credentials.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Shareable Portfolio",
    description:
      "Your journey, your story. Recruiters see your entire growth trajectory, not just a resume. Stand out with verified achievements.",
    color: "text-accent",
  },
];

const Features = () => {
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
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and support you need to master
            coding and launch your tech career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
