// // src/mockApi.js

// const mockHabits = [
//   {
//     _id: "68160cf2f24968764498de7b",
//     name: "Exercise",
//     completed: false,
//     userId: "68160ce6f24968764498de74",
//     streak: 0,
//     progressLog: [
//       {
//         date: "2025-05-03",
//         progress: 75,
//         _id: "68161253177cfe3e90a2bdce",
//       },
//     ],
//     createdAt: "2025-05-03T12:32:50.215Z",
//     updatedAt: "2025-05-03T12:55:47.562Z",
//     __v: 1,
//   },
//   {
//     _id: "habit2",
//     name: "Read",
//     completed: false,
//     userId: "user123",
//     streak: 3,
//     progressLog: [
//       {
//         date: "2025-05-02",
//         progress: 100,
//         _id: "log2",
//       },
//     ],
//     createdAt: "2025-05-01T10:00:00.000Z",
//     updatedAt: "2025-05-02T11:00:00.000Z",
//     __v: 1,
//   },
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
//     userId: "mock-user",
//     streak: 0,
//     progressLog: [],
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     __v: 0,
//   };
//   mockHabits.push(newHabit);
//   return new Promise((resolve) => setTimeout(() => resolve(newHabit), 300));
// };

// export const updateHabit = async (id, updatedData) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index !== -1) {
//     mockHabits[index] = { ...mockHabits[index], ...updatedData, updatedAt: new Date().toISOString() };
//   }
//   return new Promise((resolve) => setTimeout(() => resolve(mockHabits[index]), 300));
// };

// export const deleteHabit = async (id) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index !== -1) mockHabits.splice(index, 1);
//   return new Promise((resolve) => setTimeout(() => resolve({ message: "Deleted" }), 300));
// };


// src/mockApi.js

const mockHabits = [
  {
    _id: "habit1",
    name: "Exercise",
    completed: false,
    streak: 3,
    progressLog: [
      { date: "2025-05-01", progress: 50, _id: "log1" },
      { date: "2025-05-02", progress: 60, _id: "log2" },
      { date: "2025-05-03", progress: 75, _id: "log3" },
    ],
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-05-03T12:55:47.562Z",
  },
  {
    _id: "habit2",
    name: "Read Books",
    completed: false,
    streak: 5,
    progressLog: [
      { date: "2025-04-30", progress: 100, _id: "log4" },
      { date: "2025-05-01", progress: 80, _id: "log5" },
      { date: "2025-05-02", progress: 90, _id: "log6" },
      { date: "2025-05-03", progress: 100, _id: "log7" },
    ],
    createdAt: "2025-04-29T09:30:00.000Z",
    updatedAt: "2025-05-03T10:00:00.000Z",
  },
  {
    _id: "habit3",
    name: "Drink Water",
    completed: false,
    streak: 7,
    progressLog: [
      { date: "2025-05-01", progress: 100, _id: "log8" },
      { date: "2025-05-02", progress: 100, _id: "log9" },
      { date: "2025-05-03", progress: 100, _id: "log10" },
    ],
    createdAt: "2025-04-28T06:00:00.000Z",
    updatedAt: "2025-05-03T07:00:00.000Z",
  },
  {
    _id: "habit4",
    name: "Meditate",
    completed: false,
    streak: 2,
    progressLog: [
      { date: "2025-05-02", progress: 30, _id: "log11" },
      { date: "2025-05-03", progress: 50, _id: "log12" },
    ],
    createdAt: "2025-05-02T06:30:00.000Z",
    updatedAt: "2025-05-03T11:00:00.000Z",
  },
  {
    _id: "habit5",
    name: "Write Journal",
    completed: false,
    streak: 1,
    progressLog: [
      { date: "2025-05-03", progress: 100, _id: "log13" },
    ],
    createdAt: "2025-05-03T08:00:00.000Z",
    updatedAt: "2025-05-03T08:10:00.000Z",
  },
];

export const getHabits = async () => {
  return new Promise((resolve) => setTimeout(() => resolve([...mockHabits]), 500));
};

export const getHabitById = async (id) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockHabits.find((h) => h._id === id)), 300)
  );
};

export const createHabit = async (name) => {
  const newHabit = {
    _id: Date.now().toString(),
    name,
    completed: false,
    streak: 0,
    progressLog: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockHabits.push(newHabit);
  return new Promise((resolve) => setTimeout(() => resolve(newHabit), 300));
};

// export const updateHabit = async (id, updatedData) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index !== -1) {
//     mockHabits[index] = {
//       ...mockHabits[index],
//       ...updatedData,
//       updatedAt: new Date().toISOString(),
//     };
//   }
//   return new Promise((resolve) => setTimeout(() => resolve(mockHabits[index]), 300));
// };

// export const updateHabit = async (id, updatedData) => {
//   const index = mockHabits.findIndex((h) => h._id === id);
//   if (index === -1) return null;

//   const habit = mockHabits[index];

//   // Handle progress addition
//   if (updatedData.newProgress) {
//     const newProgressEntry = {
//       _id: Date.now().toString(),
//       date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
//       progress: updatedData.newProgress,
//     };

//     habit.progressLog.push(newProgressEntry);

//     // Optionally update streak if progress is 100%
//     if (newProgressEntry.progress === 100) {
//       habit.streak += 1;
//     } else {
//       habit.streak = 0;
//     }
//   }

//   // Apply other updates
//   const mergedHabit = {
//     ...habit,
//     ...updatedData,
//     updatedAt: new Date().toISOString(),
//   };

//   // Avoid duplicating newProgress in the final object
//   delete mergedHabit.newProgress;

//   mockHabits[index] = mergedHabit;

//   return new Promise((resolve) => setTimeout(() => resolve(mergedHabit), 300));
// };

export const updateHabit = async (id, updatedData) => {
  const index = mockHabits.findIndex((h) => h._id === id);
  if (index === -1) return null;

  const habit = mockHabits[index];

  // Handle new progress update
  if (updatedData.newProgress !== undefined) {
    const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
    const existingEntryIndex = habit.progressLog.findIndex(entry => entry.date === today);

    if (existingEntryIndex !== -1) {
      // Overwrite existing progress for today
      habit.progressLog[existingEntryIndex].progress = updatedData.newProgress;
    } else {
      // Add new progress entry
      habit.progressLog.push({
        _id: Date.now().toString(),
        date: today,
        progress: updatedData.newProgress,
      });
    }

    // Update streak logic — if today's progress is 100
    if (updatedData.newProgress === 100) {
      habit.streak += 1;
    } else {
      habit.streak = 0;
    }
  }

  // Merge other habit updates if any
  const mergedHabit = {
    ...habit,
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };

  delete mergedHabit.newProgress;

  mockHabits[index] = mergedHabit;

  return new Promise((resolve) => setTimeout(() => resolve(mergedHabit), 300));
};


export const deleteHabit = async (id) => {
  const index = mockHabits.findIndex((h) => h._id === id);
  if (index !== -1) mockHabits.splice(index, 1);
  return new Promise((resolve) => setTimeout(() => resolve({ message: "Deleted" }), 300));
};
