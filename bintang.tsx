import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0); // state untuk menyimpan rating dari user
  const [message, setMessage] = useState<string>('');
  const [ratings, setRatings] = useState<number[]>([]); // state untuk menyimpan semua rating

  // Menghitung rata-rata rating
  const averageRating = ratings.length > 0 
    ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1)
    : '0.0';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() && comment.trim() && rating > 0) {
      // Tambahkan rating baru ke dalam array ratings
      setRatings([...ratings, rating]);
      
      // Tampilkan pesan konfirmasi
      setMessage('Terima kasih atas feedback dan rating kamu!');
      
      // Reset form fields
      setName('');
      setComment('');
      setRating(0); // Reset rating
      
      // Di sini, kamu bisa menambahkan logika untuk mengirim data ke server
    } else {
      setMessage('Mohon isi semua bidang dan pilih rating.');
    }
  };

  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-gray-700 font-bold mb-4">Contact Form with Rating</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left font-semibold text-gray-700" htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-left font-semibold text-gray-700" htmlFor="comment">Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-left font-semibold text-gray-700">Rating:</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-sm text-gray-600">Rating yang dipilih: {rating} bintang</p>}
        </div>
        
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition">
          Submit
        </button>
        
        {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
      </form>

      {/* Display average rating */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-700">Average Rating</h3>
        <p className="text-3xl text-yellow-500 font-semibold">{averageRating} ★</p>
      </div>
    </section>
  );
};

export default ContactForm;
