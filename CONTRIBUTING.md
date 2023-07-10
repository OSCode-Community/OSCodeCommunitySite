# Contributing guidelines

> :information*source: Before contributing, please make sure you have read the guidelines below. <br>
> If you're new to \_git* and/or _GitHub_, we suggest you go through [the GitHub Guides](https://guides.github.com/introduction/flow/).
> <br>

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

> **An automated process has been implemented to ensure timely management of Issues on this platform. Issues that have been open for a duration exceeding 30 days will be automatically closed, so please plan accordingly.**

## How to Contribute 🤔

### Step 1: Fork the Repository

Click on the "Fork" button.

By forking the repository, you will have your own version of the repository under your GitHub username.

Once you have forked your repository, go to your profile inside the repository section you will find your forked repository.

### Step 2: Clone the Forked Repository

Once you locate your repository you need to clone it to your local machine.

Click on the "Code" button located on the repository's page.

Copy the link provided in the dropdown menu.

On your local machine, open Git Bash.

In the terminal, run this command:

```bash
  git clone <paste-the-link-here>
```

Make sure to remove <paste-the-link-here> and replace it with the actual link you copied earlier.

Which looks something like:

```bash
  git clone https://github.com/yourUsername/OSCodeCommunitySite
.git
```

The yourUsername is nothing but your GitHub username.

Congratulations! You have successfully cloned the repository to your local machine. You can now make changes, add new features, or fix issues in the codebase.

### Step 3: Create a New Branch

After making the necessary changes, it's recommended to create a new branch for your changes. This helps keep your modifications separate from the main branch, making it easier to manage and review your contributions.

Use the following command to create a new branch:

```bash
git checkout -b my-branch-name
```

Replace my-branch-name with a name of your choice for your branch.

### git checkout -b branch-name

The git checkout -b branch-name command in Git creates a new branch with the specified branch-name and switches to it.

**checkout branch-name** : switches to the branch branch-name.

**-b** : this creates the branch if it not exists already of name branch-name.

### Step 4: Make Your Changes

Make the necessary changes or additions to the codebase.
Once you have added changes in your local, its time to push them, for that run this command to bring the modification to the staging area.

### git add .

This command is used to stage all the changes in the current directory and it's subdirectories for the next commit. It adds all modified and new files to the staging area, allowing you to include them in the next commit.

**Note:** The . represents the current directory, so git add . includes all files and directories within the current working directory. This means if you are anywhere outside from the directory then the changes would not be staged.
So make sure you are in correct directory.

To change directory run this command:

```bash
  cd <path>
```

replace <path> with your working directory.

and then run this command:

```bash
  git add .
```

### Step 5: Commit Your Changes

Commit your changes with a meaningful commit message using the following command:

```bash
  git commit -m "Enter Your message related to what work you did"
```

Once you have committed your changes, it's time to push them to your forked repository on GitHub.

### Step 6: Push Your Changes

Use the following command to push your changes:

```bash
git push origin branch-name
```

Replace branch-name with the name of the branch you created earlier.

### Step 7: Make a Pull Request

After pushing your changes, open your forked repository on GitHub in your web browser.

Go to pull request section in your forked repository (not the main repository)

Click on "New Pull Request".
Then this will appear.

Provide a clear and informative title and description for your pull request. Explain the changes you have made and why they should be incorporated into the original repository.

Review your pull request to ensure everything is correct, and then click on the "Create pull request" button to submit it.

### Congrats!

Your pull request will now be visible to the maintainers of the original repository. They will review your changes, provide feedback if necessary, and decide whether to merge them into the main branch.

Congratulations! You have successfully created a pull request to contribute your changes to the repository. Remember to monitor the pull request for any updates or feedback from the maintainers.

## Remarks ✅

- If anything is missing or if you feel that something is not well described, please create [an issue](https://github.com/OSCode-Community/OSCodeCommunitySite/issues)
- Any changes or suggestions to the existing content or repository are welcome.
- No need to worry, if any changes are required, the maintainers will request them from you.
