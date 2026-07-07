import React, { useEffect } from "react";
import "./PaperTrail.css";
import libraryScreenshot from "../assets/paper-trail/screenshots/library.png";
import addScreenshot from "../assets/paper-trail/screenshots/add.png";
import reviewPhotosScreenshot from "../assets/paper-trail/screenshots/review-photos.png";
import documentDetailScreenshot from "../assets/paper-trail/screenshots/document-detail.png";

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
};

const categories = [
  "Receipts",
  "Warranty Cards",
  "Travel & Tickets",
  "Contact Cards",
  "QR & Barcodes",
  "Labels & Packages",
  "Notes & Forms",
  "Recently Saved",
];

const steps = [
  {
    number: "01",
    title: "Bring in the photos worth keeping",
    copy:
      "Scan Photos, pick a few images, or capture a new one so receipts, labels, notes, and cards have a home.",
    className: "add-mini",
    labels: ["Camera", "Photos sweep", "Pick favorites"],
  },
  {
    number: "02",
    title: "Keep only what matters",
    copy:
      "Review every match before it is saved, so blurry shots and random pictures stay out.",
    className: "review-mini",
    labels: ["Worth saving", "Skip", "Try later"],
  },
  {
    number: "03",
    title: "Make Photos lighter",
    copy:
      "After copies are saved, choose which originals to remove from Photos and cut down on iCloud storage clutter.",
    className: "local-mini",
    labels: ["Saved copy", "Review originals", "Space back"],
  },
  {
    number: "04",
    title: "Find it by the clue you remember",
    copy:
      "Search a store name, date, label, trip, or note when the moment suddenly matters.",
    className: "find-mini",
    labels: ["warranty", "Apr 21", "serial label"],
  },
];

const useCases = [
  ["Return receipts", "Bring up proof before the return window closes."],
  ["Warranty proof", "Find the purchase photo when something breaks."],
  ["Serial-number labels", "Search model numbers without keeping the box."],
  ["Shipping labels", "Save tracking details without clogging Photos."],
  ["Contact cards", "Find names from a card without digging through camera roll."],
  ["Handwritten notes", "Save the idea without keeping the paper."],
  ["Travel bookings", "Pull up confirmation details with the rest of your trip."],
  ["Event tickets", "Keep the ticket image ready for the door."],
  ["QR codes and barcodes", "Find useful codes without scrolling through old photos."],
  ["Bills and forms", "Keep a private image copy ready for later."],
];

function Header() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="paper.trail home">
        <span className="brand-mark" aria-hidden="true" />
        paper.trail
      </a>
      <nav className="nav-links" aria-label="Section links">
        <a href="#how-it-works">How it helps</a>
        <a href="#library">Organize Photos</a>
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
      <div className="search-field">Search store, date, label, note</div>
      <h4>Recently Saved</h4>
      <div className="recent-strip">
        <div className="doc-thumb receipt"><span>Return receipt</span></div>
        <div className="doc-thumb note"><span>Handwritten note</span></div>
        <div className="doc-thumb ticket"><span>Event ticket</span></div>
      </div>
      <h4>Categories</h4>
      <div className="category-grid full">
        <div>Receipts</div>
        <div>Warranties</div>
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
        <span>Camera, Photos, or quick sweep</span>
      </div>
      <div className="action-list spacious">
        <div><span />Camera</div>
        <div><span />Sweep Photos</div>
        <div><span />Pick from Photos</div>
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
          <span>spring trip</span>
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
            <span>Works offline</span>
            <span>No sign-in</span>
            <span>Private on iPhone</span>
          </div>
          <h1 id="hero-title">paper.trail</h1>
          <p className="hero-kicker">Stop losing important photos in Photos.</p>
          <p className="hero-body">
            Pull receipts, labels, notes, cards, tickets, and codes out of camera-roll chaos.
            Find them fast, then remove the originals from Photos after you review.
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
        <p className="eyebrow">How it helps</p>
        <h2 id="steps-title">A calmer way to keep proof without keeping clutter.</h2>
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
          <p className="eyebrow">Organized Photos</p>
          <h2 id="library-title">Give document photos their own place</h2>
          <p>
            Receipts, warranty cards, labels, notes, and tickets stop disappearing between
            everyday pictures. paper.trail keeps the important little images together so you
            can search them later.
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
          <p className="eyebrow">Space Back</p>
          <h2 id="import-title">Clean up Photos without losing proof</h2>
          <p>
            Save the document shots you want, review the originals, then remove them from Photos
            after you confirm.
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
    ["Worth saving", "18", "ready"],
    ["Skipped", "207", ""],
    ["Already saved", "9", ""],
    ["Needs review", "4", ""],
    ["Saved", "10", "imported"],
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
      <p>Recent photo sweep</p>
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
          <p className="eyebrow">Findability</p>
          <h2 id="detail-title">Search the detail you remember</h2>
          <p>
            Look for a store name, date, label, trip, or note instead of scrolling through months
            of pictures.
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
        <ScreenshotCollage />
        <div>
          <p className="eyebrow">Privacy First</p>
          <h2 id="privacy-title">Useful without internet</h2>
          <div className="privacy-list">
            <p>Your documents stay on your iPhone.</p>
            <p>Search works offline.</p>
            <p>No sign-in, no new cloud storage to feed.</p>
            <p>Originals in Photos are removed only after you review and confirm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotCollage() {
  return (
    <div className="privacy-collage" role="img" aria-label="paper.trail app screenshots">
      <div className="collage-grid" aria-hidden="true" />
      <div className="collage-card collage-card-library">
        <img src={screenshotAssets.library} alt="" />
      </div>
      <div className="collage-card collage-card-detail">
        <img src={screenshotAssets.documentDetail} alt="" />
      </div>
      <div className="collage-card collage-card-add">
        <img src={screenshotAssets.add} alt="" />
      </div>
      <div className="collage-sheet">
        <img src={screenshotAssets.reviewPhotos} alt="" />
      </div>
    </div>
  );
}

function UseCases() {
  return (
    <section className="section use-cases" aria-labelledby="use-cases-title">
      <div className="section-heading">
        <p className="eyebrow">Everyday documents</p>
        <h2 id="use-cases-title">For the small photos that become important later</h2>
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
        <h2 id="waitlist-title">Find the thing before it becomes a problem.</h2>
        <p>
          Join the waitlist for a calmer way to keep proof, codes, notes, and labels without
          paying for clutter you no longer need.
        </p>
        <form className="waitlist-form" aria-label="Join the paper.trail waitlist">
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
            <button type="submit">Join Waitlist</button>
          </div>
        </form>
        <p className="secondary-note">Built for iPhone. Works offline. No sign-in.</p>
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
        paper.trail keeps everyday document photos searchable on your iPhone, helps you remove
        confirmed originals from Photos, and works without internet.
      </p>
    </footer>
  );
}

export default function PaperTrail() {
  useEffect(() => {
    document.title = "paper.trail - Find important document photos fast";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "paper.trail helps you find important document photos, clean up Photos after review, free up iCloud storage space, and keep everything private on your iPhone.";

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
