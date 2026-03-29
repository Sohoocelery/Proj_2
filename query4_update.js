// Query 4: Update - Disable/Enable an event by flipping the is_active boolean
// This updates the "Python Workshop" event (event_id: 2) to toggle its active status

// First, let's check current status
db.clubs.find(
  { "events.event_id": 2 },
  { "name": 1, "events.$": 1 }
)

// Update query - Set is_active to true for event_id 2 (currently false)
db.clubs.updateOne(
  { 
    "events.event_id": 2 
  },
  { 
    $set: { 
      "events.$.is_active": true 
    } 
  }
)

// Verify the update
db.clubs.find(
  { "events.event_id": 2 },
  { "name": 1, "events.$": 1 }
)

// Alternative: Toggle the boolean (flip from true to false or vice versa)
// You can also use this approach:
/*
db.clubs.updateOne(
  { "events.event_id": 2 },
  [
    {
      $set: {
        events: {
          $map: {
            input: "$events",
            as: "event",
            in: {
              $mergeObjects: [
                "$$event",
                {
                  is_active: {
                    $cond: [
                      { $eq: ["$$event.event_id", 2] },
                      { $not: "$$event.is_active" },
                      "$$event.is_active"
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    }
  ]
)
*/

// Expected Output:
// Python Workshop event's is_active field changes from false to true
