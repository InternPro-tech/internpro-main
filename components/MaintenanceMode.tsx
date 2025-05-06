"use client";

export default function MaintenanceMode() {
  return (
    <div className="maintenance-container text-center p-10">
      <h1 className="text-4xl font-bold mb-4">
        We are getting ready with a fresh look!
      </h1>
      <p className="text-lg mb-6">
        Our website is currently undergoing UI makeover. We are working hard to
        bring you a better experience.
      </p>
      <p className="text-lg mb-6">
        That doesn't mean you can't reach us! You can still contact us or visit
        our help center for assistance.
        <br />
        We appreciate your patience and understanding during this time.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://workshop.internpro.tech/ai-agents"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-800 text-white rounded shadow-md hover:bg-blue-900 hover:shadow-lg transition-all"
        >
          AI Agents Masterclass
        </a>
        <a
          href="mailto:contactus@internpro.tech"
          className="px-4 py-2 bg-gray-500 text-black rounded shadow-md hover:bg-gray-600 hover:shadow-lg transition-all"
        >
          Email us
        </a>
        <a
          href="https://wa.me/+917378906594?text=Hi%2C%20I%20would%20like%20to%20know%20about%20InternPro."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 px-4 py-2 rounded hover:border-green-600"
        >
          <img src="/wa-logo.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
          Chat with us
        </a>
      </div>
    </div>
  );
}
