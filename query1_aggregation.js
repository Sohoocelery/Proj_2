// Query 1: Aggregation - Count total RSVPs per club and sort by popularity
// This uses the aggregation framework to unwind events and RSVPs, then group by club

db.clubs.aggregate([
  // Unwind the events array so each event becomes a separate document
  { $unwind: "$events" },
  
  // Unwind the rsvps array within each event
  { $unwind: "$events.rsvps" },
  
  // Group by club and count total RSVPs
  {
    $group: {
      _id: "$name",
      club_id: { $first: "$club_id" },
      total_rsvps: { $sum: 1 },
      total_events: { $addToSet: "$events.event_id" }
    }
  },
  
  // Add a field for total unique events
  {
    $project: {
      _id: 0,
      club_name: "$_id",
      club_id: 1,
      total_rsvps: 1,
      total_events: { $size: "$total_events" },
      avg_rsvps_per_event: { 
        $divide: ["$total_rsvps", { $size: "$total_events" }] 
      }
    }
  },
  
  // Sort by total RSVPs in descending order
  { $sort: { total_rsvps: -1 } }
])

// Expected Output:
// Shows which clubs have the most event engagement based on RSVP counts
