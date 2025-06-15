
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Database, 
  Shield, 
  Activity, 
  Settings, 
  Play, 
  Pause, 
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Terminal
} from "lucide-react";

const ControlStation = () => {
  const [services, setServices] = useState([
    { id: 1, name: "API Gateway", status: "running", health: "healthy", requests: 15420, uptime: "99.9%" },
    { id: 2, name: "Microservice Auth", status: "running", health: "healthy", requests: 8320, uptime: "99.8%" },
    { id: 3, name: "Microservice Users", status: "paused", health: "warning", requests: 0, uptime: "95.2%" },
    { id: 4, name: "Data Processor", status: "running", health: "healthy", requests: 23100, uptime: "99.9%" },
    { id: 5, name: "Analytics Engine", status: "error", health: "error", requests: 0, uptime: "87.3%" },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running": return "bg-green-500";
      case "paused": return "bg-yellow-500";
      case "error": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case "healthy": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "error": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleServiceAction = (serviceId: number, action: string) => {
    setServices(services.map(service => {
      if (service.id === serviceId) {
        switch (action) {
          case "start":
            return { ...service, status: "running", health: "healthy" };
          case "pause":
            return { ...service, status: "paused", health: "warning" };
          case "restart":
            return { ...service, status: "running", health: "healthy" };
          default:
            return service;
        }
      }
      return service;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Control Station</h1>
        <p className="text-gray-400">Contrôlez et surveillez vos composants Meecrogate</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Services Actifs</CardTitle>
            <Server className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {services.filter(s => s.status === "running").length}
            </div>
            <p className="text-xs text-gray-400">sur {services.length} services</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Requêtes/h</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">46.8K</div>
            <p className="text-xs text-gray-400">+12% depuis hier</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Uptime Moyen</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">98.6%</div>
            <p className="text-xs text-gray-400">7 derniers jours</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,234</div>
            <p className="text-xs text-gray-400">connectés maintenant</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="services" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="services" className="data-[state=active]:bg-brand-blue">
            <Server className="w-4 h-4 mr-2" />
            Services
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="data-[state=active]:bg-brand-blue">
            <Activity className="w-4 h-4 mr-2" />
            Monitoring
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-brand-blue">
            <Shield className="w-4 h-4 mr-2" />
            Sécurité
          </TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-brand-blue">
            <Terminal className="w-4 h-4 mr-2" />
            Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Gestion des Services</CardTitle>
              <CardDescription className="text-gray-400">
                Contrôlez l'état de vos microservices et composants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                      <div>
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          {getHealthIcon(service.health)}
                          <span>{service.requests.toLocaleString()} req/h</span>
                          <span>•</span>
                          <span>Uptime: {service.uptime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={service.status === "running" ? "default" : "secondary"}>
                        {service.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceAction(service.id, "start")}
                          disabled={service.status === "running"}
                          className="border-gray-600 hover:bg-gray-600"
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceAction(service.id, "pause")}
                          disabled={service.status === "paused"}
                          className="border-gray-600 hover:bg-gray-600"
                        >
                          <Pause className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceAction(service.id, "restart")}
                          className="border-gray-600 hover:bg-gray-600"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Monitoring en Temps Réel</CardTitle>
              <CardDescription className="text-gray-400">
                Surveillez les performances de votre infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-400">
                <Activity className="w-12 h-12 mx-auto mb-4" />
                <p>Graphiques de monitoring en cours de développement</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Centre de Sécurité</CardTitle>
              <CardDescription className="text-gray-400">
                Gérez la sécurité et les accès de votre plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-400">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <p>Panneau de sécurité en cours de développement</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Logs Système</CardTitle>
              <CardDescription className="text-gray-400">
                Consultez les logs de vos services et applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400">
                <div>[2024-06-15 10:30:25] INFO: API Gateway started successfully</div>
                <div>[2024-06-15 10:30:26] INFO: Microservice Auth connected to database</div>
                <div>[2024-06-15 10:30:27] WARN: Microservice Users connection timeout</div>
                <div>[2024-06-15 10:30:28] INFO: Data Processor processing batch #1234</div>
                <div>[2024-06-15 10:30:29] ERROR: Analytics Engine failed to connect</div>
                <div>[2024-06-15 10:30:30] INFO: Auto-retry Analytics Engine in 30s</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ControlStation;
