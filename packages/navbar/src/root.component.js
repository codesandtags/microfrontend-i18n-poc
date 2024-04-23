import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <Router basename="/">
      <nav class="bg-gray-800 text-white shadow-lg">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <div class="text-lg font-bold">Codesandtags</div>
          <div>
            <ul class="flex space-x-4">
              <li>
                <Link to="/" class="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" class="hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" class="hover:text-gray-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}
