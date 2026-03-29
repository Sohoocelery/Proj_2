// Query 2: Complex Search - Find clubs that are either academic OR have events with capacity > 75
// This uses $or and $elemMatch for complex nested querying

db.clubs.find({
  $or: [
    // Condition 1: Club category is academic
    { category: "academic" },
    
    // Condition 2: Has at least one event with capacity greater than 75
    { 
      events: { 
        $elemMatch: { 
          capacity: { $gt: 75 } 
        } 
      } 
    }
  ]
}, {
  // Projection: only show relevant fields
  name: 1,
  category: 1,
  "events.title": 1,
  "events.capacity": 1,
  _id: 0
})

// Expected Output:
// Returns clubs that match either criteria:
// - Computer Science Club (academic)
// - Robotics Society (academic)
// - Cultural Fusion (has International Food Festival with capacity 200)
// - Environmental Action (service, but has no events > 75)
