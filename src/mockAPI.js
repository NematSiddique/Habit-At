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
