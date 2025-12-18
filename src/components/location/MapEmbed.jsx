import React from "react";

export default function MapEmbed() {
  return (
    <section className="w-full">
      <div className="h-[46vh] w-full overflow-hidden rounded-b-3xl shadow-soft">
        <iframe
          title="Ideologist Coffee Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.906836057449!2d110.41105125!3d-7.038887399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b45ec6b0d13%3A0x32475e4297b2dfd3!2sIdeologist%20Coffee%20And%20Social%20Space!5e0!3m2!1sen!2sid!4v1733745672000!5m2!1sen!2sid"
          className="h-full w-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
