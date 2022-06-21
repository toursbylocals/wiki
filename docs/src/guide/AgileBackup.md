# Overview

Agile teams build `rapid feedback`, continuous adaptation and `QA best practices` into our iterations. We adopt practices such as continuous deployment and continuous integration using technology that automates steps to speed up the release and use of products.

# Tasks

## Creating

Follow the steps to create a task.

- Any task ticket should be created in `github`.

- Click `New Issue` to create a new task ticket.

- Type a ticket `title`.

- In the issue description box, tasks for the issue should be listed using `add a task list`.

- Apply `Labels` to the issue, such as backend, DB, etc.

- Once the task ticket is created, it will be in the `New Issues` column.

- Whenever there is any new task you think it is important, don't hesitate to create a task ticket and share with the team.

## Measuring

Follow the steps to measure a task.

- All task tickets' status are shown in `github`.

- Every 2 weeks, there is a meeting, `Sprint Planning`, to plan the next 2 weeks works.

- Ask and discuss about each task tickets.

- When all the task tickets are ready and finalized, every team members will estimate the level of complexity. When everyone is done estimating, discuss and decide the level of complexity which is the most relevant to the task tickets.

- Move the finalized task tickets to `To-Do` column.

## Developing

- Choose a task ticket form `To-Do` column that you are going to work on then assign it to yourself.

- Move a task ticket that you are working on to `In Progress` column.

- When you are working on other task ticket or not working, make sure to move the task ticket back to `To-Do` column.

- Move to `Visual Studio`, and run `git pull origin dev` to have most recent update.

- Create a new branch, `git branch -b tbl-###`. ### should be replaced with a number showing on the task ticket in `github`.

- Move to new branch you just created, `git checkout tbl-###`, to work on the task ticket.

- It is good idea to start with creating a test file with all test cases first.

**Once you have created a test file, its good idea to create `pull request` and attach it to your task ticket in `github`.**

1. `git add .`

2. `yarn c` then answer the questions (can skip a question if it's not necessary to answer)
3. `git push origin tbl-###`

- You should be able to find the pull request you just created from `Pull requests` tap from GitHub
- Click your pull request, and click `Connect Issue`. Search and select your task ticket to connect the pull request and the task ticket.

- In `github`, you should see the task ticket is chained to pull request.

- All other members now able to follow up the new updates and changes.

- Try to push often and ask for feedbacks to check if the work is going to right direction.

**When there is a new dev update, you might want to update the dev by pulling the dev and rebase it to your work to reduce conflicts in future.**

1. `add` and commit all the works and move to dev branch, `git checkout dev`

2. `pull` the most recent update, `git pull origin dev`

3. `move` to your working branch, `git checkout tbl-###` or `git checkout -`

4. `rebase` new dev to your working branch, `git rebase dev`

5. `push` (force push) your changes, `git push origin tbl-### -f`. (`-f` is forcing push with the current version; it may be need when there is too many changes in dev, so try to update dev frequently)

6. When your work is done, you should make sure to pass the final test, `yarn test`. You should also see a `green check mark` in your pull request in `GitHub`.

**There will be many commits at the end and it is good idea to squash the commits to one so the logs are easy to follow.**

1. `git rebase -i HEAD~#`. # should be replaced with a `number` of commits you've done.

2. `Pick` one commit (usually the first one), and `squash` or `s` the rest commits.

3. press `esc` and enter `:wq`.

4. Then comment out the rest commit description by putting `#` in front of commit descriptions you have to comment out.

5. press `esc` and `:wq` to save the changes.

6. `git push origin tbl-###` to push the change,

7. After passing all tests and squash, the task ticket is now ready to be moved to `Review` column for Eddie to review and merge.
