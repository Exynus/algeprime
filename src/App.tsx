/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  PlayCircle, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Clock, 
  HelpCircle,
  ArrowRight,
  Star,
  Zap,
  Lock,
  GraduationCap,
  BrainCircuit
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AFFILIATE_LINK = "https://algeprime.com#aff=Exynus";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const CTAButton = ({ children, className = "", primary = true }: { children: React.ReactNode, className?: string, primary?: boolean }) => (
  <a 
    href={AFFILIATE_LINK}
    className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
      primary 
        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" 
        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm"
    } ${className}`}
  >
    {children}
    <ChevronRight className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5" />
  </a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{question}</h3>
        <HelpCircle className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">AlgePrime</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#diagnosis" className="hover:text-blue-600 transition-colors">The Problem</a>
              <a href="#curriculum" className="hover:text-blue-600 transition-colors">Curriculum</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            </div>
            <CTAButton className="px-4 py-1.5 md:px-6 md:py-2.5 text-[10px] md:text-sm whitespace-nowrap">See the Path</CTAButton>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reddit Optimized */}
      <Section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
              If You’re Retaking Algebra This Semester, <br />
              <span className="text-blue-600 text-2xl md:text-5xl block mt-2">Read This First.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Algebra builds in layers. If one layer is weak, everything above it feels random and unstable. Most students don’t fail because they’re incapable—they fail because their architecture is incomplete.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <CTAButton className="w-full sm:w-auto">Explore the Step-by-Step Path</CTAButton>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Users className="w-4 h-4" />
                <span>Join 12,000+ students rebuilding foundations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Emotional Truths Checklist */}
      <Section className="bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">This Probably Sounds Familiar…</h2>
          <div className="space-y-5">
            {[
              "You passed algebra once... but forgot everything a month later.",
              "You followed the steps in class... but blanked the second the test started.",
              "You feel constantly 'behind' everyone else in your STEM classes.",
              "Panic sets in the moment variables or complex equations appear.",
              "You avoid math assignments until the absolute last minute.",
              "You've started to believe you're just not a 'math person.'"
            ].map((truth, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <p className="text-slate-700 text-lg leading-snug">{truth}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-500 italic text-lg">If even one of those hit close to home, here’s why that's happening.</p>
        </div>
      </Section>

      {/* Diagnosis Section */}
      <Section id="diagnosis" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Here’s Why You Keep Struggling
            </h2>
            <div className="space-y-4 md:space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Algebra is cumulative. Unlike history, math is a stack. If one layer is weak, everything above it feels random and unstable.
              </p>
              <p>
                Patchwork learning fails because it fixes symptoms, not the structure. Random tutorials teach you to solve specific problems, but they don't teach you the underlying logic.
              </p>
              <p>
                <strong>This isn't about ability. It's about structure.</strong> Memorization collapses under pressure. Understanding doesn't.
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <CTAButton primary={false} className="w-full sm:w-auto">View the Curriculum Structure</CTAButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl"></div>
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <BrainCircuit className="w-6 h-6 text-blue-600 mr-3" />
                The Cumulative Collapse
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Foundations", status: "Missing", color: "text-red-500" },
                  { label: "Linear Equations", status: "Shaky", color: "text-orange-500" },
                  { label: "Quadratics", status: "Impossible", color: "text-slate-400" },
                  { label: "Calculus", status: "Locked", color: "text-slate-300" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 border-b border-slate-100 last:border-0">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Refined Pain Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Invisible Weight of Math Anxiety</h2>
          <p className="text-xl text-slate-600">It's more than just a grade on a transcript.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: Users, 
              title: "Classroom Friction", 
              desc: "Feeling stupid asking a 'basic' question in a room where everyone else seems to get it." 
            },
            { 
              icon: GraduationCap, 
              title: "Degree Stagnation", 
              desc: "The quiet fear that one math requirement is the only thing standing between you and your career." 
            },
            { 
              icon: Clock, 
              title: "Wasted Tuition", 
              desc: "Paying thousands for a class you're already planning to retake next semester." 
            },
            { 
              icon: ShieldCheck, 
              title: "STEM Imposter", 
              desc: "Feeling like an imposter in engineering or science because you struggle with variables." 
            },
            { 
              icon: BrainCircuit, 
              title: "Confidence Drain", 
              desc: "Watching your self-esteem drop every time you open a textbook or walk into a testing center." 
            },
            { 
              icon: Lock, 
              title: "Career Ceiling", 
              desc: "Avoiding high-paying fields because you're worried about the math requirements." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <item.icon className="w-10 h-10 text-blue-600 mb-6 opacity-80" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution Introduction - AlgePrime */}
      <Section id="curriculum" className="bg-slate-50">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Logical Way Forward</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">AlgePrime is a sequential, intentional system designed to rebuild your mathematical foundations from the ground up. It doesn't assume you remember anything; it builds the clarity you missed the first time.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <a 
              href={AFFILIATE_LINK}
              className="block aspect-video bg-slate-900 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/math/1280/720" 
                alt="AlgePrime Course Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-blue-600 transition-colors duration-300">
                  <PlayCircle className="w-10 h-10 text-blue-600 group-hover:text-white" />
                </div>
              </div>
            </a>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "150+ Sequential Lessons",
                "Intentional Concept Stacking",
                "Visual Logic Explanations",
                "Interactive Problem Sets",
                "Lifetime Unlimited Access",
                "60-Day Money-Back Guarantee"
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Path</h3>
            <div className="space-y-3">
              {[
                { title: "Foundations & Number Sense", lessons: "12 Lessons" },
                { title: "Linear Equations", lessons: "24 Lessons" },
                { title: "Functions & Graphs", lessons: "18 Lessons" },
                { title: "Systems of Equations", lessons: "15 Lessons" },
                { title: "Polynomials & Factoring", lessons: "22 Lessons" },
                { title: "Quadratic Equations", lessons: "20 Lessons" },
                { title: "Rational Expressions", lessons: "19 Lessons" }
              ].map((module, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-default border border-transparent hover:border-slate-100">
                  <span className="text-slate-700 font-medium text-sm md:text-base">{module.title}</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase mt-1 sm:mt-0">{module.lessons}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <CTAButton className="w-full">Explore the Full Series</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Random Resources vs. Structured Progression</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 text-slate-400 mr-2" />
                Random Resources
              </h3>
              <ul className="space-y-4">
                {[
                  "Isolated fixes for specific problems",
                  "No logical sequence or stacking",
                  "Gaps in foundational knowledge",
                  "Surface-level memorization",
                  "Temporary fixes that fail under pressure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-500">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-blue-200 bg-blue-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Zap className="w-6 h-6 text-blue-600 opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                AlgePrime
              </h3>
              <ul className="space-y-4">
                {[
                  "Sequential, intentional progression",
                  "Concept stacking for retention",
                  "Built specifically for rebuilding",
                  "Deep visual logic explanations",
                  "Durable foundations for long-term mastery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="mt-1 w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust & Risk Reversal */}
      <Section className="bg-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Zero Risk. <br />Logical Reassurance.</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                We don't ask for a leap of faith. If you follow the path for 60 days and don't feel a measurable shift in your understanding, we'll give you a full refund. It's a rational, safe way to rebuild.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold border border-white/10">60-DAY GUARANTEE</div>
                <div className="bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold border border-white/10">LIFETIME ACCESS</div>
                <div className="bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold border border-white/10">SECURE CHECKOUT</div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <CTAButton className="w-full sm:w-auto text-lg px-12 py-5">See the Full Path</CTAButton>
          </div>
        </div>
      </Section>

      {/* SEO FAQ Section */}
      <Section id="faq" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem 
              question="How long does it take to relearn algebra?" 
              answer="Timeline varies, but most students feel confident within 4 to 6 weeks of consistent study (30 minutes a day)."
            />
            <FAQItem 
              question="Can adults relearn algebra after years away from school?" 
              answer="Yes. Many of our students are adults returning to college or switching careers. AlgePrime is built for 'rebuilders' and assumes no prior knowledge."
            />
            <FAQItem 
              question="Is algebra strictly necessary for engineering and STEM degrees?" 
              answer="Yes. Algebra is the fundamental language of Calculus and Physics. Without it, you'll hit a wall in advanced STEM courses."
            />
            <FAQItem 
              question="What is the best way to prepare to retake an algebra class?" 
              answer="Identify your specific foundation gaps first. AlgePrime's structured progression allows you to fill these gaps proactively so you can lead in the classroom."
            />
            <FAQItem 
              question="How do I rebuild math foundations if I've always been 'bad' at it?" 
              answer="Shift from memorization to visualization. AlgePrime uses visual logic to show you *why* the math works."
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-slate-50 text-center py-20 md:py-32 border-t border-slate-100">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Fix the Structure. Not the Symptoms.</h2>
        <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto">
          Rebuild your foundation the right way with a logical, intentional system.
        </p>
        <CTAButton className="w-full sm:w-auto text-lg px-12 py-5">See the Full Path</CTAButton>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Zap className="text-blue-600 w-6 h-6" />
            <span className="text-lg font-bold text-slate-900">AlgePrime</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AlgePrime. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
