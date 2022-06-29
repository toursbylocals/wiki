# Overview

![Image](https://imgs.xkcd.com/comics/git_2x.png)

## What is git?

> Git is an Open Source Distributed Version Control System.

## Why use git?

- It allows us to easily synchronize changes with other developers and machines.
- It gives us greater depth of understanding of why and how code was written.
- It allows us to act boldly during development.

## Git History

- clone a repository

  ```
  git clone <https://github.com/toursbylocals/wiki.git>
  ```

- view the commit history

  ```
  $ git log
  commit 99b7544a736838af0077e9f83c0ae51f0598864c (HEAD -> wiki-2, origin/wiki-2)
  Author: Jenny Jiang <jjiang@toursbylocals.com>
  Date:   Sat Jun 25 00:19:13 2022 -0700
    docs(Version Control): Add more standards and strategies

  commit ce8be2b003f0cba742f01a44c067994bd5be1802
  Author: Jenny Jiang <jjiang@toursbylocals.com>
  Date:   Wed Jun 22 16:57:12 2022 -0700
    docs(Version Control Guide): Add git  standards

  commit 679a09b0d38e025db3a0f64104b7688cd3ba9520
  Author: Rafabc18 <70495348+growebux@users.noreply.github.com>
  Date:   Tue Jun 21 15:41:06 2022 -0700
    feat(OnBoarding): Create a Development Enviroment Guide
  ```

- output the history in one line

  ```
  $ git log --pretty=oneline
  99b7544a736838af0077e9f83c0ae51f0598864c (HEAD -> wiki-2, origin/wiki-2) docs(Version Control): Add more standards and strategies
  ce8be2b003f0cba742f01a44c067994bd5be1802 docs(Version Control Guide): Add git  standards
  679a09b0d38e025db3a0f64104b7688cd3ba9520 feat(OnBoarding): Create a Development Enviroment Guide
  ```

- specify the log output format

  ```
  $ git log --pretty=format:"%h - %an, %ar : %s"
  99b7544 - Jenny Jiang, 2 days ago : docs(Version Control): Add more standards and strategies
  ce8be2b - Jenny Jiang, 5 days ago : docs(Version Control Guide): Add git  standards
  679a09b - Rafabc18, 6 days ago : feat(OnBoarding): Create a Development Enviroment Guide 
  ```

- [more options](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

## Git Conventions

### Configuration standards

- Set your Git username and email. It's recommended to use real name and valid email.

  ```
  git config --global user.name "Jenny Jiang"
  git config --global user.email "xxxx@toursbylocals.com"
  ```
  
### Branch naming standards

- Specify project name:
  - mtj - MyTripJourney
  - tbl - ToursByLocals
  - dstbl - Design System for both MyTripJourney and ToursByLocals
  - wiki - Wiki
- Use hyphen as seperators.
- Follow with the number showing on the task ticket in Zenhub.

  > tbl-15

### Commit message standards

- Specify the type of commit:
  - feat: The new feature you're adding to a particular application
  - fix: A bug fix
  - style: Feature and updates related to styling
  - refactor: Refactoring a specific section of the codebase
  - test: Everything related to testing
  - docs: Everything related to documentation
  - chore: Regular code maintenance.
- Follow with parentheses and specify which module you are currently working on.
- Follow with colon.
- Follow with details about this commit.

  > refactor(Major): Refactor all types and models with new structure

  > feat(post): update post related types

### Version number conventions

- First Number: Tracks major changes - break the API
- Second Number: Tracks minor changes - not break the API
- Third Number: Tracks patches or mere bug fixes
- Fourth Number: Tracks changes less significant than a patch - optional

  > v1.2.3

### Commentizen

- The Conventional Commits specification is a lightweight convention on top of commit messages.
- It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
- Please refer to [full specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).

## Strategies

### Merge strategy

- Merging takes the contents of a source branch and integrates them with a target branch.
- In this process, only the target branch is changed. The source branch history remains the same.

![Merge example](https://cdn-media-1.freecodecamp.org/images/VonhijTBQgjwtRXz31wLzF7iWDnDFk2o8EWi)

### Rebase strategy

- Rebase compresses all the changes into a single “patch.” Then it integrates the patch onto the target branch.
- Unlike merging, rebasing flattens the history because it transfers the completed work from one branch to another.
- In the process, unwanted history is eliminated.

![Rebase example](https://cdn-media-1.freecodecamp.org/images/aEjZMJ6s4rDVqzXveqgLrwkQ0RJEvOTjAIUc)

### Squash strategy

- There will be many commits at the end and it is a good idea to squash the commits to one so the git history are easy to follow.

  - **git rebase -i HEAD~#**. # should be replaced with a number of commits you've done.
  - pick one commit (usually the first one), and squash or s the rest commits.
  - press esc and enter :wq.
  - comment out the rest commit descriptions by putting # in front of the commit descriptions you have to comment out.
  - press esc and :wq to save the changes.
  - **git push origin tbl-###** to push the change

- After passing all tests and squash, the task ticket is now ready to be moved to the Review column for Eddie to review and merge.

## Feature Release

### Pull request

- Once you have created a new branch and you are ready to work on new feature, please always remember to create a pull request and attach it to your task ticket in Zenhub.

  - **git add .** add changes in the working directory to the staging area
  - **yarn c** then answer the questions (can skip a question if it's not necessary to answer)
  - **git push origin tbl-###**
  - find the pull request you just created from Pull requests tab in GitHub
  - click your pull request, and click Connect Issue.
  - search and select your task ticket to connect the pull request and the task ticket.
  - remember to choose dev as your base instead of main.

- In ZenHub, you should see the task ticket is chained to the pull requests. All other members are now able to follow up on the new updates and changes.
- Try to push often and ask for feedback to check if the work is going in the right direction.

### Integration

- We decide to always use rebase to keep our history simple. When there is a new dev update, you might update the dev by pulling the dev and rebase it to your work to reduce conflicts in future.

  - add and commit all the works and move to the dev branch, **git checkout dev**
  - pull the most recent update, **git pull origin dev**
  - move to your working branch, **git checkout tbl-###** or **git checkout -**
  - rebase new dev to your working branch, **git rebase dev**
  - push (force push) your changes, **git push origin tbl-### -f**. (-f is forcing push with the current version; it may be needed when there are too many changes in dev, so try to update dev frequently)
  - When your work is done, you should make sure to pass the final test, **yarn test**.

- You should also see a green check mark in your pull request on GitHub.

## Useful commands

- install yarn

  ```
  npm install --global yarn
  ```

- check installation

  ```
  yarn --version
  ```

- run project

  ```
  yarn dev
  ```

- run testing

  ```
  yarn test
  ```

- switch between branches or restore working tree files

  ```
  git checkout wiki-2
  ```

- create new branch

  ```
  git checkout - b wiki-3
  git branch wiki-3
  ```

- delete existing branch

  ```
  git branch -d wiki-3
  ```

- track changes

  ```
  git status
  ```

- stage changes

  ```
  git add -a 
  git add . 
  ```

- add commit message

  ```
  git commit - m "XXXXX"
  ```

- record changes to the repository

  ```
  git commit
  ```

- upload local repository content to a remote repository

  ```
  git push origin wiki-2
  ```

- fetch from and integrate with another repository or a local branch

  ```
  git pull origin dev
  ```

- track commits

  ```
  git blame README.md
  ```

- create repository tag/versioning

  ```
  git tag v1.0.0
  git push --tags
  git tag -a v2.0.1 => write release notes
  ```

- diagnose bad commit

  ```
  git bisect start
  git bisect good
  got bisect bad 
  ```

![GitExample](https://querix.com/go/lycia/Content/Resources/Images/05_workbench/01_ls/04_how_to/10_repos/git_files/git_00_intro_01_sections.png)

## Changelog

- changelog is a log or record of all notable changes made to a project.
  1. Generate .md file using git log

    ```
    git log --pretty="- %s" > CHANGELOG.md
    ```

  2. Generate .md file using generator package

    ```
    npm install generate-changelog -g
    changelog generate
    ```
