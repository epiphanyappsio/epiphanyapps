import { siteEmail, SITE_DOMAIN } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo, breadcrumbLd } from "@/components/Seo";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Privacy Policy | Epiphany Apps"
        description="How Epiphany Apps collects, uses and protects your data across our AI tools and automation software."
        path="/privacy"
        jsonLd={breadcrumbLd("Privacy Policy", "/privacy")}
      />
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Link to="/">
          <Button variant="ghost" className="mb-8 rounded-2xl">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">Epiphany Apps</p>
          <p className="text-muted-foreground mb-8">Last Updated: November 12, 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Epiphany Apps ("we," "us," "our") operates {SITE_DOMAIN} and all associated applications,
            tools, extensions, APIs, and services (collectively, the "Services"). This Privacy Policy
            explains how we collect, use, and protect your information. By using our Services, you
            agree to this policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Epiphany Apps is a software company registered in Ontario, Canada. We build AI-powered
              applications for global users. This policy covers every current and future product,
              application, extension, browser tool, API, and service we offer, without limitation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We collect only what is necessary to provide our Services:
            </p>
            <p className="text-foreground font-semibold mb-1">Information you provide:</p>
            <ul className="text-muted-foreground space-y-1 mb-4">
              <li>• Email address (required for account creation, subscriptions, and communications)</li>
              <li>• Content you choose to enter into our Services (see "Sensitive information you choose to share" below)</li>
            </ul>
            <p className="text-foreground font-semibold mb-1">Information collected automatically:</p>
            <ul className="text-muted-foreground space-y-1 mb-4">
              <li>• Usage analytics (features used, pages visited, session duration)</li>
              <li>• Device and browser information (device type, operating system, browser type)</li>
              <li>• General geographic region (country or region level only, not precise location)</li>
            </ul>
            <p className="text-foreground font-semibold mb-1">What we do NOT collect:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• We do not collect or log IP addresses for user profiling</li>
              <li>• We do not collect sensitive personal information beyond what is described in this Section 2</li>
              <li>• We do not collect payment card information directly (handled entirely by third-party payment processors)</li>
            </ul>
            <p className="text-foreground font-semibold mt-4 mb-1">Sensitive information you choose to share:</p>
            <p className="text-muted-foreground leading-relaxed">
              Some of our Services handle personal content, such as journal entries, mood or wellness
              information, and conversations with AI features, or involve browsing or search activity.
              We treat this information as sensitive. We collect it only when you use those features,
              use it only to provide them to you, do not sell it, and do not use it to train AI models.
              It is deleted according to Section 7, and you can ask us to export or delete it at any
              time under Section 8.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use collected information solely to:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Provide, operate, and improve our Services</li>
              <li>• Send important account updates, security notices, and service announcements</li>
              <li>• Send promotional communications and offers (you may opt out at any time)</li>
              <li>• Analyze usage patterns to improve user experience</li>
              <li>• Prevent fraud, abuse, and unauthorized access</li>
              <li>• Comply with applicable legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not use your information for any purpose beyond what is listed above without your explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">4. AI-Powered Features</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our Services use artificial intelligence features provided by third-party AI service providers. Please be aware:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• We do not use your content or data to train AI models</li>
              <li>• We select AI providers based on ethical standards, privacy commitments, and responsible use policies</li>
              <li>• Our AI providers are selected specifically for their commitments to not training models on user data submitted through our Services</li>
              <li>• AI-generated content may be inaccurate, incomplete, or imperfect — you use it at your own risk</li>
              <li>• We do not use AI services that engage in or support weapons development, warfare applications, or activities that violate human rights</li>
              <li>• Content you submit to AI-powered features may be processed by our selected AI service providers subject to their respective privacy commitments</li>
              <li>• No vendor names are listed here intentionally, as our provider relationships may change; however our ethical selection standards do not</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">5. Third-Party Service Providers</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We work with carefully selected third-party providers to operate our Services, including:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• AI service providers</li>
              <li>• Cloud infrastructure and database providers</li>
              <li>• Analytics service providers</li>
              <li>• Payment processors</li>
              <li>• Email delivery providers</li>
              <li>• Security and monitoring providers</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These providers access only the minimum information necessary to perform their functions. We do
              not authorize them to use your information for their own purposes. We do not list provider names
              in this policy as our technical infrastructure may evolve; however our data minimization and
              ethical standards remain constant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">6. Data Sharing</h2>
            <p className="text-foreground font-semibold mb-2">We do not sell your personal data. Ever. Under any circumstances.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">We may share information only:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• With third-party service providers as described in Section 5</li>
              <li>• If required by law, court order, or governmental authority</li>
              <li>• To protect the rights, property, or safety of Epiphany Apps or our users</li>
              <li>• In connection with a business transfer or acquisition, in which case you will be notified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">7. Data Retention and Deletion</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">Active accounts:</span> We retain your data for as long as your account is active or as needed to provide Services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">Lapsed, cancelled, or inactive accounts:</span> If your paid subscription lapses or is cancelled, or if an account without an active paid subscription has no activity, all personal data associated with the account, except your email address, will be automatically deleted after 90 days.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">Email retention:</span> We retain your email address after account deletion or subscription lapse solely to send occasional product updates, new app announcements, and re-engagement offers. You may unsubscribe at any time and your email will be permanently deleted from all our systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">User-initiated deletion:</span> Every Epiphany Apps application provides an in-app option to delete your account and associated data. Upon request, all your personal data except your email address will be deleted within 30 days. To have your email address permanently removed, use the unsubscribe link in any email we send you or contact us at{" "}
              <a href={`mailto:${siteEmail("privacy")}`} className="text-primary hover:text-primary/80">{siteEmail("privacy")}</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">8. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Regardless of where you are located, we honor the following rights:</p>
            <ul className="text-muted-foreground space-y-1 mb-4">
              <li>• <span className="text-foreground">Access</span> — request a copy of the personal data we hold about you</li>
              <li>• <span className="text-foreground">Correction</span> — request correction of inaccurate information</li>
              <li>• <span className="text-foreground">Deletion</span> — request deletion of your personal data (subject to Section 7)</li>
              <li>• <span className="text-foreground">Export</span> — request your data in a portable format</li>
              <li>• <span className="text-foreground">Opt-out</span> — opt out of marketing communications at any time</li>
              <li>• <span className="text-foreground">Withdraw consent</span> — where processing is based on consent, withdraw it at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">Canadian residents (PIPEDA):</span> You have the right to access and correct your personal information and to file a complaint with the Office of the Privacy Commissioner of Canada.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">European residents (GDPR):</span> You have additional rights including the right to restrict processing, object to processing, and lodge a complaint with your local supervisory authority.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <span className="text-foreground font-semibold">California residents (CCPA):</span> You have the right to know what personal information is collected, to delete personal information, and to opt out of the sale of personal information (we do not sell personal information).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${siteEmail("privacy")}`} className="text-primary hover:text-primary/80">{siteEmail("privacy")}</a>. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">9. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to operate our Services, remember your preferences, and analyze usage. We use only the minimum cookies necessary. You may control cookie settings through your browser; however disabling cookies may affect Service functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Services are not directed to children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us at{" "}
              <a href={`mailto:${siteEmail("privacy")}`} className="text-primary hover:text-primary/80">{siteEmail("privacy")}</a> and we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">11. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard technical and organizational security measures to protect your information. However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security and disclaim liability for unauthorized access beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">12. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Epiphany Apps is based in Ontario, Canada. If you are accessing our Services from outside Canada, your information may be transferred to and processed in Canada or other countries where our service providers operate. By using our Services you consent to this transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy at any time. We will notify you of material changes by posting the updated policy at {SITE_DOMAIN}/privacy and updating the "Last Updated" date. Continued use of our Services after changes are posted constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Privacy inquiries:{" "}
              <a href={`mailto:${siteEmail("privacy")}`} className="text-primary hover:text-primary/80">{siteEmail("privacy")}</a>
              <br />
              General support:{" "}
              <a href={`mailto:${siteEmail("support")}`} className="text-primary hover:text-primary/80">{siteEmail("support")}</a>
              <br />
              Legal notices:{" "}
              <a href={`mailto:${siteEmail("legal")}`} className="text-primary hover:text-primary/80">{siteEmail("legal")}</a>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Epiphany Apps<br />
              Ontario, Canada<br />
              {SITE_DOMAIN}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
