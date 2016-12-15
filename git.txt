---------------------------------------------------------
    git init //把这个目录变成Git可以管理的仓库
　　git add README.md //文件添加到仓库
　　git add . /git add -A //不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了 
　　git commit -m "first commit" //把文件提交到仓库
　　git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库
    git pull 同步远程仓库
　　git push -u origin master //把本地库的所有内容推送到远程库上

---------------------config------------------------------
ssh-keygen -t rsa -C "your_email@youremail.com"
local:users - name - .ssh - id_rsa.pub
github:account settings - SSH Keys Add SSH Key
TEST:ssh -T git@github.com

git config --global user.name "your name"
git config --global user.name "your name" 
git config --global user.email "your_email@youremail.com"

git remote add origin git@github.com:yourName/yourRepo.git