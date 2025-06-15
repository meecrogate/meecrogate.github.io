
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Building, Rocket } from "lucide-react";

const PricingCards = () => {
  const plans = [
    {
      name: "Developer",
      icon: <Zap className="w-6 h-6" />,
      price: "$0",
      period: "forever",
      description: "Perfect for exploring and prototyping",
      badge: "Most Popular",
      features: [
        "Up to 10,000 API calls/month",
        "2 JSON config files",
        "Basic API Gateway",
        "Community support",
        "Standard orchestration",
        "Basic authentication"
      ],
      cta: "Start Free",
      ctaVariant: "outline" as const,
      popular: true
    },
    {
      name: "Startup",
      icon: <Building className="w-6 h-6" />,
      price: "$49",
      period: "per month",
      description: "For growing teams and applications",
      features: [
        "Up to 1M API calls/month",
        "Unlimited JSON configs",
        "Advanced API Gateway",
        "Email support",
        "Advanced orchestration",
        "OAuth & JWT support",
        "Basic analytics",
        "Rate limiting"
      ],
      cta: "Start Trial",
      ctaVariant: "default" as const,
      popular: false
    },
    {
      name: "Business",
      icon: <Rocket className="w-6 h-6" />,
      price: "$199",
      period: "per month",
      description: "For production workloads and teams",
      badge: "Best Value",
      features: [
        "Up to 10M API calls/month",
        "Unlimited everything",
        "Enterprise API Gateway",
        "Priority support",
        "AI-powered orchestration",
        "Advanced security",
        "Real-time analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      ctaVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Choose Your API Journey
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          From prototype to production, we scale with your needs. All plans include our core four components.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 ${
              plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
            }`}
          >
            {plan.badge && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                {plan.badge}
              </Badge>
            )}
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-2 text-blue-400">
                {plan.icon}
              </div>
              <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">/{plan.period}</span>
              </div>
              <CardDescription className="text-gray-300 mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.ctaVariant === 'outline' 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                variant={plan.ctaVariant}
                size="lg"
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Need more than 10M calls per month?</p>
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
          Contact us for Enterprise pricing
        </Button>
      </div>
    </div>
  );
};

export default PricingCards;
