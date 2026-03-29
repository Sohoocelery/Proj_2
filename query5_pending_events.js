// Query 5: Find Pending Events - Find all events that are pending approval
// This searches for events where submission.status is "pending"

db.clubs.aggregate([
  // Unwind events array
  { $unwind: "$events" },
  
  // Match only events with pending submissions
  { $match: { "events.submission.status": "pending" } },
  
  // Project relevant fields
  {
    $project: {
      _id: 0,
      club_name: "$name",
      event_title: "$events.title",
      event_type: "$events.type",
      event_date: "$events.datetime",
      location: "$events.location",
      submitted_by: "$events.submission.submitted_by.name",
      submitted_date: "$events.submission.submitted_date",
      status: "$events.submission.status"
    }
  },
  
  // Sort by submitted date (oldest first)
  { $sort: { submitted_date: 1 } }
])

// Alternative simpler version using find:
/*
db.clubs.find(
  { "events.submission.status": "pending" },
  {
    "name": 1,
    "events.$": 1,
    "_id": 0
  }
)
*/

// Expected Output:
// Returns Python Workshop which has a pending submission status
