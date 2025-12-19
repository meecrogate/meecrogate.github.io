import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// --- Définitions SVG Lucide ---

// Icône Zap (Éclair / Vitesse pour Pro)
const Zap = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

// Icône Building2 (Bâtiment pour Entreprise)
const Building2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 22V4a2 2 0 0 1 2-2h8.5L20 7.5V22h2"></path>
        <path d="M18 22V6M12 22V4"></path>
        <path d="M7 10h4"></path>
        <path d="M7 14h4"></path>
        <path d="M7 18h4"></path>
    </svg>
);

// Icône Check (Coche dans un cercle / Inclus)
const Check = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

// Icône Plus (Plus dans un cercle / Options)
const Plus = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
    </svg>
);

const PricingHero = () => {
    const { toast } = useToast();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string>("");
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        entreprise: "",
        telephone: "",
        sujet: "",
        message: ""
    });

    // Classes de survol partagées pour un effet interactif
    const hoverClasses = "transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/50 hover:border-indigo-400 cursor-pointer";

    const handleOpenDialog = (plan: string) => {
        setSelectedPlan(plan);
        setFormData(prev => ({ ...prev, sujet: `Demande d'information - Plan ${plan}` }));
        setIsDialogOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message envoyé !",
            description: "Nous vous recontacterons bientôt.",
        });
        setIsDialogOpen(false);
        setFormData({
            nom: "",
            email: "",
            entreprise: "",
            telephone: "",
            sujet: "",
            message: ""
        });
    };

    return (
        <section 
            id="pricing" 
            aria-labelledby="pricing-title" 
            className="bg-slate-900 text-slate-200 py-12 px-4 min-h-screen"
        >
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-7">
                    <h1 
                        id="pricing-title" 
                        className="text-3xl sm:text-4xl font-bold mb-2 leading-tight text-indigo-400"
                    >
                        Tarifs — Passez du prototype à la production
                    </h1>
                    <p className="text-slate-300 text-base">
                        Des offres simples, adaptées à la France. Prix HT / mois — intégration incluse selon l'offre. 
                        <strong> Contactez-nous</strong> pour une démo ou un devis Enterprise.
                    </p>
                </header>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Pro */}
                    <article 
                        aria-labelledby="pro-title" 
                        className={`bg-slate-800/90 rounded-xl p-6 shadow-2xl border border-indigo-500/50 text-center flex flex-col ${hoverClasses}`}
                    >
                        <div className="flex-1">
                            <h2 id="pro-title" className="text-3xl font-bold mb-2 text-indigo-300 flex items-center justify-center gap-2">
                                <Zap className="w-6 h-6 text-indigo-400" /> Pro
                            </h2>
                            <p className="text-slate-300/90 mb-4 text-lg font-bold">Pour PME/ETI qui passent en production</p>
                            
                            <div className="flex items-baseline justify-center gap-2 mb-4">
                                <span className="text-xl font-bold text-indigo-200">1 500 - 2 500 €</span>
                                <span className="text-slate-400 text-sm">HT / mois</span>
                            </div>
                            
                            <div className="mb-4 text-left">
                                <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">Inclus:</h3>
                                <ul className="space-y-2 text-slate-200 text-sm">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Sécuriser 10–20 APIs
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        5 jours d'intégration et onboarding inclus
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Support Standard par tickets
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        4 instances Meecrogate Gateway en production
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mb-6 text-left">
                                <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">Options:</h3>
                                <ul className="space-y-2 text-slate-200 text-sm">
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Gestion des Identités: Meecrogate Serveur ID
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Licences pluriannuelles : 18 000–30 000 €/an
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        3 ans : 16 200–27 000 €/an
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        5 ans : 14 400–24 000 €/an
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="flex mt-auto pt-6"> 
                            <Button 
                                onClick={() => handleOpenDialog("Pro")}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg"
                            >
                                Choisir ce plan
                            </Button>
                        </div>
                    </article>

                    {/* Entreprise */}
                    <article 
                        aria-labelledby="enterprise-title" 
                        className={`bg-slate-800/90 text-slate-200 rounded-xl p-6 shadow-2xl border border-indigo-500/50 text-center flex flex-col ${hoverClasses}`}
                    >
                        <div className="flex-1">
                            <h2 id="enterprise-title" className="text-3xl font-bold mb-2 text-indigo-300 flex items-center justify-center gap-2">
                                <Building2 className="w-6 h-6 text-indigo-400" /> Entreprise
                            </h2>
                            <p className="text-slate-300/90 mb-4 text-lg font-bold">Conçu pour les grands comptes : haute sécurité, conformité et forte volumétrie.</p>
                            
                            <div className="flex items-baseline justify-center gap-2 mb-4">
                                <span className="text-xl font-bold text-indigo-200">Sur demande</span>
                            </div>
                            
                            <div className="mb-4 text-left">
                                <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">Inclus:</h3>
                                <ul className="space-y-2 text-slate-200 text-sm">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        SLA sur mesure
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Gestion de l'identification: Meecrogate Serveur ID
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Équipe de Projet d'intégration dédiée
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Support dédié
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Instances Meecrogate Gateway illimitées
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mb-6 text-left">
                                <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">Options:</h3>
                                <ul className="space-y-2 text-slate-200 text-sm">
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Ajout de fonctionnalités Custom
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Licences pluriannuelles
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Migration et mode hybride
                                    </li>
                                    <li className="flex items-start">
                                        <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                        Support d'Industry Standard APIs (TMForum, OpenBanking...)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="flex mt-auto pt-6">
                            <Button 
                                onClick={() => handleOpenDialog("Entreprise")}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg"
                            >
                                Nous contacter
                            </Button>
                        </div>
                    </article>
                </div>

                {/* Table comparative */}
                <div id="pricing-table" className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Tableau comparatif</h3>
                    <div className="overflow-x-auto rounded-xl bg-slate-800 border border-indigo-500/50 shadow-md">
                        <table className="w-full border-collapse min-w-[720px]">
                            <thead className="bg-indigo-800/30 text-indigo-50 text-left">
                                <tr>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">Fonctionnalité</th>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">Pro</th>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">Entreprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-200/90">
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">APIs sécurisées</td>
                                    <td className="py-3 px-4 border-t border-slate-700">10–20</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Illimité</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">Instances Gateway</td>
                                    <td className="py-3 px-4 border-t border-slate-700">4</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Illimité</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">Intégration & onboarding</td>
                                    <td className="py-3 px-4 border-t border-slate-700">5 jours inclus</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Équipe dédiée</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">Support</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Standard par tickets</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Support dédié</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">SLA</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Standard</td>
                                    <td className="py-3 px-4 border-t border-slate-700">Sur mesure</td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700">Serveur ID</td>
                                    <td className="py-3 px-4 border-t border-slate-700"><span className="text-indigo-400 font-bold">+ Option</span></td>
                                    <td className="py-3 px-4 border-t border-slate-700"><span className="text-indigo-400 font-bold">✓ Inclus</span></td>
                                </tr>
                                <tr className="hover:bg-slate-700/50 transition-colors">
                                    <td className="py-3 px-4 border-t border-slate-700 font-bold">Prix (HT / mois)</td>
                                    <td className="py-3 px-4 border-t border-slate-700 font-bold">1 500 - 2 500 €</td>
                                    <td className="py-3 px-4 border-t border-slate-700 font-bold">Sur demande</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Microcopy & FAQ */}
                <div className="space-y-6">
                    <div className="text-slate-300/80">
                        <p className="mb-2 text-sm">
                            <strong className="text-indigo-50">Remarques :</strong> Les prix sont exprimés en <strong>EUR HT / mois</strong>. TVA en sus. 
                            Engagement mensuel ou annuel (remise de 10% pour engagement 12 mois).
                        </p>
                        <p className="text-sm">
                            Dépassements (ex. requêtes, bande passante, APIs supplémentaires) facturés par paliers transparents — 
                            affichés dans le contrat et le simulateur de prix.
                        </p>
                    </div>

                    <div 
                        aria-labelledby="faq-title" 
                        className="bg-slate-800/90 rounded-xl p-5 border border-indigo-500/50 shadow-md"
                    >
                        <h3 id="faq-title" className="text-xl font-bold mb-3 text-indigo-400">Questions fréquentes</h3>
                        <dl className="text-slate-200/90 divide-y divide-slate-700">
                            <div className="py-3">
                                <dt className="font-bold text-base">Que comprend l'intégration ?</dt>
                                <dd className="mt-1 text-sm">
                                    Paramétrage initial, connexion aux backends, tests, et formation des équipes 
                                    (durée selon l'offre : ½ j → 2 j → projet sur mesure).
                                </dd>
                            </div>

                            <div className="py-3">
                                <dt className="font-bold text-base">Peut-on monter d'un plan à l'autre sans coupure ?</dt>
                                <dd className="mt-1 text-sm">
                                    Oui — montée en charge fluide, migration et hook d'intégration planifiés avec notre équipe 
                                    pour éviter toute interruption.
                                </dd>
                            </div>

                            <div className="py-3">
                                <dt className="font-bold text-base">Y a-t-il une offre POC ?</dt>
                                <dd className="mt-1 text-sm">
                                    Oui : pack POC disponible (forfait remboursable à la signature d'un contrat Pro/Entreprise). 
                                    Contactez ventes pour les conditions.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Contact strip */}
                <footer 
                    id="contact" 
                    className="mt-10 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
                >
                    <div className="flex flex-col gap-1.5 text-center md:text-left">
                        <div className="font-extrabold text-xl">Besoin d'un accompagnement sur-mesure ?</div>
                        <div className="text-indigo-100/90 text-sm">
                            Équipe dédiée, migration, conformité RGPD, ou déploiement on-premise : parlons-en.
                        </div>
                    </div>
                    <Button 
                        onClick={() => handleOpenDialog("Contact commercial")}
                        className="bg-white text-indigo-700 hover:bg-white/90 font-bold border-0 shadow-md"
                    >
                        Contact commercial
                    </Button>
                </footer>
            </div>

            {/* Dialog de contact */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-slate-800 border-indigo-500/50 text-slate-200 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-indigo-300">
                            Demande de contact
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            {selectedPlan && `Vous êtes intéressé par le plan ${selectedPlan}. `}
                            Remplissez ce formulaire et notre équipe vous contactera rapidement.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="nom" className="text-slate-300">
                                    Nom complet *
                                </Label>
                                <Input
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="Votre nom complet"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="entreprise" className="text-slate-300">
                                    Entreprise *
                                </Label>
                                <Input
                                    id="entreprise"
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="Nom de votre entreprise"
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-300">
                                    Email *
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="votre.email@entreprise.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="telephone" className="text-slate-300">
                                    Téléphone
                                </Label>
                                <Input
                                    id="telephone"
                                    name="telephone"
                                    type="tel"
                                    value={formData.telephone}
                                    onChange={handleInputChange}
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="+33 1 23 45 67 89"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="sujet" className="text-slate-300">
                                Sujet *
                            </Label>
                            <Input
                                id="sujet"
                                name="sujet"
                                value={formData.sujet}
                                onChange={handleInputChange}
                                required
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="Objet de votre demande"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-slate-300">
                                Message *
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                            />
                        </div>
                        
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            <Send className="mr-2 w-5 h-5" />
                            Envoyer le message
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default PricingHero;
