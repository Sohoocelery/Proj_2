# Database Setup Instructions

## Quick Start

### Option 1: MongoDB Compass (GUI)
1. Open MongoDB Compass and connect to `localhost:27017`
2. Create database: `college_event_planning`
3. Create collection: `clubs`
4. Click "ADD DATA" → "Import JSON or CSV file"
5. Select `data/college_event_planning_clubs.json`
6. Click "Import"

### Option 2: Command Line
```bash
mongoimport --db college_event_planning --collection clubs --file data/college_event_planning_clubs.json --jsonArray
```

## Verify
```bash
mongosh college_event_planning
db.clubs.countDocuments()  # Should return 4
```

Done!
