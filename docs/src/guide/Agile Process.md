
# Getting Started

The Agile Process guide is a collection of standard steps to provide a clear and simple way of how the team initiates discussions, collaborates, tracks and delivers tasks.

## What is it?

Agile is an umbrella term for several methods and practices. It creates a continuous improvement mindset that values flexibility, adaptability, collaboration, and efficiency. It is non-linear, focuses on flexibility, collaboration between team members, and delivering consistent value to stakeholders. Teams work in brief, incremental “sprints” frequently regrouping to review the work and make changes.

<!-- 
  Agile vs Waterfall methodologies /img -->


### Scrum Methodology

Scrum is an [agile development methodology](https://www.digite.com/agile/agile-methodology/) used in the development of Software based on iterative and incremental processes. We use the Scrum framework to guide our workflow. Having a structure to follow means we can easily share, track and improve our deliverables.

#### Scrum Team 

Developers, BPAs, CTO and Lead Full Stack Developer.

#### The Three Scrum Artifacts

Scrum uses three artifacts to help manage work:

#### Product Backlog

The product backlog is an ordered list of everything that is known to be needed in a product based on the product goal. It is constantly evolving and is never complete.

#### Sprint Backlog

The sprint backlog is a list of everything that the team commits to achieve in a given sprint. Once created, no one can add to the sprint backlog except the development team.

#### Potentially Releasable Product Increment

At the end of every sprint, the team delivers a product increment that is potentially releasable, meaning that it meets their agreed-upon definition of done. (An example might be fully tested and fully approved.)

#### Sprints

Scrum divides work into smaller work parcels known as sprints, a short period of time wherein our development team works to complete specific tasks, milestones, or deliverables. Our sprints typically last 2 weeks.

#### Ceremonies

Ceremonies are recurring events that occur inside each sprint. They help us adapt to change and succeed. With work planned in smaller portions and over shorter timeframes we can quickly shift direction and course-correct when needed.

1. Sprint Planning  

#### Goal

Adding detail, estimates, and order to items in the Product Backlog. Define what is going to be done in the Sprint and how it is going to be done. Everyone should understand the sprint goals and how to achieve them.

#### Timing

At the beginning of each sprint

#### What Happens in Sprint Planning?

- The Product Owner brings the product backlog to discuss with the Development Team and facilitates the meeting.
- The product owner describes the product goal and also answers questions from the development team about execution and acceptance criteria/criteria of satisfaction.
- Together, the Scrum Team does effort or story point estimations by poker planning. The product backlog must contain all the details necessary for estimation. The Product Owner should be able to clarify any doubts regarding the product backlog.

#### Scrum Poker: A Scrum Estimating Tool

Scrum poker, AKA planning poker, is a consensus-based tool for estimating and planning effort/man-hour in software. Using Scrum poker we can estimate man-hour more accurately by voting, and save time on coordinating. Team members choose cards with a number to represent the number of man-hours they estimate for the task. By placing cards face-down on the table, it minimizes the influence on others by speaking that out.

- Product owner explains stories/tasks.
- Each developer chooses a card and shows them at the same time.
- If the estimates are close, take the mean. End of the game.
- If not, the ones who chose the biggest and the smallest number should explain why.
- The team re-estimates and sets final estimate upon team agreement

#### Point System

A typical deck has cards showing the Fibonacci sequence ( (1, 2, 3, 5, 8, 13, 21, 34...). The reason for using the Fibonacci sequence is to reflect the uncertainty in estimating larger items. A high estimate usually (8 or above) means that the story is not well understood in detail or should be broken down into multiple smaller stories. Smaller stories can be estimated in greater detail.

#### Effort estimates eg:

1. Time estimate: 1 day and a half (6 to 10 hs)
1. Time estimate: Up to 2 days
1. Time estimate: Up to 3 days
1. Time estimate: Too big to be a story and requires to be broken down into smaller pieces

After some team negotiation and discussion, we have a clear decision on the work that the Development Team can complete during the sprint, our sprint goal, as well as the effort (total sum of points) this will take.  

#### #### 2. Daily Stand-Up

#### Goal

Inspect progress toward the sprint goal.

#### Timing

Daily, no longer than 15 minutes.

### What Happens in Daily Stand-up meetings?

Each member describes how their own work is going, asks for help when needed, and considers whether they are still on track to meet the sprint goal. This is not a status meeting but is instead an opportunity for the development team to inspect and adapt the product and process on a daily basis.

We answer 3 specific questions:

1. What did you do since yesterday?
1. What will you do today?
1. Anything blocking your progress?

#### 3. Backlog Grooming

#### Goal

Keep the backlog up-to-date and ensure that backlog items are prepared for upcoming sprints.

#### Timing

A day prior to the end of our sprint.

### What Happens in a Backlog Grooming?

Backlog grooming is a regular session where backlog items are discussed, reviewed, and prioritized by the team.

This may include:

- Removing outdated [user stories](https://www.productboard.com/glossary/user-story/) and tasks.
- Adding new user stories that reflect newly discovered user insights.
- Breaking down broad user stories into smaller items.
- Reordering user stories based on their priority.
- Explaining and clearly defining user stories and tasks to avoid uncertainty
- Assigning or re-assigning story points and estimates.
- Identifying roadblocks and minimizing risks related to backlog items.

#### 4. Sprint Review

#### Goal

Reaching alignment between the scrum team and product stakeholders.

#### Timing

At the end of the sprint before the sprint retrospective. Ideally one hour per week of the sprint. Everyone will have a 7 min maximum presentation about their completed tasks.

### What Happens in a Sprint Review?

Sprint reviews focus on the product being developed, specifically on the potentially shippable product increment created during the sprint. During a sprint review, the scrum team invites stakeholders to discuss what was completed during the sprint. They adapt the product backlog as needed based on this feedback. The product owner has the option to release any of the completed functionality.

#### 5. Sprint Retrospective

#### Goal

Continuously improve team performance from sprint to sprint.

#### Timing

At the end of the sprint, after Sprint Review.

### What Happens in a Sprint Retrospective?

 Sprint retrospectives focus on the process (how we do things). During a sprint retrospective, the scrum team discusses what went right and areas for improvement in the sprint. They make tangible plans for how to improve their own process, tools and relationships

#### Zenhub Board

#### New Issues

Issues to be reviewed and estimated before being added to the Product Backlog.

#### Epics

Large user story which is too big to fit into a sprint. This high-level story is usually split into smaller ones, each of which can be completed within a sprint

#### Icebox

Low priority Issues that do not need to be addressed in the near future.

#### Backlog 

Upcoming Issues that have been reviewed, estimated, and prioritized top-to-bottom.

#### To-Do

Issues ready to be worked on in the sprint, prioritized top-to-bottom. (Sprint Backlog) Issues being worked on are assigned to a team member and moved to In progress.

#### In Progress 

Issues currently being worked on by the team. The team member working on a certain issue is assigned on each ticket.

#### Review 

Issues open to the team for review and testing. Code complete, pending feedback.

#### QA/Test

Issues tested and ready to be deployed to production

#### Ready for Production

Whenever a ticket has been done but is sitting to be deployed

#### Completed tasks

Tasks that have been completed according to ACS, reviewed and approved as completed.
