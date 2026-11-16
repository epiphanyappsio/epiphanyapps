import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo, breadcrumbLd } from "@/components/Seo";

const Dmca = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="DMCA & Copyright Policy | Epiphany Apps"
        description="Submit a DMCA takedown notice or read the copyright policy covering all Epiphany Apps products."
        path="/dmca"
        jsonLd={breadcrumbLd("DMCA Policy", "/dmca")}
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
          <h1 className="text-4xl font-display font-bold mb-4">Legal & DMCA Policy</h1>
          <p className="text-muted-foreground mb-2">Epiphany Apps</p>
          <p className="text-muted-foreground mb-8">Last Updated: November 12, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">1. Scope</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Legal & DMCA Policy applies to every application, tool, extension, API, website,
              and service operated by Epiphany Apps, whether it exists today or is added later
              (collectively, the "Services"). It forms part of our Terms of Service and should be
              read together with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">2. User Responsibility for Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are solely and fully responsible for any content, prompts, files, images, logos,
              text, audio, video, or other material ("User Content") that you upload, generate,
              submit, transmit, or otherwise make available through the Services. You represent and
              warrant that you own or have all necessary rights, licenses, consents, and permissions
              to use your User Content and to grant Epiphany Apps the rights described in our Terms
              of Service, and that your User Content does not infringe, misappropriate, or violate
              any third-party intellectual property right, right of publicity or privacy, or any
              applicable law. Epiphany Apps does not pre-screen User Content and disclaims all
              liability for it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">3. Copyright Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Epiphany Apps respects the intellectual property rights of others and expects users to
              do the same. We comply with the Digital Millennium Copyright Act of 1998 ("DMCA") and
              respond to clear, valid takedown notices. If you knowingly upload or generate
              copyrighted material that you do not own or have permission to use, you accept full
              legal responsibility for any resulting claims, damages, or penalties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">4. Filing a Takedown Notice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe content available through the Services infringes your copyright, send a
              written notice by email to{" "}
              <a href="mailto:legal@epiphanyapps.org" className="text-primary hover:text-primary/80">
                legal@epiphanyapps.org
              </a>{" "}
              that includes all of the following:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• A physical or electronic signature of the copyright owner or a person authorized to act on the owner's behalf</li>
              <li>• Identification of the copyrighted work claimed to be infringed</li>
              <li>• The exact URL or enough detail to locate the allegedly infringing material</li>
              <li>• Your contact information (full name, mailing address, phone number, and email)</li>
              <li>• A statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law</li>
              <li>• A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Notices that leave out these items may not be acted on. Knowingly misrepresenting that
              material is infringing may make you liable for damages under the DMCA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">5. What We Do When We Receive a Notice</h2>
            <p className="text-muted-foreground leading-relaxed">
              When we receive a valid notice, we act promptly to remove or disable access to the
              material identified in it. We notify the user who posted the material and tell them
              what was removed and why.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">6. Counter-Notice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your content was removed and you believe that was a mistake or a misidentification,
              you may send a counter-notice by email to{" "}
              <a href="mailto:legal@epiphanyapps.org" className="text-primary hover:text-primary/80">
                legal@epiphanyapps.org
              </a>{" "}
              that includes all of the following:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Your physical or electronic signature</li>
              <li>• Identification of the material that was removed and where it appeared before removal</li>
              <li>• A statement, under penalty of perjury, that you have a good-faith belief that the material was removed by mistake or misidentification</li>
              <li>• Your name, mailing address, and phone number</li>
              <li>• A statement that you consent to the jurisdiction of the U.S. federal court for the judicial district where your address is located (or, if your address is outside the United States, any judicial district in which Epiphany Apps may be found), and that you will accept service of process from the person who filed the original notice</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We will send a copy of your counter-notice to the person who filed the original
              notice. Unless we first receive notice from that person that they have filed a court
              action seeking to restrain the alleged infringement, we will restore the material no
              sooner than 10 and no later than 14 business days after we receive your
              counter-notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">7. Repeat Infringers and Account Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate any account at our discretion, including for violations of
              our Terms of Service or for attempts to hack, abuse, or exploit our systems. In
              appropriate circumstances, we terminate the accounts of users who repeatedly infringe
              copyrights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our liability to you, and your obligation to indemnify us, are governed by Section 13
              (Limitation of Liability) and Section 14 (Indemnification) of our Terms of Service.
              Those sections apply to this Policy in full.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">9. Trademarks</h2>
            <p className="text-muted-foreground leading-relaxed">
              Epiphany Apps and the names of our products and services are trademarks or trade names
              of Epiphany Apps. All other trademarks are the property of their respective owners.
              Unauthorized use is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Policy at any time by posting the updated version on our website
              and changing the "Last Updated" date. Continued use of the Services after changes are
              posted constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Copyright takedown notices, counter-notices, and legal notices:{" "}
              <a href="mailto:legal@epiphanyapps.org" className="text-primary hover:text-primary/80">
                legal@epiphanyapps.org
              </a>
              <br />
              Privacy inquiries:{" "}
              <a href="mailto:privacy@epiphanyapps.org" className="text-primary hover:text-primary/80">
                privacy@epiphanyapps.org
              </a>
              <br />
              General support:{" "}
              <a href="mailto:support@epiphanyapps.org" className="text-primary hover:text-primary/80">
                support@epiphanyapps.org
              </a>
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

export default Dmca;
