# IDontBelong

A campus events calendar that helps students discover what's happening around campus. IDontBelong displays upcoming events in an easy-to-browse format, so you can stay connected with campus activities and find things to do.

## What It Does

- Displays campus events pulled from a database
- Shows event details including dates, times, and locations
- Helps students find activities and stay informed about campus happenings
- Provides a simple, user-friendly interface for browsing events


# Git Commands

## Branch Commands

### Create a new branch
`git checkout -b <new-branch-name>` (this creates a new branch and switches to it)

### Check current branch
`git branch`

### Switch branch 
`git checkout <branch-name>`

## Add, Stage, and Push Changes
When you are ready to add your changes to github, run `git branch` to make sure you're not on main. Then, run the following commands one at a time: 
- `git add .`
- `git commit -m "<commit-message-here>"`
### Then
### If this is your first commit on your branch, run:
`git push --set-upstream origin <branch-name>`
### Otherwise, just run:
`git push`

### If you did everything correctly you can then open GitHub, go to the "pull requests" tab. There should then be an option to open a pull request.