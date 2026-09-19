import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react"; 
import { useToast } from "@/hooks/use-toast";

// --- Définitions SVG Lucide ---

const Zap = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const Building2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 22V4a2 2 0 0 1 2-2h8.5L20 7.5V22h2"></path>
        <path d="M18 22V6M12 22V4"></path>
        <path d="M7 10h4"></path>
        <path d="M7 14h4"></path>
        <path d="M7 18h4"></path>
    </svg>
);

const Check = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const Plus = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
    </svg>
);

const PricingHero = () => {
    const { toast } = useToast();
    const { t } = useTranslation("pricing");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [selectedPlan, setSelectedPlan] = useState<string>("");
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        entreprise: "",
        telephone: "",
        sujet: "",
        message: ""
    });

    const WEB3FORMS_ACCESS_KEY = "081aaa9f-94c9-4b5b-8688-df70b9f15bb6";

    const hoverClasses = "transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/50 hover:border-indigo-400 cursor-pointer";

    // The plans and the comparison rows are described in the `pricing`
    // namespace; only the icons and the ordering live here.
    const plans = [
        { id: "pro", icon: Zap },
        { id: "enterprise", icon: Building2 },
    ];

    const comparisonRows = [
        "apis",
        "orchestrators",
        "gatewayInstances",
        "onboarding",
        "support",
        "sla",
        "idServer",
        "orchestrator",
        "processExecutor",
        "roles",
        "price",
    ];

    // `@option` / `@options` in a comparison cell render as the highlighted badge.
    const renderCell = (value: string) => {
        if (value === "@option" || value === "@options") {
            return (
                <span className="text-indigo-400 font-bold">
                    {value === "@option" ? t("comparison.option") : t("comparison.options")}
                </span>
            );
        }
        return value;
    };

    const handleOpenDialog = (plan: string) => {
        setSelectedPlan(plan);
        setFormData(prev => ({ ...prev, sujet: t("dialog.defaultSubject", { plan }) }));
        setIsDialogOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: t("dialog.mailSubject", { plan: selectedPlan, name: formData.nom }),
                    from_name: formData.nom,
                    ...formData
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: t("toast.successTitle"),
                    description: t("toast.successDescription"),
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
            } else {
                toast({
                    title: t("toast.errorTitle"),
                    description: t("toast.errorDescription"),
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: t("toast.networkTitle"),
                description: t("toast.networkDescription"),
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        {t("hero.title")}
                    </h1>
                    <p className="text-slate-300 text-base">
                        {t("hero.subtitle")}{" "}
                        <strong>{t("hero.subtitleStrong")}</strong> {t("hero.subtitleEnd")}
                    </p>
                </header>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        const name = t(`plans.${plan.id}.name`);
                        const priceNote = t(`plans.${plan.id}.priceNote`);

                        return (
                            <article 
                                key={plan.id}
                                aria-labelledby={`${plan.id}-title`}
                                className={`bg-slate-800/90 rounded-xl p-6 shadow-2xl border border-indigo-500/50 text-center flex flex-col ${hoverClasses}`}
                            >
                                <div className="flex-1">
                                    <h2 id={`${plan.id}-title`} className="text-3xl font-bold mb-2 text-indigo-300 flex items-center justify-center gap-2">
                                        <Icon className="w-6 h-6 text-indigo-400" /> {name}
                                    </h2>
                                    <p className="text-slate-300/90 mb-4 text-lg font-bold">{t(`plans.${plan.id}.tagline`)}</p>

                                    <div className="flex items-baseline justify-center gap-2 mb-4">
                                        <span className="text-xl font-bold text-indigo-200">{t(`plans.${plan.id}.price`)}</span>
                                        {priceNote && <span className="text-slate-400 text-sm">{priceNote}</span>}
                                    </div>

                                    <div className="mb-4 text-left">
                                        <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">{t("labels.included")}</h3>
                                        <ul className="space-y-2 text-slate-200 text-sm">
                                            {(t(`plans.${plan.id}.included`, { returnObjects: true }) as string[]).map((item) => (
                                                <li key={item} className="flex items-start">
                                                    <Check className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6 text-left">
                                        <h3 className="text-sm font-semibold text-indigo-300 mb-2 border-b border-indigo-700 pb-1">{t(`plans.${plan.id}.optionsTitle`)}</h3>
                                        <ul className="space-y-2 text-slate-200 text-sm">
                                            {(t(`plans.${plan.id}.options`, { returnObjects: true }) as string[]).map((item) => (
                                                <li key={item} className="flex items-start">
                                                    <Plus className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex mt-auto pt-6"> 
                                    <Button 
                                        onClick={() => handleOpenDialog(name)}
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg"
                                    >
                                        {t(`plans.${plan.id}.cta`)}
                                    </Button>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Table comparative */}
                <div id="pricing-table" className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">{t("comparison.title")}</h3>
                    <div className="overflow-x-auto rounded-xl bg-slate-800 border border-indigo-500/50 shadow-md">
                        <table className="w-full border-collapse min-w-[720px]">
                            <thead className="bg-indigo-800/30 text-indigo-50 text-left">
                                <tr>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">{t("comparison.headers.feature")}</th>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">{t("comparison.headers.pro")}</th>
                                    <th className="py-3.5 px-4 font-bold border-b border-indigo-700">{t("comparison.headers.enterprise")}</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-200/90">
                                {comparisonRows.map((row) => {
                                    const isPriceRow = row === "price";
                                    const cellClass = `py-3 px-4 border-t border-slate-700${isPriceRow ? " font-bold" : ""}`;
                                    return (
                                        <tr key={row} className="hover:bg-slate-700/50 transition-colors">
                                            <td className={cellClass}>{t(`comparison.rows.${row}.feature`)}</td>
                                            <td className={cellClass}>{renderCell(t(`comparison.rows.${row}.pro`))}</td>
                                            <td className={cellClass}>{renderCell(t(`comparison.rows.${row}.enterprise`))}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Microcopy & FAQ */}
                <div className="space-y-6">
                    <div className="text-slate-300/80">
                        <p className="text-sm">
                            <strong className="text-indigo-50">{t("notes.label")}</strong>{" "}
                            <Trans ns="pricing" i18nKey="notes.text" components={[<strong key="0" />]} />
                        </p>
                    </div>

                    <div 
                        aria-labelledby="faq-title" 
                        className="bg-slate-800/90 rounded-xl p-5 border border-indigo-500/50 shadow-md"
                    >
                        <h3 id="faq-title" className="text-xl font-bold mb-3 text-indigo-400">{t("faq.title")}</h3>
                        <dl className="text-slate-200/90 divide-y divide-slate-700">
                            {(t("faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map((item) => (
                                <div key={item.question} className="py-3">
                                    <dt className="font-bold text-base">{item.question}</dt>
                                    <dd className="mt-1 text-sm">{item.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Contact strip */}
                <footer 
                    id="contact" 
                    className="mt-10 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
                >
                    <div className="flex flex-col gap-1.5 text-center md:text-left">
                        <div className="font-extrabold text-xl">{t("contactStrip.title")}</div>
                        <div className="text-indigo-100/90 text-sm">
                            {t("contactStrip.description")}
                        </div>
                    </div>
                    <Button 
                        onClick={() => handleOpenDialog(t("contactStrip.cta"))}
                        className="bg-white text-indigo-700 hover:bg-white/90 font-bold border-0 shadow-md"
                    >
                        {t("contactStrip.cta")}
                    </Button>
                </footer>
            </div>

            {/* Dialog de contact */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={false}>
                <DialogContent className="bg-slate-800 border-indigo-500/50 text-slate-200 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-indigo-300">
                            {t("dialog.title")}
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            {selectedPlan && t("dialog.descriptionWithPlan", { plan: selectedPlan })}
                            {t("dialog.description")}
                        </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="nom" className="text-slate-300">
                                    {t("forms:contact.fullName.label")}
                                </Label>
                                <Input
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder={t("forms:contact.fullName.placeholder")}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="entreprise" className="text-slate-300">
                                    {t("forms:contact.company.label")}
                                </Label>
                                <Input
                                    id="entreprise"
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder={t("forms:contact.company.placeholder")}
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-300">
                                    {t("forms:fields.email.label")}
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder={t("forms:fields.email.placeholder")}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="telephone" className="text-slate-300">
                                    {t("forms:fields.phone.label")}
                                </Label>
                                <Input
                                    id="telephone"
                                    name="telephone"
                                    type="tel"
                                    value={formData.telephone}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder={t("forms:fields.phone.placeholder")}
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="sujet" className="text-slate-300">
                                {t("forms:contact.subject.label")}
                            </Label>
                            <Input
                                id="sujet"
                                name="sujet"
                                value={formData.sujet}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder={t("forms:contact.subject.placeholder")}
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-slate-300">
                                {t("forms:contact.message.label")}
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                                rows={5}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder={t("forms:fields.message.placeholder")}
                            />
                        </div>
                        
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> {t("dialog.submitting")}</>
                            ) : (
                                <><Send className="mr-2 w-5 h-5" /> {t("dialog.submit")}</>
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default PricingHero;
