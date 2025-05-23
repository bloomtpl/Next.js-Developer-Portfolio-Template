import React from 'react';

export default function Contact() {
  return (
    <section className="space-y-8">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black text-gray-800 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="mx-auto block bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded hover:opacity-80 transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
