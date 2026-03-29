// Query 3: Count Events - Count how many events a specific student (Alice Johnson, student_id: 1) has RSVPed to
// This counts documents where the student appears in any event's RSVP list

db.clubs.aggregate([
  // Unwind events array
  { $unwind: "$events" },
  
  // Unwind rsvps array within events
  { $unwind: "$events.rsvps" },
  
  // Match where student_id is 1 (Alice Johnson)
  { $match: { "events.rsvps.student.student_id": 1 } },
  
  // Count the matching documents
  {
    $group: {
      _id: "$events.rsvps.student.name",
      student_id: { $first: "$events.rsvps.student.student_id" },
      student_email: { $first: "$events.rsvps.student.email" },
      total_events_rsvped: { $sum: 1 },
      events: { $push: "$events.title" }
    }
  },
  
  // Clean up output
  {
    $project: {
      _id: 0,
      student_name: "$_id",
      student_id: 1,
      student_email: 1,
      total_events_rsvped: 1,
      events: 1
    }
  }
])

// Expected Output:
// Shows Alice Johnson has RSVPed to 1 event (Hackathon 2025)
