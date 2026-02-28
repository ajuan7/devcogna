# Schema Decisions (v1)

## Why `Attempt` is the Core Table

`Attempt` is the telemetry + intelligence layer for DevCogna.

Every training interaction produces an `Attempt` record capturing:

- which question was shown (`questionId`)
- what the user selected (`patternSelectedId`)
- what the correct pattern actually was (`correctPatternId`)
- correctness (`isCorrect`)
- recognition latency (`responseTimeMs`)
- time series tracking (`createdAt`)

This enables measurement-first analytics:
- accuracy per pattern
- response time per pattern
- weakest patterns
- improvement trends over time

## Denormalization Choice: `correctPatternId` on Attempt

Although `correctPatternId` can be derived from `Question.patternId`, it is stored directly on `Attempt` because:

- analytics queries become simpler and faster
- avoids joins for common dashboard aggregations
- preserves correctness even if question metadata changes later

This is a deliberate, light denormalization optimized for reporting.

## Indexing Plan

Primary analytics queries are scoped by user and time:

1) Attempts over time for a user  
- index: `(userId, createdAt)`

2) Weakest patterns (accuracy by pattern)  
- index: `(userId, correctPatternId, createdAt)`

3) Correct vs incorrect trends  
- index: `(userId, isCorrect, createdAt)`

Flashcards:
- recent flashcards for a user  
- index: `(userId, createdAt)`
- by pattern  
- index: `(userId, patternId, createdAt)`

Questions:
- filter questions by pattern and difficulty  
- index: `(patternId)`, `(difficulty)`