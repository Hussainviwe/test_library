import React, { useState } from 'react';

const BookWiseDashboard = () => {
  const [showBookForm, setShowBookForm] = useState(false);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Reclamation: A Novel",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      image: "/api/placeholder/60/80"
    },
    {
      id: 2,
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      image: "/api/placeholder/60/80"
    },
    {
      id: 3,
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      image: "/api/placeholder/60/80"
    }
  ]);
  
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    totalNumber: "",
    primaryColor: "#000000",
    summary: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleCreateBook = () => {
    setShowBookForm(true);
  };

  const handleGoBack = () => {
    setShowBookForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new book logic would go here
    const bookToAdd = {
      id: books.length + 1,
      title: newBook.title,
      author: newBook.author,
      genre: newBook.genre,
      dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      image: "/api/placeholder/60/80"
    };
    
    setBooks([...books, bookToAdd]);
    setNewBook({
      title: "",
      author: "",
      genre: "",
      totalNumber: "",
      primaryColor: "#000000",
      summary: ""
    });
    setShowBookForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-2">
              <span>B</span>
            </div>
            <span className="text-xl font-semibold text-blue-700">BookWise</span>
          </div>
        </div>
        
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Home
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              All Users
            </li>
            <li className="px-4 py-2 bg-blue-700 text-white flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              All Books
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
              Borrow Requests
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Account Requests
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-64 border-t border-gray-200 p-4">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-medium">Adrian Hajdin</p>
              <p className="text-sm text-gray-500">adrian@jsmastery.pro</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        {showBookForm ? (
          <div className="h-full w-screenflex flex-col p-3 dark:bg-slate-700 gap-4 w-full rounded-md shadow-md">
            <div className="p-6">
              <div>
                <h1 className="text-xl font-semibold">Welcome, Adrian</h1>
                <p className="text-gray-500">Monitor all of your projects and tasks here</p>
              </div>
              
              <div className="mt-6">
                <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-gray-800">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Go back
                </button>
              </div>
              
              <div className="mt-4">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Book Title</label>
                    <input
                      type="text"
                      name="title"
                      value={newBook.title}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      placeholder="Enter the book title"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Author</label>
                    <input
                      type="text"
                      name="author"
                      value={newBook.author}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      placeholder="Enter the author name"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Genre</label>
                    <input
                      type="text"
                      name="genre"
                      value={newBook.genre}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      placeholder="Enter the genre of the book"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Total number of books</label>
                    <input
                      type="number"
                      name="totalNumber"
                      value={newBook.totalNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      placeholder="Enter the total number of books"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Book Image</label>
                    <div className="border border-gray-300 rounded p-3 flex items-center justify-center h-16">
                      <button type="button" className="text-gray-500 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Upload an image
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Book Primary Color</label>
                    <div className="flex items-center border border-gray-300 rounded p-3">
                      <div className="w-6 h-6 bg-black rounded mr-2"></div>
                      <input
                        type="text"
                        name="primaryColor"
                        value={newBook.primaryColor}
                        onChange={handleInputChange}
                        className="flex-1"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Book Video</label>
                    <div className="border border-gray-300 rounded p-3 flex items-center justify-center h-16">
                      <button type="button" className="text-gray-500 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        Upload a video
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Book Summary</label>
                    <textarea
                      name="summary"
                      value={newBook.summary}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded h-32"
                      placeholder="Write a brief summary of the book"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700">
                      Update Book
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-xl font-semibold">Welcome, Adrian</h1>
                <p className="text-gray-500">Monitor all of your projects and tasks here</p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users, books by title, author, or genre."
                  className="w-80 pr-8 pl-10 py-2 border border-gray-300 rounded-lg"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">All Books</h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600">
                  <span className="mr-1">A-Z</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <button
                  onClick={handleCreateBook}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Create a New Book
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Book Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {books.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img src={book.image} alt={book.title} className="h-10 w-10" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{book.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{book.author}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{book.genre}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{book.dateCreated}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookWiseDashboard;