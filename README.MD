# A glance of GIT commands



## 配置阶段

### 配置用户名

`git config --global user.name "Your Name"`

### 配置邮箱

`git config --global user.email "email@example.com"`

### 定位到 e 盘下

`cd /e/`

### 新建文件夹。e.g. gitSpace

`mkdir gitSpace`

### 定位到新建的文件夹下

`cd /e/gitSpace/`

### 将目标文件夹初始化为 git 库

`git init`

---

## 创建版本库

### 以 demo.txt 为例，将此文件添加到库

`git add demo.txt`

### 记录此次添加动作

`git commit -m "add a demo file"`

---

## 管理版本

### 查看库状态，如文件是否被修改过。e.g. "# modified: domo.txt"

`git status`

### 查看文件修改痕迹，差异

`git diff demo.txt`

### 提交修改过的文件以记录版本

`git add demo.txt` `git commit -m "changed demo.txt"`

### 库中文件均已为最新版本时的提示

```
On branch master
nothing to commit (working directory clean)
```

### 查看提交日志 完整版&简约版 版本号，例：ea34578d5496d7dd233c827ed32a8cd576c5ee85 记录，例：changed demo.txt

`git log` `git log --pretty=oneline`

### 回滚至上一版本，记数为'^'，或'HEAD~n'

`git reset --hard HEAD^`

### 前进至下一版本，例：rollback 前的版本为 ea3457**\*\***

`git reset --hard ea3457`

### 查看命令历史

`git reflog`

---

## add 执行单个添加，commit 执行多个（所有）修改

### 修改了文件但还未用 add 提交到暂存区时，丢弃修改

`git checkout -- demo.txt`

### 修改了文件并 add 提交到暂存区，但没有 commit 时，从暂存区删除并丢弃修改

`git reset HEAD demo.txt` `git checkout -- demo.txt`

### 删除物理文件

`rm demo.txt`

### 分支 1：确认并删除库中的文件

`git rm demo.txt` `git commit -m "remove demo.txt"`

### 分支 2：将库中文件恢复到物理文件，但是只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

`git checkout -- test.txt`

---

## 远程库

### 生成 SSH key

`ssh-keygen -t rsa -C "youremail@example.com"`

### 把本地库关联远程库

`git remote add origin git@github.com:username/demo.git`

### 把本地库内容推送至远程库，第一行为首次推送添加-u 以关联 master 分支，第二行为首次以后的简化

`git push -u origin master` `git push origin master`

### 把远程库内容克隆至本地库

`git clone git@github.com:username/demo.git`

---

## 分支管理

### 查看分支

`git branch`

### 创建分支

`git branch <name>`

### 切换分支

`git checkout <name>`

### 创建+切换分支

`git checkout -b <name>`

### 合并某分支到当前分支

`git merge <name>`

### 不用 fast forward 方式合并分支，即可在分支 log 中显示

`git merge --no-ff -m "msg" <name>`

### 删除分支

`git branch -d <name>`

### 查看分支 log

`git log --graph --pretty=oneline --abbrev-commit`

### 当手头工作没有完成时，先把工作现场 stash 一下

`git stash`

### 查看 stash 列表

`git stash list`

### 恢复 stash

`git stash apply`

### 删除 stash 内容

`git stash pop` `git stash drop`

### 丢弃一个没有被合并过的分支

`git branch -D <name>`

### 查看远程库信息

`git remote -v`

---

## 本地新建的分支如果不推送到远程，对其他人就是不可见的

### 推送分支

`git push origin branch-name`

### 如果推送失败，则因为远程分支比你的本地更新，需要抓取远程的新提交

`git pull`

### 如果 git pull 提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，需要用命令创建

`git branch --set-upstream branch-name origin/branch-name`

---

## 标签

### 用于新建一个标签，默认为 HEAD，也可以指定一个 commit id；

`git tag <tag-name> <commit id>`

### 指定标签信息

`git tag -a <tagname> -m "blablabla..."`

### 用 PGP 签名标签

`git tag -s <tagname> -m "blablabla..."`

### 查看所有标签。

`git tag`

### 推送一个本地标签

`git push origin <tagname>`

### 推送全部未推送过的本地标签

`git push origin --tags`

### 删除一个本地标签

`git tag -d <tagname>`

### 删除一个远程标签

`git push origin :refs/tags/<tagname>`

### 批量删除本地分支

`git branch |grep 'searchNameOrRegExp' |xargs git branch -D`

### 批量删除远程分支

`git branch -r| awk -F '[/]' '/regExp/ {printf"%s/%s\n",$2,$3}' |xargs -I{} git push origin :{}`

### 刷新远程分支

`git remote update origin --prune`

---

## 优化 git

### 忽略特殊文件

`touch .gitignore`

### 配置别名

`git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`
