import React, { useEffect } from "react";
import "./PaperTrail.css";
import libraryScreenshot from "../assets/paper-trail/screenshots/library.png";
import addScreenshot from "../assets/paper-trail/screenshots/add.png";
import reviewPhotosScreenshot from "../assets/paper-trail/screenshots/review-photos.png";
import documentDetailScreenshot from "../assets/paper-trail/screenshots/document-detail.png";
import localFirstScreenshot from "../assets/paper-trail/screenshots/local-first.png";

type PhoneVariant = "library" | "add" | "detail";
type DetailKind = "warranty" | "ticket";

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactElement;
}

interface PhoneProps {
  variant?: PhoneVariant;
  className?: string;
  detail?: DetailKind;
}

interface DetailScreenProps {
  detail: DetailKind;
}

const screenshotAssets = {
  library: libraryScreenshot,
  add: addScreenshot,
  reviewPhotos: reviewPhotosScreenshot,
  documentDetail: documentDetailScreenshot,
  localFirst: localFirstScreenshot,
};

const categories = [
  "Receipts",
  "Invoices",
  "Travel & Tickets",
  "Contact Cards",
  "QR & Barcodes",
  "Labels & Packages",
  "Notes & Docs",
  "Recently Added",
];

const steps = [
  {
    number: "01",
    title: "Add a document photo",
    copy:
      "Take a photo, pick one from Photos, or scan your library for document-like images.",
    className: "add-mini",
    labels: ["Camera", "Scan Photo Library", "Photo Library"],
  },
  {
    number: "02",
    title: "Review what paper.trail found",
    copy:
      "Review matches before they enter your library. Skip duplicates, misses, and unreadable shots.",
    className: "review-mini",
    labels: ["Ready to import", "Not a match", "Could not read"],
  },
  {
    number: "03",
    title: "Save a local copy",
    copy:
      "Selected items are copied into local app storage and indexed for search.",
    className: "local-mini",
    labels: ["Copied locally", "Search terms added"],
  },
  {
    number: "04",
    title: "Find it when you need it",
    copy:
      "Search names, dates, tags, or text when you need the original image again.",
    className: "find-mini",
    labels: ["serial label", "Mar 08", "favorite"],
  },
];

const useCases = [
  ["Return receipts", "Find proof before the return window closes."],
  ["Warranty proof", "Keep the receipt that matters when something breaks."],
  ["Serial-number labels", "Keep model numbers without saving the box."],
  ["Shipping labels", "Save tracking labels after the package is gone."],
  ["Contact cards", "Turn a card photo into a searchable contact clue."],
  ["Handwritten notes", "Keep quick notes findable after the paper moves."],
  ["Travel bookings", "Save confirmation details with your other trip papers."],
  ["Event tickets", "Keep the ticket image ready for the door."],
  ["QR codes and barcodes", "Find useful codes without digging through Photos."],
  ["Bills and statements", "Keep image copies for later reference."],
];

function Header() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="paper.trail home">
        <span className="brand-mark" aria-hidden="true" />
        paper.trail
      </a>
      <nav className="nav-links" aria-label="Section links">
        <a href="#how-it-works">How it works</a>
        <a href="#library">Library</a>
        <a href="#privacy">Privacy</a>
      </nav>
      <a className="nav-cta" href="#waitlist">Join Waitlist</a>
    </header>
  );
}

function StatusRow() {
  return (
    <div className="status-row">
      <span>9:41</span>
      <span className="status-dots" />
    </div>
  );
}

function AssetImage({ src, alt, className = "", fallback }: AssetImageProps) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return fallback;
  }

  return (
    <img
      className={`asset-image ${className}`}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

function Phone({ variant = "library", className = "", detail = "warranty" }: PhoneProps) {
  const fallbackScreens: Record<PhoneVariant, React.ReactElement> = {
    library: <LibraryScreen />,
    add: <AddScreen />,
    detail: <DetailScreen detail={detail} />,
  };
  const screenAssets: Record<PhoneVariant, { src: string; alt: string }> = {
    library: {
      src: screenshotAssets.library,
      alt: "paper.trail Library screen",
    },
    add: {
      src: screenshotAssets.add,
      alt: "paper.trail Add screen",
    },
    detail: {
      src: screenshotAssets.documentDetail,
      alt: "paper.trail Document Detail screen",
    },
  };
  const screen = screenAssets[variant];

  return (
    <div className={`phone ${className}`}>
      <div className="phone-shell">
        <div className="phone-notch" />
        <AssetImage
          className="screen screenshot-screen"
          src={screen.src}
          alt={screen.alt}
          fallback={fallbackScreens[variant]}
        />
      </div>
    </div>
  );
}

function LibraryScreen() {
  return (
    <div className="screen library-screen">
      <StatusRow />
      <div className="app-top">
        <span className="mini-label">Library</span>
        <span className="round-control" />
      </div>
      <div className="search-field">Search text, names, dates, tags</div>
      <h4>Recently Added</h4>
      <div className="recent-strip">
        <div className="doc-thumb receipt"><span>Return receipt</span></div>
        <div className="doc-thumb note"><span>Handwritten note</span></div>
        <div className="doc-thumb ticket"><span>Event ticket</span></div>
      </div>
      <h4>Categories</h4>
      <div className="category-grid full">
        <div>Receipts</div>
        <div>Invoices</div>
        <div>Travel</div>
        <div>Notes</div>
      </div>
    </div>
  );
}

function AddScreen() {
  return (
    <div className="screen add-screen">
      <StatusRow />
      <div className="app-top">
        <span className="mini-label">Add</span>
        <span className="round-control rose" />
      </div>
      <div className="capture-card">
        <div className="capture-lens" />
        <strong>Add a document photo</strong>
        <span>Camera, Photos, or library scan</span>
      </div>
      <div className="action-list spacious">
        <div><span />Camera</div>
        <div><span />Scan Photo Library</div>
        <div><span />Photo Library</div>
      </div>
    </div>
  );
}

function DetailScreen({ detail }: DetailScreenProps) {
  const isTicket = detail === "ticket";

  return (
    <div className={`screen detail-screen ${isTicket ? "full-detail" : ""}`}>
      <StatusRow />
      <div className={`detail-image ${isTicket ? "tall" : ""}`}>
        <div className="paper-lines" />
        <span>{isTicket ? "Boarding pass" : "Warranty card"}</span>
      </div>
      <div className="detail-title-row">
        <h2>{isTicket ? "Train Ticket" : "Espresso Machine"}</h2>
        {isTicket && <span className="favorite-dot" />}
      </div>
      <div className="tag-row">
        <span>{isTicket ? "Travel" : "Warranty"}</span>
        <span>{isTicket ? "Ticket" : "Kitchen"}</span>
      </div>
      <dl className="facts">
        <div>
          <dt>{isTicket ? "Document date" : "Date"}</dt>
          <dd>{isTicket ? "Apr 21" : "Jun 12"}</dd>
        </div>
        <div>
          <dt>{isTicket ? "Imported" : "Size"}</dt>
          <dd>{isTicket ? "Apr 22" : "1.8 MB"}</dd>
        </div>
        {isTicket && (
          <div>
            <dt>File size</dt>
            <dd>2.1 MB</dd>
          </div>
        )}
      </dl>
      {isTicket && (
        <div className="terms">
          <span>station</span>
          <span>confirmation</span>
          <span>business trip</span>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="trust-pills" aria-label="Product qualities">
            <span>Local-first</span>
            <span>Photo documents</span>
            <span>Fast search</span>
          </div>
          <h1 id="hero-title">paper.trail</h1>
          <p className="hero-kicker">Save it now. Find it later.</p>
          <p className="hero-body">
            Receipts, labels, notes, cards, tickets, and codes, searchable on your iPhone.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#waitlist">Join Waitlist</a>
            <a className="button secondary" href="#how-it-works">See how it works</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="paper.trail app mockups">
          <Phone variant="library" className="hero-phone-one" />
          <Phone variant="add" className="hero-phone-two" />
          <Phone variant="detail" detail="warranty" className="hero-phone-three" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section steps-section" id="how-it-works" aria-labelledby="steps-title">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2 id="steps-title">From photo to found in four steps.</h2>
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
            <div className={`mini-screen ${step.className}`} aria-hidden="true">
              {step.labels.map((label) => <span key={label}>{label}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LibraryFeature() {
  return (
    <section className="feature-band library-band" id="library" aria-labelledby="library-title">
      <div className="feature-inner">
        <div className="feature-visual">
          <Phone variant="library" className="large-phone" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Library</p>
          <h2 id="library-title">Your paper-photo library</h2>
          <p>
            Recent saves, categories, and search keep small documents easy to get back to.
          </p>
          <div className="chip-grid" aria-label="Library categories">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportFeature() {
  return (
    <section className="feature-band import-band" aria-labelledby="import-title">
      <div className="feature-inner flipped">
        <div className="feature-copy">
          <p className="eyebrow">Import</p>
          <h2 id="import-title">Import without cleaning your camera roll</h2>
          <p>
            Scan Photos, choose manually, or use Camera. You review everything before it is saved.
          </p>
        </div>
        <div className="feature-visual paired-phones">
          <Phone variant="add" className="medium-phone" />
          <ReviewSheet />
        </div>
      </div>
    </section>
  );
}

function ReviewSheet() {
  return (
    <AssetImage
      className="review-sheet review-sheet-asset"
      src={screenshotAssets.reviewPhotos}
      alt="paper.trail Review Photos sheet"
      fallback={<ReviewSheetFallback />}
    />
  );
}

function ReviewSheetFallback() {
  const stats = [
    ["Photos checked", "248", ""],
    ["Ready to import", "18", "ready"],
    ["Not a match", "207", ""],
    ["Already in app", "9", ""],
    ["Could not read", "4", ""],
    ["Imported", "10", "imported"],
  ];

  return (
    <div className="review-sheet">
      <div className="sheet-handle" />
      <h3>Review Photos</h3>
      {stats.map(([label, value, className]) => (
        <div className={`review-stat ${className}`} key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
      <p>Scan range: Last 12 months</p>
    </div>
  );
}

function DetailFeature() {
  return (
    <section className="feature-band detail-band" aria-labelledby="detail-title">
      <div className="feature-inner">
        <div className="feature-visual">
          <Phone variant="detail" detail="ticket" className="large-phone" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Details</p>
          <h2 id="detail-title">Fix what search should remember</h2>
          <p>
            Rename a document, favorite it, share it, edit search terms, or delete it with confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
      <div className="privacy-inner">
        <LocalFirstVisual />
        <div>
          <p className="eyebrow">Privacy</p>
          <h2 id="privacy-title">Private by design</h2>
          <div className="privacy-list">
            <p>Documents are copied into local app storage.</p>
            <p>Search starts on device.</p>
            <p>No account or cloud library in v1.</p>
            <p>On supported devices, on-device intelligence can improve search terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalFirstVisual() {
  return (
    <AssetImage
      className="device-visual device-visual-asset"
      src={screenshotAssets.localFirst}
      alt="Local-first paper.trail storage visual"
      fallback={<LocalFirstVisualFallback />}
    />
  );
}

function LocalFirstVisualFallback() {
  return (
    <div className="device-visual" aria-hidden="true">
      <div className="device-core">
        <span className="folder-tab" />
        <span className="device-line one" />
        <span className="device-line two" />
        <span className="device-line three" />
      </div>
    </div>
  );
}

function UseCases() {
  return (
    <section className="section use-cases" aria-labelledby="use-cases-title">
      <div className="section-heading">
        <p className="eyebrow">Everyday documents</p>
        <h2 id="use-cases-title">Built for everyday document photos</h2>
      </div>
      <div className="use-case-grid">
        {useCases.map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="waitlist" aria-labelledby="waitlist-title">
      <div className="cta-inner">
        <p className="eyebrow">Join the waitlist</p>
        <h2 id="waitlist-title">Build a searchable paper trail.</h2>
        <p>
          Keep the small important things without turning them into a filing project.
        </p>
        <form className="waitlist-form" aria-label="Join the paper.trail waitlist">
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
            <button type="submit">Join Waitlist</button>
          </div>
        </form>
        <p className="secondary-note">Built for iPhone. Local-first. Image documents only.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links" aria-label="Footer links">
        <a href="#privacy">Privacy</a>
        <a href="mailto:support@papertrail.example">Support</a>
        <a href="mailto:hello@papertrail.example">Contact</a>
      </div>
      <p>
        paper.trail is designed for image-based personal documents. PDF import,
        cloud sync, accounts, and team workflows are not part of v1.
      </p>
    </footer>
  );
}

export default function PaperTrail() {
  useEffect(() => {
    document.title = "paper.trail - Save document photos now. Find them later.";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "paper.trail is a local-first iPhone document organizer for receipts, notes, labels, cards, tickets, and codes.";

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://mayurbeldar.com/paper-trail";
  }, []);

  return (
    <div className="paper-trail-page">
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />
        <LibraryFeature />
        <ImportFeature />
        <DetailFeature />
        <Privacy />
        <UseCases />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
