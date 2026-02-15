# Clean Code & Object Calisthenics

Jeff Bay coined "Object Calisthenics" in The ThoughtWorks Anthology as exercises for better OO programming.

## The 9 Rules

### 1. One Level of Indentation Per Method
Extract nested code into well-named methods.
- Improves: Single Responsibility, naming, reusability
- Eliminates: Arrow code

### 2. Don't Use ELSE
The ELSE keyword adds complexity and non-linear flow.

**Alternatives:**
- Default values
- Early return
- Extract code
- Polymorphism
- State/Strategy patterns

### 3. Wrap Primitive Types
Encapsulate primitives in domain objects.
- `string email` → `Email email`
- Enables type hinting and validation
- Attracts related behavior

### 4. One Dot Per Line (Law of Demeter)
> Only talk to your friends.

Bad: `object.getProperty().getSubProperty().doSomething()`

You're exposing too much implementation.

### 5. Don't Abbreviate
If you're abbreviating, the method may be doing too much.
- Avoids confusion
- Prevents code duplication
- Enforces SRP

### 6. Keep Classes Small
- 15-20 lines per method
- 50 lines per class
- 10 classes per package

If it's specialized in one thing, it will be small.

### 7. Max 2 Instance Variables Per Class
More than 2 suggests SRP violation.

18 constructor parameters? Group them into objects or redesign.

### 8. First Class Collections
Wrap collections like you wrap primitives.
- `List<Order>` → `OrderCollection`
- Collection behavior has a home
- Easy to refactor

### 9. No Getters and Setters
> Tell, Don't Ask.

Let the class do its job. Don't extract data to make decisions elsewhere.

---

## Using These Rules

These are exercises—apply strictly during practice (code katas). In production, use judgment and consider trade-offs.

The goal is building habits that lead to:
- Readable code
- Reusable code
- Testable code
- Maintainable code

---

## Related Concepts

- [[Bijection Principle]] — Why IFs are a smell
- [[SOLID Principles]] — The principles these rules support
- [[⚠️ Clean Architecture]] — System-level cleanliness

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
