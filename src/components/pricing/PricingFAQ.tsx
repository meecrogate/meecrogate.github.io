
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "What makes your API management solution different?",
      answer: "Our solution is uniquely low-code, using only JSON configuration files. No complex setup, no proprietary languages - just simple JSON configs that power a complete API management stack with Gateway, Orchestrator, Access Server, and Process Executor."
    },
    {
      question: "How does the JSON configuration work?",
      answer: "Everything is configured through intuitive JSON files. Define your API routes, authentication rules, orchestration workflows, and business processes all in JSON. Changes are applied in real-time without restarts or downtime."
    },
    {
      question: "Can I migrate from other API management platforms?",
      answer: "Absolutely! Our migration tools can help you convert existing configurations to our JSON format. We offer free migration assistance for Business plan customers and have detailed documentation for self-service migration."
    },
    {
      question: "What's included in the free Developer plan?",
      answer: "The Developer plan includes all four core components (API Gateway, Orchestrator, Access Server, Process Executor) with up to 10,000 API calls per month, 2 JSON config files, and community support. Perfect for testing and small projects."
    },
    {
      question: "How do you handle scaling and performance?",
      answer: "Our platform automatically scales based on demand. The Business plan includes auto-scaling, load balancing, and performance optimization. We guarantee 99.9% uptime SLA for Business customers."
    },
    {
      question: "Is there a long-term contract requirement?",
      answer: "No long-term contracts required. All paid plans are month-to-month. You can upgrade, downgrade, or cancel anytime. We believe in earning your business every month with great service."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Developer plan gets community support, Startup plan includes email support with 24-hour response time, and Business plan gets priority support with dedicated account management and phone support."
    },
    {
      question: "Can I use this for microservices architecture?",
      answer: "Yes! Our solution is perfect for microservices. The API Gateway handles service discovery and routing, the Orchestrator manages service communication, and the Process Executor handles distributed workflows - all configured via JSON."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-300">
          Everything you need to know about our API management platform
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-800/50 border-gray-700 rounded-lg px-6 backdrop-blur-sm"
          >
            <AccordionTrigger className="text-white hover:text-blue-400 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PricingFAQ;
