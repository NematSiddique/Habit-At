// // import { BrowserRouter } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';
// // import { ThemeProvider } from './context/ThemeContext';
// // // import Sidebar from './components/Sidebar';
// // import { useState, useEffect } from 'react';
// // import { Menu } from 'lucide-react';
// // import AppRoutes from './Routes';
// // import Dashboard from './pages/Dashboard';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //         <ThemeProvider>
// //           {/* <Main /> */}
// //           <Toaster position="top-right" />
// //           <Dashboard/>
// //         </ThemeProvider>
// //     </BrowserRouter>
// //   );
// // }

// // // function Main() {
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [isMobile, setIsMobile] = useState(false);

// // //   useEffect(() => {
// // //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// // //     checkMobile();
// // //     window.addEventListener('resize', checkMobile);
// // //     return () => window.removeEventListener('resize', checkMobile);
// // //   }, []);

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
// // //       <Toaster position="top-right" />
// // //       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} isMobile={isMobile} />
// // //       <div className="flex-grow md:ml-64">
// // //         <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
// // //           <button
// // //             onClick={toggleSidebar}
// // //             className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            
// // //           >
// // //             <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
// // //           </button>
// // //         </header>
// // //         <main className="p-4">
// // //           <AppRoutes /> 
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // export default App;

// import { BrowserRouter, useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// import React, { useState, useEffect, createContext, useContext } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// // import Dashboard from './pages/Dashboard';
// import { Calendar, Clock, Zap, Trash2, Minus, Plus, Bell, BellOff, MessageSquare, PlusCircle, Target, Save, X, Moon, Sun } from 'lucide-react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// // import React,{ useState, useEffect } from 'react';
// // import HabitCard from '../components/HabitCard';
// // import toast from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom';
// // import { useTheme } from '../context/ThemeContext';
// // import { useTheme } from '../App'

// // Create context
// const ThemeContext = createContext();

// // ThemeProvider component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.body.classList.remove('light', 'dark');
//     document.body.classList.add(savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//     document.body.classList.remove('light', 'dark');
//     document.body.classList.add(newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook
// export const useTheme = () => useContext(ThemeContext);

// Chart.register(...registerables);

// const AnimatedBackground = () => {
//   const { theme } = useTheme();
//   return (
//     <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//       {theme === 'light' ? (
//         <>
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </>
//       ) : (
//         <>
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//           <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
//         </>
//       )}
//     </div>
//   );
// };

// const HabitModal = ({ isOpen, onClose, onHabitCreated }) => {
//   const [newHabitName, setNewHabitName] = useState('');
//   const { theme } = useTheme();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!newHabitName.trim()) return;

//     try {
//       // Create the habit with the API
//       const response = await createHabit(newHabitName);
      
//       // Prepare habit object for the parent component
//       // Assuming your API returns the habit data directly or within a data property
//       const newHabit = response.data || response;
      
//       // Create a properly formatted habit object if needed
//       const formattedHabit = {
//         _id: newHabit._id || `habit-${Date.now()}`, // Ensure _id exists since your UI uses it
//         name: newHabitName,
//         created: new Date().toISOString(),
//         streak: 0,
//         completedToday: false,
//         ...newHabit // Preserve any other fields from the API response
//       };
      
//       // Reset form and notify parent
//       setNewHabitName('');
//       toast.success('Habit created successfully');
//       if (onHabitCreated) {
//         onHabitCreated(formattedHabit);
//       }
//       onClose();
//     } catch (error) {
//       toast.error('Failed to create habit');
//       console.error(error);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 bg-black bg-opacity-50"
//             onClick={onClose}
//           />
          
//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className={`relative max-w-lg w-full rounded-lg shadow-lg p-8 m-4 ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-white'
//             }`}
//           >
//             {/* Close button */}
//             <button 
//               onClick={onClose}
//               className={`absolute top-4 right-4 p-1 rounded-full ${
//                 theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <X className="h-5 w-5" />
//             </button>
            
//             <div className="text-center mb-8">
//               <img
//                 src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
//                 alt="Create new habit"
//                 className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/api/placeholder/120/120";
//                 }}
//               />
//               <h1 className={`text-2xl font-bold ${
//                 theme === 'dark' ? 'text-white' : 'text-gray-900'
//               }`}>Create New Habit</h1>
//               <p className={`${
//                 theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
//               }`}>Define your new habit and start tracking your progress</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className={`block text-sm font-medium mb-2 ${
//                   theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
//                 }`}>
//                   Habit Name
//                 </label>
//                 <div className="relative">
//                   <Target className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
//                     theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
//                   }`} />
//                   <input
//                     type="text"
//                     value={newHabitName}
//                     onChange={(e) => setNewHabitName(e.target.value)}
//                     className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
//                       theme === 'dark'
//                         ? 'bg-gray-700 text-white border-gray-600'
//                         : 'bg-white text-black border-gray-300'
//                     }`}
//                     placeholder="e.g., Daily Exercise"
//                     required
//                     autoFocus
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-4 pt-6">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                     theme === 'dark'
//                       ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600'
//                       : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
//                   }`}
//                 >
//                   <X className="h-5 w-5 mr-2" />
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   <Save className="h-5 w-5 mr-2" />
//                   Create Habit
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// const HabitDetailModal = ({ habit: initialHabit, isOpen, onClose, onDelete }) => {
//   const { theme } = useTheme();
//   const [habit, setHabit] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [progressLog, setProgressLog] = useState([]);
//   const [lastProgressUpdate, setLastProgressUpdate] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
  
//   // Reminder states
//   const [reminderEnabled, setReminderEnabled] = useState(false);
//   const [reminderTime, setReminderTime] = useState("08:00");
//   const [reminderMessage, setReminderMessage] = useState("");
//   const [isEditingMessage, setIsEditingMessage] = useState(false);
//   const [showReminderSection, setShowReminderSection] = useState(false);

//   useEffect(() => {
//     const fetchHabitDetails = async () => {
//       if (!initialHabit) return;
      
//       setIsLoading(true);
//       try {
//         const data = await getHabitById(initialHabit._id);
//         setHabit(data);
//         setProgressLog(data.progressLog || []);
        
//         // Get the most recent progress value directly from the progress log
//         const currentProgress = data.progressLog && data.progressLog.length > 0 
//           ? data.progressLog[data.progressLog.length - 1].progress 
//           : 0;
          
//         // Store in state and localStorage
//         setLastProgressUpdate(currentProgress);
//         setSliderValue(currentProgress);
//         localStorage.setItem(`lastProgressUpdate-${data._id}`, JSON.stringify(currentProgress));

//         // Set reminder states
//         if (data.reminder) {
//           setReminderEnabled(data.reminder.enabled || false);
//           setReminderTime(data.reminder.time || "08:00");
//           setReminderMessage(data.reminder.message || "");
//         }
//       } catch (error) {
//         console.error('Error fetching habit details:', error);
//         toast.error('Failed to load habit details');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchHabitDetails();
//   }, [initialHabit]);

//   const handleDelete = async () => {
//     try {
//       await deleteHabit(habit._id);
//       toast.success('Habit deleted successfully');
//       onDelete(habit._id);
//       onClose();
//     } catch (error) {
//       toast.error('Failed to delete habit');
//       console.error(error);
//     }
//   };

//   // Function to update progress when slider is released or a value is directly set
//   const handleProgressUpdate = async (progress) => {
//     try {
//       const updatedHabit = await updateHabit(habit._id, { newProgress: progress });
//       setHabit(updatedHabit);
//       setProgressLog(updatedHabit.progressLog);
      
//       const lastProgress = updatedHabit.progressLog[updatedHabit.progressLog.length - 1].progress;
//       setLastProgressUpdate(lastProgress);
//       setSliderValue(lastProgress);
//       localStorage.setItem(`lastProgressUpdate-${habit._id}`, JSON.stringify(lastProgress));
      
//       toast.success(progress === 100 
//         ? 'Great job! Habit completed for today!' 
//         : 'Progress updated successfully');
//     } catch (error) {
//       toast.error('Failed to update progress');
//       console.error(error);
//     }
//   };

//   // Handle slider value change without immediately updating the progress
//   const handleSliderChange = (e) => {
//     setSliderValue(parseInt(e.target.value));
//   };

//   // Handle slider release - only then update the actual progress
//   const handleSliderRelease = () => {
//     handleProgressUpdate(sliderValue);
//   };

//   // Reminder functions
//   const handleToggleReminder = async () => {
//     try {
//       let updatedHabit;
//       if (reminderEnabled) {
//         updatedHabit = await disableReminder(habit._id);
//         toast.success('Reminder disabled');
//       } else {
//         updatedHabit = await enableReminder(habit._id);
//         toast.success('Reminder enabled');
//       }
      
//       setHabit(updatedHabit);
//       setReminderEnabled(updatedHabit.reminder.enabled);
//     } catch (error) {
//       toast.error('Failed to update reminder status');
//       console.error(error);
//     }
//   };

//   const handleTimeChange = async (e) => {
//     const newTime = e.target.value;
//     setReminderTime(newTime);
    
//     try {
//       const updatedHabit = await updateReminderTime(habit._id, newTime);
//       setHabit(updatedHabit);
//       toast.success('Reminder time updated');
//     } catch (error) {
//       toast.error('Failed to update reminder time');
//       console.error(error);
//     }
//   };

//   const handleMessageUpdate = async () => {
//     try {
//       const updatedHabit = await updateHabit(habit._id, { 
//         reminder: {
//           ...habit.reminder,
//           message: reminderMessage
//         }
//       });
      
//       setHabit(updatedHabit);
//       setIsEditingMessage(false);
//       toast.success('Reminder message updated');
//     } catch (error) {
//       toast.error('Failed to update reminder message');
//       console.error(error);
//     }
//   };

//   // Check if a habit should display a reminder for today
//   const shouldShowReminder = () => {
//     if (!habit || !habit.reminder || !habit.reminder.enabled) return false;
    
//     // Get today's date in YYYY-MM-DD format
//     const today = new Date().toISOString().slice(0, 10);
    
//     // Check if the habit has progress for today
//     const hasProgressForToday = habit.progressLog && 
//       habit.progressLog.some(entry => entry.date === today && entry.progress === 100);
    
//     // Show reminder if not completed today
//     return !hasProgressForToday;
//   };

//   // Get time comparison for reminder
//   const getReminderStatus = () => {
//     if (!habit || !habit.reminder || !habit.reminder.enabled) return null;
    
//     const now = new Date();
//     const [hours, minutes] = habit.reminder.time.split(':').map(Number);
//     const reminderTime = new Date();
//     reminderTime.setHours(hours, minutes, 0, 0);
    
//     const timeDiff = reminderTime - now;
    
//     if (timeDiff > 0) {
//       // Reminder is in the future
//       const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
//       const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
//       if (hoursLeft > 0) {
//         return `Reminder in ${hoursLeft}h ${minutesLeft}m`;
//       } else {
//         return `Reminder in ${minutesLeft}m`;
//       }
//     } else {
//       // Reminder time has passed
//       return "Reminder time has passed";
//     }
//   };

//   if (!isOpen) return null;

//   // Backdrop for modal
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
//       {/* Modal backdrop */}
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
//         onClick={onClose}
//       ></div>
      
//       {/* Modal content */}
//       <div className="relative z-50 w-full max-w-4xl mx-auto p-4 sm:p-6 max-h-screen">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className={`rounded-lg shadow-lg p-2 sm:p-6 md:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} overflow-y-auto max-h-[85vh]`}
//         >
//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
//             </div>
//           ) : habit ? (
//             <>
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
//                 <div className="mb-4 sm:mb-0">
//                   <h1 className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{habit.name}</h1>
//                 </div>
//                 <div className="space-x-2 sm:space-x-4">
//                   <button
//                     onClick={onClose}
//                     className={`p-2 rounded-full transition-colors ${
//                       theme === 'dark'
//                         ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700'
//                         : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
//                     }`}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => setShowDeleteConfirm(true)}
//                     className={`p-2 rounded-full transition-colors ${
//                       theme === 'dark'
//                         ? 'text-gray-300 hover:text-red-400 hover:bg-gray-700'
//                         : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
//                     }`}
//                   >
//                     <Trash2 className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
//                 {[
//                   { 
//                     icon: Calendar, 
//                     title: 'Streak', 
//                     value: `${habit.streak} days` 
//                   },
//                   { 
//                     icon: Clock, 
//                     title: 'Today\'s Progress', 
//                     value: `${lastProgressUpdate}%`,
//                     color: parseInt(lastProgressUpdate) === 100 ? 'text-green-500' : 'text-blue-600'
//                   },
//                   { 
//                     icon: reminderEnabled ? Bell : BellOff, 
//                     title: 'Reminder', 
//                     value: reminderEnabled ? habit.reminder.time : 'Disabled',
//                     color: reminderEnabled ? 'text-yellow-500' : 'text-gray-500',
//                     onClick: () => setShowReminderSection(!showReminderSection)
//                   }
//                 ].map((item, index) => (
//                   <div 
//                     key={index} 
//                     className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} ${item.onClick ? 'cursor-pointer hover:opacity-90' : ''}`}
//                     onClick={item.onClick}
//                   >
//                     <div className="flex items-center mb-2">
//                       <item.icon className={`h-5 w-5 ${item.color || 'text-blue-600'} mr-2`} />
//                       <h3 className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{item.title}</h3>
//                     </div>
//                     <p className={`text-2xl sm:text-3xl font-bold ${item.color || 'text-blue-600'}`}>{item.value}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Reminder notification for today if not completed */}
//               {shouldShowReminder() && (
//                 <div className={`p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 border-l-4 border-yellow-500 ${theme === 'dark' ? 'bg-gray-700' : 'bg-yellow-50'}`}>
//                   <div className="flex">
//                     <div className="flex-shrink-0">
//                       <Bell className={`h-5 w-5 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} />
//                     </div>
//                     <div className="ml-3">
//                       <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'}`}>
//                         Reminder for Today ({habit.reminder.time})
//                       </h3>
//                       <div className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-yellow-700'}`}>
//                         <p>{habit.reminder.message || `Time to work on "${habit.name}"!`}</p>
//                         <p className="mt-1 font-medium">{getReminderStatus()}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Reminder Settings Section */}
//               {showReminderSection && (
//                 <div className={`p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                   <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
//                     Reminder Settings
//                   </h3>
                  
//                   <div className="space-y-4">
//                     {/* Enable/Disable Toggle */}
//                     <div className="flex items-center justify-between">
//                       <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
//                         Enable Reminder
//                       </span>
//                       <button 
//                         onClick={handleToggleReminder}
//                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
//                           reminderEnabled 
//                             ? theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-500' 
//                             : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
//                         }`}
//                       >
//                         <span
//                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                             reminderEnabled ? 'translate-x-6' : 'translate-x-1'
//                           }`}
//                         />
//                       </button>
//                     </div>
                    
//                     {/* Time Picker */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                       <label className={`mb-2 sm:mb-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                         Reminder Time
//                       </label>
//                       <input
//                         type="time"
//                         value={reminderTime}
//                         onChange={handleTimeChange}
//                         disabled={!reminderEnabled}
//                         className={`p-2 rounded-md ${
//                           theme === 'dark' 
//                             ? 'bg-gray-800 text-white border-gray-600' 
//                             : 'bg-white text-gray-900 border-gray-300'
//                         } ${!reminderEnabled && 'opacity-60 cursor-not-allowed'}`}
//                       />
//                     </div>
                    
//                     {/* Reminder Message */}
//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <label className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
//                           Reminder Message
//                         </label>
//                         {!isEditingMessage ? (
//                           <button
//                             onClick={() => setIsEditingMessage(true)}
//                             disabled={!reminderEnabled}
//                             className={`text-sm px-2 py-1 rounded ${
//                               theme === 'dark'
//                                 ? 'bg-gray-600 hover:bg-gray-500 text-gray-200'
//                                 : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
//                             } ${!reminderEnabled && 'opacity-60 cursor-not-allowed'}`}
//                           >
//                             Edit
//                           </button>
//                         ) : (
//                           <button
//                             onClick={handleMessageUpdate}
//                             className={`text-sm px-2 py-1 rounded ${
//                               theme === 'dark'
//                                 ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
//                                 : 'bg-indigo-500 hover:bg-indigo-600 text-white'
//                             }`}
//                           >
//                             Save
//                           </button>
//                         )}
//                       </div>
                      
//                       {isEditingMessage ? (
//                         <textarea
//                           value={reminderMessage}
//                           onChange={(e) => setReminderMessage(e.target.value)}
//                           placeholder="Enter a message to show with your reminder..."
//                           className={`w-full p-2 rounded-md ${
//                             theme === 'dark' 
//                               ? 'bg-gray-800 text-white border-gray-600' 
//                               : 'bg-white text-gray-900 border-gray-300'
//                           }`}
//                           rows={3}
//                         />
//                       ) : (
//                         <div className={`p-3 rounded-md ${
//                           theme === 'dark' 
//                             ? 'bg-gray-800 text-gray-300' 
//                             : 'bg-gray-100 text-gray-700'
//                         }`}>
//                           {reminderMessage ? reminderMessage : (
//                             <span className="text-gray-500 italic">No custom message set</span>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="mb-6 sm:mb-8">
//                 <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Progress Log</h3>
//                 <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`} style={{ width: '100%', height: '300px' }}>
//                   {progressLog.length > 0 ? (
//                     <Line
//                       data={{
//                         labels: progressLog.map((log) => log.date),
//                         datasets: [
//                           {
//                             label: 'Progress',
//                             data: progressLog.map((log) => log.progress),
//                             borderColor: theme === 'dark' ? 'rgb(129, 140, 248)' : 'rgb(79, 70, 229)',
//                             tension: 0.1,
//                           },
//                         ],
//                       }}
//                       options={{
//                         responsive: true,
//                         maintainAspectRatio: false,
//                         plugins: {
//                           legend: {
//                             display: false,
//                           },
//                         },
//                         scales: {
//                           y: {
//                             beginAtZero: true,
//                             max: 100,
//                             ticks: {
//                               color: theme === 'dark' ? '#e5e7eb' : '#374151',
//                             },
//                             grid: {
//                               color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
//                             },
//                           },
//                           x: {
//                             ticks: {
//                               color: theme === 'dark' ? '#e5e7eb' : '#374151',
//                               maxRotation: 45,
//                               minRotation: 45,
//                             },
//                             grid: {
//                               color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
//                             },
//                           },
//                         },
//                       }}
//                     />
//                   ) : (
//                     <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>No progress data available. Mark the progress below to see the progress data.</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Quick Update</h3>
                
//                 <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Current progress: {lastProgressUpdate}%
//                     </span>
//                     <span className={`text-sm font-medium ${parseInt(lastProgressUpdate) >= 75 ? theme === 'dark' ? 'text-blue-400' : 'text-blue-600' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                       {parseInt(lastProgressUpdate) >= 75 && parseInt(lastProgressUpdate) < 100  ? "Almost there!" : 
//                        parseInt(lastProgressUpdate) === 100 ? "Completed!" : "Keep going!"}
//                     </span>
//                   </div>
                  
//                   <div className="relative mb-4">
//                     <input 
//                       type="range" 
//                       className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
//                         theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
//                       }`}
//                       min="0" 
//                       max="100" 
//                       step="1"
//                       value={sliderValue}
//                       onChange={handleSliderChange}
//                       onMouseUp={handleSliderRelease}
//                       onTouchEnd={handleSliderRelease}
//                       style={{
//                         background: `linear-gradient(to right, 
//                           ${theme === 'dark' ? '#818cf8' : '#4f46e5'} 0%, 
//                           ${theme === 'dark' ? '#818cf8' : '#4f46e5'} ${sliderValue}%, 
//                           ${theme === 'dark' ? '#374151' : '#d1d5db'} ${sliderValue}%, 
//                           ${theme === 'dark' ? '#374151' : '#d1d5db'} 100%)`
//                       }}
//                     />
                    
//                     <div className="flex justify-between mt-2">
//                       <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>0%</span>
//                       <span className={`text-xs font-medium ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
//                         {sliderValue}%
//                       </span>
//                       <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>100%</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center mb-4">
//                     <div className={`flex rounded-md overflow-hidden border ${
//                       theme === 'dark' 
//                         ? 'bg-gray-800 border-gray-600 text-gray-200' 
//                         : 'bg-white border-gray-300 text-gray-700'
//                     }`}>
//                       <button
//                         onClick={() => {
//                           const newValue = Math.max(0, sliderValue - 1);
//                           setSliderValue(newValue);
//                         }}
//                         className={`flex items-center justify-center px-2 py-1 ${
//                           theme === 'dark'
//                             ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-r border-gray-600'
//                             : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700 border-r border-gray-300'
//                         }`}
//                       >
//                         <Minus size={16} />
//                       </button>
                      
//                       <input
//                         type="number"
//                         min="0"
//                         max="100"
//                         value={sliderValue}
//                         onChange={(e) => {
//                           const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
//                           setSliderValue(value);
//                         }}
//                         onBlur={handleSliderRelease}
//                         className={`w-12 text-center py-1 border-none focus:ring-0 focus:outline-none ${
//                           theme === 'dark' 
//                             ? 'bg-gray-800 text-gray-200' 
//                             : 'bg-white text-gray-700'
//                         }`}
//                       />
                      
//                       <button
//                         onClick={() => {
//                           const newValue = Math.min(100, sliderValue + 1);
//                           setSliderValue(newValue);
//                         }}
//                         className={`flex items-center justify-center px-2 py-1 ${
//                           theme === 'dark'
//                             ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l border-gray-600'
//                             : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700 border-l border-gray-300'
//                         }`}
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
                    
//                     <span className={`ml-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>%</span>
//                     <button
//                       onClick={() => {
//                         handleProgressUpdate(sliderValue);
//                       }}
//                       className={`ml-4 px-3 py-1 rounded text-xs font-medium ${
//                         theme === 'dark'
//                           ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
//                           : 'bg-indigo-500 hover:bg-indigo-600 text-white'
//                       } transition-colors`}
//                     >
//                       Update
//                     </button>
//                   </div>
                  
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => {
//                         setSliderValue(100);
//                         handleProgressUpdate(100);
//                       }}
//                       className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
//                         theme === 'dark'
//                           ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
//                           : 'bg-indigo-500 hover:bg-indigo-600 text-white'
//                       } transition-colors`}
//                     >
//                       Mark as Complete
//                     </button>
//                     {parseInt(lastProgressUpdate) === 100 && (
//                       <button
//                         onClick={() => {
//                           setSliderValue(0);
//                           handleProgressUpdate(0);
//                         }}
//                         className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
//                           theme === 'dark'
//                             ? 'bg-gray-600 hover:bg-gray-700 text-white'
//                             : 'bg-gray-400 hover:bg-gray-500 text-white'
//                         } transition-colors`}
//                       >
//                         Reset Progress
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="text-center p-4">
//               <p className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Habit not found</p>
//             </div>
//           )}
//         </motion.div>
//       </div>
//       {/* Delete confirmation dialog */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[70] p-4">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className={`rounded-lg p-6 sm:p-8 max-w-sm w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
//           >
//             <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Delete Habit</h2>
//             <p className={`mb-6 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//               Are you sure you want to delete this habit? This action cannot be undone.
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => setShowDeleteConfirm(false)}
//                 className={`px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
//                   theme === 'dark'
//                     ? 'text-gray-200 bg-gray-700 hover:bg-gray-600'
//                     : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
//                 }`}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors text-sm sm:text-base"
//               >
//                 Delete
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// const HabitCard = ({ habit, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const getProgressColor = (progress) => {
//     if (progress === 100) return 'bg-green-500 dark:bg-green-600';
//     if (progress >= 75) return 'bg-blue-500 dark:bg-blue-600';
//     if (progress >= 50) return 'bg-yellow-500 dark:bg-yellow-600';
//     if (progress >= 25) return 'bg-orange-500 dark:bg-orange-600';
//     return 'bg-red-500 dark:bg-red-600';
//   };

//   const latestProgress =
//     habit.progressLog.length > 0
//       ? habit.progressLog[habit.progressLog.length - 1].progress
//       : 0;

//   const formattedUpdatedAt = new Date(habit.updatedAt).toLocaleString();

//   return (
//     <motion.div
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       initial={{ scale: 1 }}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.1 }}
//       className={`cursor-pointer w-full relative max-w-md rounded-md ring-1 ring-blue-500 dark:ring-blue-500 transition-all duration-300 ease-in-out hover:shadow-lg dark:text-gray-100 hover:shadow-blue-500 shadow-white`}
//     >
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white">
//             {habit.name}
//           </h3>
//         </div>
//         <div className="mb-4">
//           <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
//             <div
//               className={`h-2 rounded-full ${getProgressColor(latestProgress)}`}
//               style={{ width: `${latestProgress}%` }}
//             ></div>
//           </div>
//         </div>

//         <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
//           <div className="flex items-center">
//             <Calendar className="h-4 w-4 mr-1" />
//             <span>{new Date(habit.createdAt).toLocaleDateString()}</span>
//           </div>
//           <div className="flex items-center">
//             <Clock className="h-4 w-4 mr-1" />
//             <span>{formattedUpdatedAt}</span>
//           </div>
//         </div>
//       </div>

//       <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
//         <div className="w-full flex items-center justify-between">
//           <motion.span
//             className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
//             animate={{ scale: isHovered ? 1.05 : 1 }}
//             transition={{ duration: 0.1 }}
//           >
//             <Zap className="h-4 w-4 mr-1" />
//             Streak: {habit.streak}
//           </motion.span>
//           {latestProgress === 100 && (
//             <motion.span
//               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white dark:bg-green-600"
//               animate={{ scale: isHovered ? 1.05 : 1 }}
//               transition={{ duration: 0.1 }}
//             >
//               Completed!
//             </motion.span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// const getCurrentTimeString = () => {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   return `${hours}:${minutes}`;
// };

// const mockHabits = [
//   {
//     _id: "habit1",
//     name: "Exercise",
//     completed: false,
//     streak: 0,
//     progressLog: [
//       { date: "2025-05-01", progress: 50, _id: "log1" },
//       { date: "2025-05-02", progress: 60, _id: "log2" },
//       { date: "2025-05-03", progress: 75, _id: "log3" },
//     ],
//     createdAt: "2025-05-01T08:00:00.000Z",
//     updatedAt: "2025-05-03T12:55:47.562Z",
//     reminder: {
//       enabled: true,
//       time: "08:00",
//       message: "",
//     },
//   },
//   {
//     _id: "habit2",
//     name: "Read Books",
//     completed: false,
//     streak: 2,
//     progressLog: [
//       { date: "2025-04-30", progress: 100, _id: "log4" },
//       { date: "2025-05-01", progress: 80, _id: "log5" },
//       { date: "2025-05-02", progress: 90, _id: "log6" },
//       { date: "2025-05-03", progress: 100, _id: "log7" },
//     ],
//     createdAt: "2025-04-29T09:30:00.000Z",
//     updatedAt: "2025-05-03T10:00:00.000Z",
//     reminder: {
//       enabled: true,
//       time: "09:30",
//       message: "",
//     },
//   },
//   {
//     _id: "habit3",
//     name: "Drink Water",
//     completed: false,
//     streak: 3,
//     reminder: {
//       enabled: true,
//       time: "09:00",
//       message: "Stay hydrated throughout the day!",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 100, _id: "log8" },
//       { date: "2025-05-02", progress: 100, _id: "log9" },
//       { date: "2025-05-03", progress: 100, _id: "log10" },
//     ],
//     createdAt: "2025-04-28T06:00:00.000Z",
//     updatedAt: "2025-05-03T07:00:00.000Z",
//   },
//   {
//     _id: "habit4",
//     name: "Meditate",
//     completed: false,
//     streak: 0,
//     reminder: {
//       enabled: true,
//       time: "06:30",
//       message: "Take a moment to breathe and reflect.",
//     },
//     progressLog: [
//       { date: "2025-05-02", progress: 30, _id: "log11" },
//       { date: "2025-05-03", progress: 50, _id: "log12" },
//     ],
//     createdAt: "2025-05-02T06:30:00.000Z",
//     updatedAt: "2025-05-03T11:00:00.000Z",
//   },
//   {
//     _id: "habit5",
//     name: "Write Journal",
//     completed: false,
//     streak: 1,
//     reminder: {
//       enabled: true,
//       time: "22:00",
//       message: "Reflect on your day in your journal.",
//     },
//     progressLog: [{ date: "2025-05-03", progress: 100, _id: "log13" }],
//     createdAt: "2025-05-03T08:00:00.000Z",
//     updatedAt: "2025-05-03T08:10:00.000Z",
//   },
//   {
//     _id: "habit6",
//     name: "Learn Spanish",
//     completed: false,
//     streak: 0,
//     reminder: {
//       enabled: true,
//       time: "19:00",
//       message: "Time for your Spanish practice!",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 20, _id: "log14" },
//       { date: "2025-05-02", progress: 40, _id: "log15" },
//       { date: "2025-05-03", progress: 60, _id: "log16" },
//     ],
//     createdAt: "2025-04-30T10:00:00.000Z",
//     updatedAt: "2025-05-03T12:00:00.000Z",
//   },
//   {
//     _id: "habit7",
//     name: "Write Code",
//     completed: false,
//     streak: 0,
//     reminder: {
//       enabled: true,
//       time: "17:00",
//       message: "Keep coding and stay sharp!",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 50, _id: "log17" },
//       { date: "2025-05-02", progress: 70, _id: "log18" },
//     ],
//     createdAt: "2025-05-01T05:30:00.000Z",
//     updatedAt: "2025-05-03T11:30:00.000Z",
//   },
//   {
//     _id: "habit8",
//     name: "Cook Dinner",
//     completed: false,
//     streak: 2,
//     reminder: {
//       enabled: true,
//       time: "18:00",
//       message: "Get cooking a healthy dinner!",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 100, _id: "log19" },
//       { date: "2025-05-02", progress: 80, _id: "log20" },
//       { date: "2025-05-03", progress: 100, _id: "log21" },
//     ],
//     createdAt: "2025-04-27T08:45:00.000Z",
//     updatedAt: "2025-05-03T09:00:00.000Z",
//   },
//   {
//     _id: "habit9",
//     name: "Sleep Early",
//     completed: false,
//     streak: 0,
//     reminder: {
//       enabled: true,
//       time: "22:30",
//       message: "Start winding down for the night.",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 60, _id: "log22" },
//       { date: "2025-05-02", progress: 70, _id: "log23" },
//       { date: "2025-05-03", progress: 80, _id: "log24" },
//     ],
//     createdAt: "2025-04-25T07:00:00.000Z",
//     updatedAt: "2025-05-03T08:30:00.000Z",
//   },
//   {
//     _id: "habit10",
//     name: "Photography",
//     completed: false,
//     streak: 0,
//     reminder: {
//       enabled: true,
//       time: "16:00",
//       message: "Capture something beautiful today!",
//     },
//     progressLog: [
//       { date: "2025-05-01", progress: 30, _id: "log25" },
//       { date: "2025-05-02", progress: 50, _id: "log26" },
//     ],
//     createdAt: "2025-05-01T12:00:00.000Z",
//     updatedAt: "2025-05-02T15:00:00.000Z",
//   },
//   // Add other existing habits here, keeping their structure consistent
// ];

// export const getHabits = async () => {
//   return new Promise((resolve) => setTimeout(() => resolve([...mockHabits]), 500));
// };

// export const getHabitById = async (id) => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(mockHabits.find((h) => h._id === id)), 300)
//   );
// };

// export const createHabit = async (name) => {
//   const newHabit = {
//     _id: Date.now().toString(),
//     name,
//     completed: false,
//     streak: 0,
//     progressLog: [],
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     reminder: {
//       enabled: false,
//       time: getCurrentTimeString(),
//       message: "",
//     },
//   };
//   mockHabits.push(newHabit);
//   return new Promise((resolve) => setTimeout(() => resolve(newHabit), 300));
// };

// export const updateHabit = async (id, updatedData) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index === -1) return null;

//   const habit = mockHabits[index];

//   if (updatedData.newProgress !== undefined) {
//     const today = new Date().toISOString().slice(0, 10);
//     const existingEntryIndex = habit.progressLog.findIndex(entry => entry.date === today);

//     if (existingEntryIndex !== -1) {
//       habit.progressLog[existingEntryIndex].progress = updatedData.newProgress;
//     } else {
//       habit.progressLog.push({
//         _id: Date.now().toString(),
//         date: today,
//         progress: updatedData.newProgress,
//       });
//     }
//   }

//   habit.streak = habit.progressLog.filter(entry => entry.progress === 100).length;

//   const mergedHabit = {
//     ...habit,
//     ...updatedData,
//     updatedAt: new Date().toISOString(),
//   };

//   delete mergedHabit.newProgress;

//   mockHabits[index] = mergedHabit;

//   return new Promise((resolve) => setTimeout(() => resolve(mergedHabit), 300));
// };

// export const deleteHabit = async (id) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index !== -1) mockHabits.splice(index, 1);
//   return new Promise((resolve) => setTimeout(() => resolve({ message: "Deleted" }), 300));
// };

// // 🔔 Reminder Functions

// export const enableReminder = async (id) => {
//   const habit = mockHabits.find(h => h._id === id);
//   if (!habit) return null;

//   habit.reminder = {
//     ...habit.reminder,
//     enabled: true,
//   };
//   habit.updatedAt = new Date().toISOString();

//   return new Promise((resolve) => setTimeout(() => resolve(habit), 300));
// };

// export const disableReminder = async (id) => {
//   const habit = mockHabits.find(h => h._id === id);
//   if (!habit) return null;

//   habit.reminder = {
//     ...habit.reminder,
//     enabled: false,
//   };
//   habit.updatedAt = new Date().toISOString();

//   return new Promise((resolve) => setTimeout(() => resolve(habit), 300));
// };

// export const updateReminderTime = async (id, newTime) => {
//   const habit = mockHabits.find(h => h._id === id);
//   if (!habit || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(newTime)) return null;

//   habit.reminder = {
//     ...habit.reminder,
//     time: newTime,
//   };
//   habit.updatedAt = new Date().toISOString();

//   return new Promise((resolve) => setTimeout(() => resolve(habit), 300));
// };


// function Dashboard() {
//   const [habits, setHabits] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedHabit, setSelectedHabit] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAddHabitModalOpen, setIsAddHabitModalOpen] = useState(false);
//   const [reminders, setReminders] = useState([]); // Keep your reminders state
//   const navigate = useNavigate();
//   const { theme,toggleTheme } = useTheme();

//   useEffect(() => {
//     loadHabits();
//   }, []);
  
//   const loadHabits = async () => {
//     setIsLoading(true);
//     try {
//       const data = await getHabits();
//       setHabits(data);
//     } catch (error) {
//       toast.error('Failed to load habits');
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   const handleHabitClick = (habit) => {
//     setSelectedHabit(habit);
//     setIsModalOpen(true);
//   };
  
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedHabit(null);
//   };
  
//   const handleDeleteHabit = (habitId) => {
//     setHabits(habits.filter(habit => habit._id !== habitId));
//   };

//   const handleHabitCreated = (newHabit) => {
//     // Make sure the newHabit has all required fields expected by HabitCard
//     const habitWithDefaults = {
//       _id: newHabit._id || `habit-${Date.now()}`,
//       streak: newHabit.streak || 0,
//       completedToday: newHabit.completedToday || false,
//       ...newHabit
//     };
    
//     setHabits([...habits, habitWithDefaults]);
//     // Toast is already shown in the modal component
//   };

//   const handleReminderChange = (id, field, value) => {
//     setReminders((prevReminders) =>
//       prevReminders.map((reminder) =>
//         reminder.id === id ? { ...reminder, [field]: value } : reminder
//       )
//     );
//   };

//   const toggleReminder = (id) => {
//     setReminders((prevReminders) =>
//       prevReminders.map((reminder) =>
//         reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder
//       )
//     );
//   };

//   const markAsCompleted = (id) => {
//     setReminders((prevReminders) =>
//       prevReminders.map((reminder) =>
//         reminder.id === id ? { ...reminder, completed: true } : reminder
//       )
//     );
//   };

//   return (
//     <div className={`min-h-screen relative overflow-hidden ${
//       theme === 'dark' 
//         ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' 
//         : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'
//     }`}>
//       <AnimatedBackground />
  
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//       <motion.div
//   initial={{ opacity: 0, y: -50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="py-12"
// >
//   <div className="w-full flex flex-col items-start px-4 gap-4">
//     {/* Heading and buttons wrapper */}
//     <div className="w-full flex flex-wrap items-center justify-between gap-4">
//       {/* Heading */}
//       <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
//         Habits Tracker
//       </h1>

//       {/* Action buttons */}
//       <div className="flex items-center gap-3">
//         {/* Add Habit button with icon only */}
//         <button
//           onClick={() => setIsAddHabitModalOpen(true)}
//           className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
//           aria-label="Add Habit"
//         >
//           <PlusCircle className="w-5 h-5" />
//         </button>

//         {/* Theme toggle button */}
//         <button
//           onClick={toggleTheme}
//           className={`p-2 rounded-full transition-colors duration-200 ${
//             theme === 'dark'
//               ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300'
//               : 'bg-indigo-200 hover:bg-indigo-300 text-gray-800'
//           }`}
//           aria-label="Toggle Theme"
//         >
//           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//         </button>
//       </div>
//     </div>

//     {/* Subtitle paragraph – visible from sm screens up and left-aligned */}
//     <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 hidden sm:block text-left">
//       Track your daily progress and build better habits
//     </p>
//   </div>
// </motion.div>



//         <AnimatePresence>
//           {isLoading ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="flex justify-center items-center h-64"
//             >
//               <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
//             >
//               {habits.length > 0 ? habits.map((habit) => (
//                 <motion.div
//                   key={habit._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={() => handleHabitClick(habit)}
//                   className="cursor-pointer"
//                 >
//                   <HabitCard habit={habit} />
//                 </motion.div>
//               )) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   onClick={() => setIsAddHabitModalOpen(true)}
//                   className="col-span-full text-center cursor-pointer text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg p-8 backdrop-filter backdrop-blur-lg"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                   </svg>
//                   <p className="text-xl">No habits created yet. Start building better habits today!</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
      
//       {/* Habit details modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <HabitDetailModal 
//             habit={selectedHabit} 
//             isOpen={isModalOpen} 
//             onClose={handleCloseModal} 
//             onDelete={handleDeleteHabit}
//           />
//         )}
//       </AnimatePresence>

//       {/* Add habit modal */}
//       <HabitModal 
//         isOpen={isAddHabitModalOpen}
//         onClose={() => setIsAddHabitModalOpen(false)}
//         onHabitCreated={handleHabitCreated}
//       />
//     </div>
//   );
// }

// // Main App component
// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <Toaster position="top-right" />
//         <Dashboard />
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
