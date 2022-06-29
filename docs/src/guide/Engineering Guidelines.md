# Overview

The Engineering guidelines are a collection of principles to provide a clear and simple way to start as a new team member.

## History

Notes about how the current codebase evolved.

## Major principles

### DRY principle

> Don't repeat yourself

Main purposes:

- Reducing repetition of software patterns.
- Replacing it with abstractions.
- Using data normalization to avoid redundancy.

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

[More Practice](https://devinduct.com/blogpost/57/software-design-principles-the-dry-don-t-repeat-yourself-principle)

### KISS principle

> Keep it simple, stupid

Key points:

- Simplicity should be a key goal in design.
- Unnecessary complexity should be avoided.

> Most systems work best if they are kept simple rather than made complicated.

[More Practice](https://people.apache.org/~fhanik/kiss.html)

### Reusability

> Use existing assets in some form within the software product development process, including code, software components, test suites, designs and documentation.

Main purposes:
  
- Increase reliability: components already tested
- Reduce process risk: less uncertainty in development costs
- Effective use of specialists: reuse of components instead of people
- Standards compliance
- Accelerated development

[More Practice](https://eng.libretexts.org/Courses/Delta_College/C_-_Data_Structures/01%3A_OOP_Concepts/1.07%3A_OOP_Inheritance)

### Pair programming

> An agile software development technique in which two programmers work together at one workstation.

Key roles:

- The driver/pilot: writes code
- The navigator/observer: reviews each line of code as it is typed in and plans the action

Main purposes:

- Knowledge sharing
- Better code
- Less procrastination
- Faster onboarding
- Better team culture

> Increase code development time but reduce code defects.

### Algorithm analysis

#### Space complexity

> Analyse the total amount of memory space used by an algorithm/program including the space of input values for execution.

Key points:

- Space Complexity = Auxiliary space + Space use by input values
- The best algorithm/program should have the lease space-complexity.
- The lesser the space used, the faster it executes.

[Examples](https://www.codingninjas.com/codestudio/library/space-complexity)

#### Time complexity (Algo)

> Represent the number of times a statement is executed.

Key points:

- [Big O notation](https://towardsdatascience.com/essential-programming-time-complexity-a95bb2608cac)
- Best case vs. average case vs. worst case
- The better the time complexity of an algorithm is, the faster the algorithm will carry out the work in practice.

[Examples](https://www.codingninjas.com/codestudio/library/time-complexity)

## Patterns to follow

- We can create `inline code snippets` with the shortcut `cmd/ctrl + e`.

## Code samples

Add code blocks for common snippets. Type `/code` and press `enter`. Choose the language you're using from the dropdown at the bottom right corner. Hover to copy with one click.

```jsx
var a = 1;
while (a <= 10) {
  document.write(a + "<br />");
  a++;
}
```
