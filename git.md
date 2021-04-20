#git steps

#first time git user
*git config --global user.name your name
*git config --global user.mail your mail

#github will need vs authentication

#when creating a new git repository(one time step)
*git init (initializes a empty git repository)

#in local git repository
*git add .(untracked,modified->staged files)
*git commit -m "first commit" (to give checkpoint to code or to save)

to add a remote(one time step)
*git remote add origin https://github.com/prachi868/web.git
*git remote add remote name https://github.com/username/web.git

#push all the code to github
*git push -u origin master
