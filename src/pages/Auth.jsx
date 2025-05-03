// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useTheme } from '../context/ThemeContext';

// export default function Auth() {
//   const navigate = useNavigate();
//   const { theme } = useTheme();

//   // Automatically redirect to the dashboard
//   navigate('/dashboard');

//   return (
//     <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden ${
//       theme === 'dark'
//         ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
//         : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'
//     }`}>
//       <motion.div
//         className="flex justify-center"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className={`p-2 rounded-full shadow-lg ${
//           theme === 'dark' ? 'bg-gray-800' : 'bg-white'
//         }`}>
//           <h1 className="text-indigo-600 text-3xl font-bold">Redirecting...</h1>
//         </div>
//       </motion.div>
//     </div>
//   );
// }