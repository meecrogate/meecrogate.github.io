
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">API Management Platform</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionary low-code API management powered by JSON configuration. 
              Gateway, Orchestrator, Access Server, and Process Executor in one platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Documentation
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                GitHub
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">API Gateway</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orchestrator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Access Server</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Executor</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 API Management Platform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
