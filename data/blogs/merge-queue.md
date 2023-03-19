---
title: 'Merge Queues'
createdBy: 'Soham Parmar'
date: 'March 19, 2023'
image: '/Pipelines.png'
---

If you have been keeping up with developer news over the past few months, you have likely noticed that GitHub has released a substantial new feature, [merge queues](https://github.blog/changelog/2023-02-08-pull-request-merge-queue-public-beta/). The new feature has been rapidly developed over the course of a few years and currently sits in public beta as we eagerly wait for it to reach GA.

## Some background

The concept of merge queues have been around for quite a while in both development practices and actual products. Services such as [Trunk Merge](https://trunk.io/products/merge) and [Shipit](https://github.com/Shopify/shipit-engine) have existed to relieve many issues that developers face when it comes to contributing to high volume, high velocity code bases. Most code bases, including corporate ones, are housed in GitHub, and this leads to having to use third party services such as the ones described before in order to utilize a merge queue. GitHub deciding to develop their own merge queue solution that operates within the GitHub environment without any add-ons would be a game changer in making CI/CD even more efficient and reliable.

## The problem

A key point that should be mentioned is that the need for merge queues is not exactly ubiquitous. Trying to integrate merge queues into the CI/CD infrastructure of a personal project, small startup, or really anything other than a rapidly evolving codebase with many contributors, would be overkill. The primary purpose of merge queues is a very specific one, being to increase the rate of successful PR merges into an active branch.

The essence of a merge queue is just as the name describes - it is a queue. More specifically, it is a queue of PRs that are waiting to be merged into a primary branch (generally a busy branch). As a quick reminder, queues follow the FIFO (first in first out) principle for enqueuing and dequeuing elements. This means, the earlier a PR is added to the queue, the earlier it will be merged (if it can be merged).

A central problem found in high velocity code bases is conflict between changes. Multiple PRs, often do not agree with each other when they target the same branch. These _conflicts_ often arise because of two reasons:

- Code conflicts (merge conflicts)
- Logical conflicts

Solutions for merge conflicts are very well known and are intrinsic to version control. However, merge queues primarily act to solve the latter, **logical conflicts**.

Logical conflicts are conflicts that result from PRs that are able to merge, but a final branch that may not operate as it is intended to. The primary way of catching the build as "not operating as it is intended to" is through **tests**. Often times, these logical conflicts are as simple as one PR removes a reference to some method, while another PR adds a use of that method. It can be boiled down to anything that is not caught by simple text conflict checkers but irregardless causes unintended consequences for the target branch.

Let us take the example of two PRs that affect different parts of the codebase, thus not resulting in merge conflicts. Moreover, both PRs pass CI (tests, linting, etc) and are ready to merge into _main_. One of the PRs changes the tests of the codebase as to expect a certain behavior of methods, while the other PR changes such methods in such a way that does not align with the new tests.

Now, consider that the test changing PR is merged in, and the main branch is now changed. Note that the other PR still passes CI since it is based off of a separate "release" branch and not the up-to-date main with the changed tests. Now, we try to merge the other PR in (successfully), and we find that when _main_ builds with the new merge, it fails CI. The reason _main_ fails CI is because the second merge brings in code that fails the tests changed by the first PR.

## How do we fix this?

This sort of problem is not completely novel, and is a consequence of VCSs with multiple contributors. Often times, especially when it is reasonable, it is best to bring the PR up to date with the target branch just before merging. After bringing it up to date with the target, CI will be run in order to ensure compatibility. There are generally two major ways to do this:

### Merge commit

One of the simplest ways to bring the PR branch up to date with the target branch is to merge the target branch into the PR branch, creating a new merge commit. This will bring the PR branch up to date with the target branch, allowing CI to run with the new conditions. If CI passes, the PR is ready to be merged with (hopefully) no logical conflicts.

### Rebase

Another method to bring the branch up to speed with the target is to rebase the PR branch onto the latest commit of target. [Rebasing](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) will apply all of the commits in the PR onto the most recent version of the target, bringing it up to date with a linear history of commits.

### So what?

The choice of merging or rebasing is a [topic of discussion](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) that is intensely debated, and really comes down to personal preference.

However, whichever method you decide to employ, you still have to take care of the tediousness of conducting merging/rebasing before every PR merge. This becomes especially troublesome with high volume PRs in large code bases. Moreover, with a rapid amount of changes occurring to the target branch, the opportunity for racing conditions to render the rebase/merge old news becomes considerable.

As such, we need an automated, reliable solution to ensuring their are no merges that cause logical conflicts. Lo and behold, the merge queue.

## What is a merge queue?

When using a merge queue, the idea of merging PRs directly into their target is largely abandoned. Instead, PRs are added into the merge queue and the infrastructure takes care of its CI. Generally, the PR has to pass some simple CI checks before it can be added into the merge queue. This allows for only reasonable PRs to be added to the merge queue, reducing load. Moreover, we do not have to run a thorough CI check on PRs before they are added to the merge queue, since the merge queue will take care of extensive testing/checking, reducing the amount of CI work needed for a WIP PR.

Then, when the PR is ready to be merged, the developer adds it to the merge queue, and can sit back and watch. The merge queue operates on PRs in order the order they are added, and once it reaches the newly added PR, it will create a new temporary branch. This temporary branch will be based off of the latest version of master. It will then apply the PRs that are ahead of the PR of interest in order to simulate the code base just before the PR is merged. Note that it will not consider PRs ahead in line that result in the target branch failing since those PRs will be removed from the queue. It will then apply the changes of the PR of interest so that we have the most up to date code that the PR will result in if it eventually gets merged.

After creating this temporary branch, CI may be run on it to confirm working tests, builds, etc. If CI is successful, the PR is kept in queue, and if it isn't, it is removed from the queue. Successful PRs will be merged into the target branch one by one if they succeeded CI.

## Conclusion

As you may note, the epiphany found by the merge queue is the ability for CI to glance into the future. PRs are now validated and ran through CI based on how the codebase will look like when PRs ahead of it are merged first. Often times, tricky bugs do not come from the incompatibility between a PR and its target, but rather a PR and other PRs targeting the same branch.

Merge queues give us the confidence we need to ensure that PRs merged into _main_ will not abruptly cause unexpected misbehaviors. In essence, we hope to keep our primary branches **green** (passing CI) and ready to deploy, even if it means certain PRs are not allowed to merge in. This level of confidence in a primary branch smoothens the developer process by a great deal, especially in the case of rapidly changing code bases.
