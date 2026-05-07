

# IDEA连接GitHub

### 1、创建GitHub仓库

首先，在GitHub上创建一个新的仓库。登录GitHub账号，点击右上角的“+”号，选择“New repository”。填写仓库名称和描述，选择仓库的可见性，然后点击“Create repository”。



### 2.配置IDEA中的GitHub账号

打开IDEA，进入设置页面：File -> Settings -> Version Control -> GitHub。点击“添加账户”，选择通过Token认证。在GitHub网站生成一个新的Token，并将其粘贴到IDEA中进行登录。

Settings -> Version Control -> GitHub -> Add account -> Log In with Token
 
### 3.初始化本地Git仓库

在IDEA中打开要上传的项目，选择VCS -> Create Git Repository。在弹出的对话框中选择项目的根目录，点击“OK”。

VCS -> Create Git Repository



### 4.添加文件到本地仓库

在IDEA的右下角确认当前处于Git版本控制状态。选择项目，右键选择Git -> Add，将项目中的所有文件添加到本地仓库的暂存区。

VCS -> Git -> Add



### 5.提交文件到本地仓库

选择VCS -> Commit，将暂存区的文件提交到本地仓库。在弹出的对话框中填写提交信息，然后点击“Commit”。

VCS -> Commit


### 6.推送本地仓库到GitHub

先关联本地仓库和GitHub远程仓库。复制在GitHub上创建的仓库的URL，在弹出的对话框中输入远程仓库的URL，然后点击“OK”。

Git > Manager Remotes -> Define remote -> 输入URL -> OK


### 7.验证推送结果

打开GitHub上的对应仓库页面，刷新页面后应该能看到项目文件已经成功上传。

