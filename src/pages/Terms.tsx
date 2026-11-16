import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo, breadcrumbLd } from "@/components/Seo";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Terms of Service | Epiphany Apps"
        description="The terms governing your use of Epiphany Apps products, subscriptions and AI tools."
        path="/terms"
        jsonLd={breadcrumbLd("Terms of Service", "/terms")}
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
          <h1 className="text-4xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-2">Epiphany Apps</p>
          <p className="text-muted-foreground mb-8">Last Updated: November 12, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using any application, tool, extension, API, website, or service operated by Epiphany Apps (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services. These Terms apply to every current and future product we offer without limitation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">2. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Epiphany Apps is a software company registered in Ontario, Canada, operating epiphanyapps.org and all associated Services. References to "we," "us," or "our" mean Epiphany Apps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 13 years of age (16 in the EU) to use our Services. By using our Services you represent that you meet this requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">4. User Responsibility for Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You are solely and fully responsible for any content, prompts, files, images, text, audio, video, or other material you upload, generate, submit, transmit, or otherwise make available through our Services ("User Content"). You represent and warrant that:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• You own or have all necessary rights to your User Content</li>
              <li>• Your User Content does not infringe any copyright, trademark, patent, trade secret, privacy right, or any other right of any third party</li>
              <li>• Your User Content does not violate any applicable law or regulation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Epiphany Apps from any claim, damage, loss, or expense arising from your User Content. Epiphany Apps does not pre-screen User Content and accepts no liability for it whatsoever.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">5. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You agree not to use our Services to:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Violate any applicable law or regulation</li>
              <li>• Infringe any intellectual property or privacy right</li>
              <li>• Upload or distribute malware, viruses, or malicious code</li>
              <li>• Attempt to hack, probe, scan, reverse-engineer, or exploit our systems</li>
              <li>• Interfere with other users' access to or enjoyment of our Services</li>
              <li>• Generate hateful, harassing, sexually exploitative, violent, or otherwise unlawful content</li>
              <li>• Develop weapons, support warfare, or engage in activities that harm human beings</li>
              <li>• Scrape, copy, or redistribute our Services or content without permission</li>
              <li>• Misrepresent your identity or affiliation</li>
              <li>• Engage in any activity that could damage, disable, or impair our Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">6. AI-Powered Features</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our Services include features powered by artificial intelligence. You acknowledge and agree that:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• AI-generated content may be inaccurate, incomplete, offensive, or unsuitable for your purposes</li>
              <li>• You use all AI-generated content entirely at your own risk</li>
              <li>• We make no warranties regarding the accuracy, reliability, or fitness of AI-generated output</li>
              <li>• AI features are provided "as-is" with no guarantee of results</li>
              <li>• You are solely responsible for reviewing, verifying, and deciding whether to use any AI-generated content</li>
              <li>• We are not liable for any decision made or action taken based on AI-generated output</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">7. Health and Wellness Disclaimer</h2>
            <p className="text-foreground font-semibold mb-3">IMPORTANT — PLEASE READ CAREFULLY.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Certain Epiphany Apps applications offer wellness, mental health, mindfulness, or personal development features ("Wellness Features"). These Wellness Features:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• Are informed by established psychological frameworks including but not limited to Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) techniques</li>
              <li>• Are provided for general informational and self-improvement purposes only</li>
              <li>• Are NOT medical advice, psychiatric advice, psychological advice, or any form of professional healthcare</li>
              <li>• Are NOT a substitute for professional medical care, mental health treatment, therapy, counseling, or crisis intervention</li>
              <li>• Have NOT been evaluated or approved by Health Canada, the FDA, or any other regulatory authority as medical treatments</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you are experiencing a mental health crisis, thoughts of self-harm or suicide, or any medical emergency, please immediately contact emergency services (911) or a crisis helpline in your country.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using any Wellness Feature, you acknowledge that you have read this disclaimer, understand it fully, and agree that Epiphany Apps bears absolutely no responsibility or liability for any outcome, effect, or consequence of your use of Wellness Features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">8. Subscriptions and Payment</h2>
            <ul className="text-muted-foreground space-y-1">
              <li>• Subscription fees are charged at the beginning of each billing period</li>
              <li>• All sales are final — we do not offer refunds except where required by applicable law</li>
              <li>• Subscriptions automatically renew unless cancelled before the renewal date</li>
              <li>• You may cancel your subscription at any time through your account settings</li>
              <li>• Upon cancellation, you retain access until the end of your paid period</li>
              <li>• We reserve the right to change pricing with reasonable notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">9. Data Retention Upon Cancellation or Non-Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              If your paid subscription lapses or you cancel your account, all personal data associated with your account — except your email address — will be automatically and permanently deleted after 90 days. Your email address will be retained solely for re-engagement communications and will be permanently deleted upon unsubscribe request. See our Privacy Policy for full details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              All content, design, code, trademarks, logos, and materials comprising our Services are owned by or licensed to Epiphany Apps and are protected by applicable intellectual property laws. You may not copy, reproduce, distribute, modify, create derivative works of, or exploit any part of our Services without our express written permission.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your User Content remains yours. By submitting User Content you grant Epiphany Apps a limited, non-exclusive, royalty-free license to use, store, and process it solely to provide the Services to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">11. Third-Party Services and Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Services may integrate with or link to third-party services. We are not responsible for the content, privacy practices, or reliability of any third-party service. Your use of third-party services is governed by their respective terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">12. Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, OR NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">WE DO NOT WARRANT THAT:</p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• THE SERVICES WILL MEET YOUR REQUIREMENTS</li>
              <li>• THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
              <li>• ANY RESULTS OBTAINED FROM USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE</li>
              <li>• ANY AI-GENERATED CONTENT WILL BE ACCURATE, COMPLETE, OR SUITABLE FOR ANY PURPOSE</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM EPIPHANY APPS SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">13. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              EPIPHANY APPS, ITS OWNER, AFFILIATES, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS SHALL NOT BE LIABLE FOR ANY:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES</li>
              <li>• LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
              <li>• COST OF SUBSTITUTE SERVICES</li>
              <li>• DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
              <li>• DAMAGES ARISING FROM ANY AI-GENERATED CONTENT OR WELLNESS FEATURES</li>
              <li>• DAMAGES ARISING FROM YOUR RELIANCE ON ANY INFORMATION PROVIDED THROUGH OUR SERVICES</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3">
              WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) TEN CANADIAN DOLLARS (CAD $10.00).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">14. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree to defend, indemnify, and hold harmless Epiphany Apps and its owner, affiliates, officers, employees, contractors, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in any way connected with:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Your access to or use of our Services</li>
              <li>• Your User Content</li>
              <li>• Your violation of these Terms</li>
              <li>• Your violation of any law or third-party right</li>
              <li>• Your use of or reliance on any AI-generated content or Wellness Features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">15. Account Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We reserve the right to suspend or terminate your account at our sole discretion if you:
            </p>
            <ul className="text-muted-foreground space-y-1 mb-3">
              <li>• Violate these Terms</li>
              <li>• Engage in fraudulent, abusive, or harmful behavior</li>
              <li>• Repeatedly infringe intellectual property rights</li>
              <li>• Attempt to exploit, hack, or damage our Services or other users</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use our Services ceases immediately. Data deletion follows the timeline in Section 9.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">16. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms at any time. We will notify you of material changes by posting updated Terms at epiphanyapps.org/terms and updating the "Last Updated" date. Continued use of our Services after changes are posted constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">17. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any dispute arising from these Terms or our Services shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada. If you are a consumer resident in a jurisdiction that provides mandatory consumer protections, those protections are not waived by this clause.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">18. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it enforceable, and all remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">19. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our{" "}
              <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link> and{" "}
              <Link to="/dmca" className="text-primary hover:text-primary/80">Legal/DMCA Policy</Link>, constitute the entire agreement between you and Epiphany Apps regarding our Services and supersede all prior agreements, representations, and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">20. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              General support:{" "}
              <a href="mailto:support@epiphanyapps.org" className="text-primary hover:text-primary/80">support@epiphanyapps.org</a>
              <br />
              Legal notices:{" "}
              <a href="mailto:legal@epiphanyapps.org" className="text-primary hover:text-primary/80">legal@epiphanyapps.org</a>
              <br />
              Privacy inquiries:{" "}
              <a href="mailto:privacy@epiphanyapps.org" className="text-primary hover:text-primary/80">privacy@epiphanyapps.org</a>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Epiphany Apps<br />
              Ontario, Canada<br />
              epiphanyapps.org
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
