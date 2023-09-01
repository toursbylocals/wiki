# What a Developer Should do

## First Step to Start a Task

1. Choose a task ticket form `To-Do` column that you are going to work on then assign it to yourself.

2. Move a task ticket that you are working on to `In Progress` column.

3. When you are working on other task ticket or not working, make sure to move the task ticket back to `To-Do` column.

4. Move to `Visual Studio`, and run `git pull origin dev` to have most recent update.

5. Create a new branch, `git branch -b tbl-###`. ### should be replaced with a number showing on the task ticket in `github`.

6. Move to new branch you just created, `git checkout tbl-###`, to work on the task ticket.

7. It is good idea to start with creating a test file with all test cases first.

8. `git add .`

9. `yarn c` then answer the questions (can skip a question if it's not necessary to answer)

10. `git push origin tbl-###` it will create a new branch in `remote` (`Github`) with the ticket number.

11. Create a `Pull requests` with the `(WIP):` commit flag and a very descriptive title.

12. Add and `WHAT` and `HOW` breakdown plan of your initial idea on how to complete the task in the body of the `Pull Request`

13. In your `Pull Request`, click on `Connect Issue` and search for your ticket and connect the `Pull Request`, now you are able visualize your `Pull Request` connected with ticket on `Zenhub Board` (`Zenhub` is a management board integrated with `Github`)

## Track Progress of a Task

- Make sure to always apply TDD when you start working on a new task.

- It's advised to Try to push often and ask for feedbacks to check if the task is going in the right direction.

- Create threads and tag people in a `Pull Request` thread for feedback, also use `Slack`

- Document the outcomes and conclusions.

## Git Strategy - Rebase

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
