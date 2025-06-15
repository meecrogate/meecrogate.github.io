
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const FeaturesComparison = () => {
  const features = [
    {
      category: "Core Platform",
      items: [
        { name: "API Gateway", developer: true, startup: true, business: true },
        { name: "Orchestrator Engine", developer: true, startup: true, business: true },
        { name: "Access Server", developer: true, startup: true, business: true },
        { name: "Process Executor", developer: true, startup: true, business: true },
        { name: "JSON Configuration", developer: true, startup: true, business: true },
      ]
    },
    {
      category: "API Management",
      items: [
        { name: "Request Routing", developer: true, startup: true, business: true },
        { name: "Rate Limiting", developer: false, startup: true, business: true },
        { name: "Load Balancing", developer: false, startup: true, business: true },
        { name: "Circuit Breaker", developer: false, startup: false, business: true },
        { name: "Auto Scaling", developer: false, startup: false, business: true },
      ]
    },
    {
      category: "Security & Auth",
      items: [
        { name: "Basic Authentication", developer: true, startup: true, business: true },
        { name: "OAuth 2.0 / JWT", developer: false, startup: true, business: true },
        { name: "API Key Management", developer: false, startup: true, business: true },
        { name: "IP Whitelisting", developer: false, startup: false, business: true },
        { name: "Advanced Security", developer: false, startup: false, business: true },
      ]
    },
    {
      category: "Analytics & Monitoring",
      items: [
        { name: "Basic Metrics", developer: true, startup: true, business: true },
        { name: "Real-time Analytics", developer: false, startup: false, business: true },
        { name: "Custom Dashboards", developer: false, startup: false, business: true },
        { name: "Alerting", developer: false, startup: false, business: true },
        { name: "Performance Insights", developer: false, startup: false, business: true },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Feature Comparison
        </h2>
        <p className="text-xl text-gray-300">
          See what's included in each plan
        </p>
      </div>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <div className="grid grid-cols-4 gap-4">
            <div></div>
            <div className="text-center">
              <CardTitle className="text-lg text-blue-400">Developer</CardTitle>
              <p className="text-sm text-gray-400">Free</p>
            </div>
            <div className="text-center">
              <CardTitle className="text-lg text-purple-400">Startup</CardTitle>
              <p className="text-sm text-gray-400">$49/month</p>
            </div>
            <div className="text-center">
              <CardTitle className="text-lg text-green-400">Business</CardTitle>
              <p className="text-sm text-gray-400">$199/month</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {features.map((category, categoryIndex) => (
            <div key={category.category} className="border-t border-gray-700">
              <div className="bg-gray-900/50 px-6 py-3">
                <h3 className="font-semibold text-white">{category.category}</h3>
              </div>
              {category.items.map((item, itemIndex) => (
                <div key={item.name} className="grid grid-cols-4 gap-4 px-6 py-3 border-t border-gray-700/50 hover:bg-gray-800/30">
                  <div className="text-gray-300">{item.name}</div>
                  <div className="text-center">
                    {item.developer ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {item.startup ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {item.business ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesComparison;
