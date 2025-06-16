import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getShortUrl } from '../api/short_url.api';
import { queryClient } from '../main';
import { toast } from 'react-toastify';

const Url_form = () => {
  const [url, setUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Get user from redux store
  const user = useSelector((state) => state.user.user);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newShortUrl = await getShortUrl(url, user && customUrl ? customUrl : undefined);
      if (newShortUrl && !/^https?:\/\//i.test(newShortUrl)) {
        if (newShortUrl.startsWith("undefined")) {
          newShortUrl = newShortUrl.substring("undefined".length);
        }
        newShortUrl = window.location.origin + '/' + newShortUrl;
      }
      setShortUrl(newShortUrl);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      toast.success("URL shortened successfully!");
    } catch (err) {
      console.error("Failed to shorten URL:", err);
      toast.error("Failed to shorten URL. Please try again.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">🔗 URL Shortener</h2>
      <div className="max-w-md mx-auto mt-8 p-4">
        <form onSubmit={HandleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {/* Show custom URL input only if user is signed in */}
          {user && (
            <input
              type="text"
              placeholder="Custom short URL (optional, e.g. my-link)"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Shorten URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 p-4 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-blue-500 underline"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className={`ml-4 px-3 py-1 text-sm rounded-lg transition-colors duration-300 ${
                copied ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Url_form;