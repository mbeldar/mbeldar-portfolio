import React, { useEffect } from 'react';
import '../assets/css/Pastel.css';
import './Legal.css';

const AutoLogsLegal: React.FC = () => {
  useEffect(() => {
    document.title = 'AutoLogs — Terms and Conditions';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Terms and Conditions for AutoLogs, the vehicle maintenance tracker for iPhone.';
  }, []);

  return (
    <div className="legal-root">
      <div className="legal-container">
        <h1>Terms and Conditions for AutoLogs</h1>
        <p className="legal-note">Last updated: June 2026</p>

        <p className="legal-lead">
          These Terms and Conditions ("Terms") govern your use of AutoLogs (the "App") and the
          associated web pages operated by Mayur Beldar ("we", "us", or "our"). By downloading,
          installing, or using AutoLogs you agree to be bound by these Terms. If you do not agree,
          do not use the App.
        </p>

        <h2>1. Use of the App</h2>
        <p>
          AutoLogs is a personal vehicle maintenance tracker for iPhone. You may use the App solely
          for your own personal, non-commercial purposes. You agree not to reverse-engineer,
          decompile, disassemble, or otherwise attempt to derive the source code of the App.
        </p>

        <h2>2. No Professional Advice</h2>
        <p>
          Information provided by AutoLogs — including maintenance schedules, mileage intervals,
          service reminders, and any pre-populated data — is for general informational and
          convenience purposes only. It does not constitute professional mechanical, automotive, or
          safety advice. Always consult a qualified mechanic or automotive technician for any
          vehicle-specific concerns.
        </p>

        <h2>3. Accuracy of Information</h2>
        <p>
          We strive to provide accurate default maintenance intervals and vehicle data. However, we
          do not warrant that any information within the App is complete, current, or error-free.
          Maintenance needs vary by vehicle make, model, year, driving conditions, and manufacturer
          guidelines. You are responsible for verifying all maintenance decisions with your
          vehicle's owner manual and a qualified professional.
        </p>

        <h2>4. Your Data</h2>
        <p>
          AutoLogs stores all vehicle records, service logs, and mileage data locally on your
          device. We do not collect, transmit, or have access to your personal data or vehicle
          records. You are solely responsible for backing up your data. We are not liable for any
          data loss resulting from device failure, software updates, or accidental deletion.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content included in the App — including but not limited to text, graphics, logos,
          icons, and software — is the property of Mayur Beldar or its licensors and is protected
          by applicable intellectual property laws. You may not reproduce, distribute, or create
          derivative works from any content in the App without express written permission.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from your use
          of the App or reliance on any information provided by it, including but not limited to
          vehicle damage, personal injury, missed maintenance, or property loss, even if we have
          been advised of the possibility of such damages.
        </p>

        <h2>7. Warranties</h2>
        <p>
          THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS
          OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2>8. Third-Party Services</h2>
        <p>
          The App is distributed through the Apple App Store. Your use of the App Store is
          governed by Apple's Terms of Service. We are not responsible for Apple's practices,
          policies, or availability of the App Store.
        </p>

        <h2>9. Changes to the App or Terms</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue the App at any time without
          prior notice. We may also update these Terms from time to time. Continued use of the App
          after any changes constitutes your acceptance of the revised Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California, United States, without
          regard to conflict of law principles. Any disputes arising under these Terms shall be
          subject to the exclusive jurisdiction of the courts located in California.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions about these Terms, you can reach us at the contact information
          listed on this website.
        </p>

        <p className="legal-note">
          These Terms apply solely to AutoLogs. Other apps and services offered on this site have
          their own terms.
        </p>
      </div>
    </div>
  );
};

export default AutoLogsLegal;
