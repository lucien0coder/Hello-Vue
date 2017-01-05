---------------------------------------------------------
    git init //把这个目录变成Git可以管理的仓库
　　git add README.md //文件添加到仓库
　　git add . /git add -A //不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了 
　　git commit -m "first commit" //把文件提交到仓库
　　git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库
    git pull 同步远程仓库
　　git push -u origin master //把本地库的所有内容推送到远程库上

	从fork项目中更新
	git clone xxx   本地添加自己的fork项目   cd xxx
    git remote add ###  xxxx 给自己的仓库添加源项目   git remote -v 查看远程源
    git fetch ###   切换到源项目上
    git merge ###/master  进行合并

---------------------------------------------------
ssh-keygen -t rsa -C "your_email@youremail.com"
local:users - name - .ssh - id_rsa.pub
github:account settings - SSH Keys Add SSH Key
TEST:ssh -T git@github.com7

git config --global user.name "your name"
git config --global user.name "your name" 
git config --global user.email "your_email@youremail.com"

git remote add origin git@github.com:yourName/yourRepo.git