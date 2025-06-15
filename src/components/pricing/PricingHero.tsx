
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingHero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
            🚀 Early Access Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            API Management
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary low-code API management platform powered by JSON configuration. 
            No complex setup, no vendor lock-in - just pure API orchestration magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-blue-400">API Gateway</div>
              <div className="text-sm text-gray-400">Smart Routing</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-purple-400">Orchestrator</div>
              <div className="text-sm text-gray-400">Workflow Engine</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-green-400">Access Server</div>
              <div className="text-sm text-gray-400">Auth & Security</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-orange-400">Process Executor</div>
              <div className="text-sm text-gray-400">Runtime Engine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
